import { useEffect, useState } from "react";
import {
  Body,
  CaixaAvaliacao,
  CaixaBotoes,
  CaixaCheckbox,
  CaixaInputRotulo,
  CaixaPerguntas,
  CaixaSalario,
  ConjuntoTituloInput,
  InputComentario,
  Rotulo,
  Titulo,
  TituloAvaliacao,
  TituloInput,
  NaoObrigatorio,
  CaixaTitulo,
} from "./Styles";
import Logo from "../../assets/logo-no-background.svg";
import Botao from "../../Styles/Botao/Botao";
import Input from "../../Styles/Input/Input";
import { Checkbox, Spin } from "antd";
import AddToast from "../../components/AddToast/AddToast";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import {
  CriarNovoComentario,
  GetDadosLocalPorId,
} from "../../services/ManagerService/managerService";
import { LoadingOutlined } from "@ant-design/icons";
import useAuthStore from "../../stores/auth";
import { CaixaPlaceholder, TextoPlaceholder } from "../Home/Styles";

function NovoComentario() {
  const { usuario } = useAuthStore.getState();
  const id_usuario = usuario._id;

  const [checkPreenchido, setCheckPreenchido] = useState(false);
  const [respostas, setRespostas] = useState({});
  const [carregando, setCarregando] = useState(false);
  const antIcon = <LoadingOutlined style={{ fontSize: 24, color: "white" }} spin />;
  const [erro, setErro] = useState({});
  const navegar = useNavigate();

  const { id_local } = useParams();
  const [local, setLocal] = useState();

  useEffect(() => {
    async function pegandoDadosLocal() {
      const resposta = await GetDadosLocalPorId(id_local);
      setLocal(resposta?.dadosLocais?._doc);
    }
    pegandoDadosLocal();
  }, []);

  function estadoCheckbox() {
    setCheckPreenchido(!checkPreenchido);
  }

  function preenchendoRespostas(pergunta, valor) {
    setRespostas((respostasAnteriores) => ({
      ...respostasAnteriores,
      [pergunta]: valor,
    }));
  }

  async function validarComentario() {
    setCarregando(true);

    let novosErros = {};
    // Validação obrigatória
    if (usuario?.formacao === "Estudante de Medicina" && local?.tipo === "Instituição de Ensino") {
      novosErros = {
        ensino: !respostas["Como você avalia a qualidade do ensino na instituição?"],
      };
    } else {
      novosErros = {
        cargo: !respostas["Qual foi o cargo exercido no local?"],
        salario: !checkPreenchido && !respostas["De quanto era o salário pago?"],
        dia_salario: !checkPreenchido && !respostas["O salário era pago em dia?"],
        avaliacao:
          isNaN(respostas["Avaliação Geral"]) ||
          respostas["Avaliação Geral"] < 0 ||
          respostas["Avaliação Geral"] > 5,
      };
    }

    setErro(novosErros);

    if (Object.values(novosErros).some(Boolean)) {
      setCarregando(false);
      toast.error("Preencha os campos obrigatórios corretamente!");
      return;
    }

    const comentario = Object.assign({}, respostas);
    const avaliacao = comentario["Avaliação Geral"];
    delete comentario["Avaliação Geral"];

    const body = {
      id_usuario: id_usuario,
      avaliacao: avaliacao,
      comentario: comentario,
    };

    try {
      await CriarNovoComentario(body, id_local);
      toast.success("Comentário cadastrado com sucesso!");
      setTimeout(() => {
        navegar(`/local/${id_local}`);
        setCarregando(false);
      }, 3000);
    } catch (err) {
      if (err.response.status === 400) {
        setCarregando(false);
        return toast.error("O local está incorreto!");
      }
      setCarregando(false);
      toast.error("Erro no servidor!");
    }
  }

  function renderizaInput(pergunta, obrigatorio = false) {
    return (
      <ConjuntoTituloInput>
        <TituloInput>{pergunta}</TituloInput>
        <InputComentario
          placeholder="Área do texto"
          erro={obrigatorio && erro[pergunta.toLowerCase()]}
          onChange={(e) => preenchendoRespostas(pergunta, e.target.value)}
        />
        {!obrigatorio && <NaoObrigatorio>Não obrigatório*</NaoObrigatorio>}
      </ConjuntoTituloInput>
    );
  }

  return (
    <Body>
      <AddToast />

      <Titulo>Cadastrar um comentário</Titulo>

      {usuario?.formacao == "Estudante de Medicina" && local?.tipo !== "Instituição de Ensino" ? (
        <CaixaPlaceholder>
          <TextoPlaceholder>Você não pode comentar nesse local</TextoPlaceholder>
        </CaixaPlaceholder>
      ) : usuario?.formacao == "Estudante de Medicina" && local?.tipo == "Instituição de Ensino" ? (
        <>
          <CaixaPerguntas>
            {renderizaInput("Como você avalia a qualidade do ensino na instituição?", true)}
            {renderizaInput("Os laboratórios e recursos para prática médica são adequados?")}
            {renderizaInput("O corpo docente possui experiência prática na área médica?")}
            {renderizaInput(
              "Há oportunidades de estágio e residência oferecidas pela instituição?"
            )}
            {renderizaInput("Como você avalia a infraestrutura da instituição?")}
            {renderizaInput("O suporte acadêmico e administrativo é eficiente?")}
            {renderizaInput("Qual é a sua avaliação geral sobre a instituição?")}
          </CaixaPerguntas>
          <CaixaAvaliacao>
            <TituloAvaliacao>Avaliação Geral:</TituloAvaliacao>
            <CaixaInputRotulo>
              <Input
                textAlign="center"
                fontSize="1.4em"
                erro={erro.avaliacao}
                onChange={(e) => preenchendoRespostas("Avaliação Geral", e.target.value)}
                borderWidth="0px 0px 1px 0px"
                borderColor={erro.avaliacao ? "red" : "#570B87"}
              />
              {erro.avaliacao && <Rotulo>Digite uma nota de 0 a 5</Rotulo>}
            </CaixaInputRotulo>
          </CaixaAvaliacao>
        </>
      ) : (
        <>
          <CaixaPerguntas>
            <ConjuntoTituloInput>
              <TituloInput>Qual foi o cargo exercido no local?</TituloInput>
              <InputComentario
                placeholder="Área do texto"
                erro={erro.cargo}
                onChange={(e) =>
                  preenchendoRespostas("Qual foi o cargo exercido no local?", e.target.value)
                }
              />
            </ConjuntoTituloInput>
            <CaixaSalario>
              <CaixaCheckbox>
                <TituloInput justifyContent="center">Não desejo responder essa seção</TituloInput>
                <Checkbox onChange={estadoCheckbox}></Checkbox>
              </CaixaCheckbox>
              <ConjuntoTituloInput>
                <TituloInput style={{ color: checkPreenchido ? "gray" : "#570B87" }}>
                  De quanto era o salário pago?
                </TituloInput>
                <InputComentario
                  placeholder="Área do texto"
                  disabled={checkPreenchido}
                  erro={erro.salario}
                  checkPreenchido={checkPreenchido}
                  onChange={(e) =>
                    preenchendoRespostas("De quanto era o salário pago?", e.target.value)
                  }
                />
              </ConjuntoTituloInput>
              <ConjuntoTituloInput>
                <TituloInput style={{ color: checkPreenchido ? "gray" : "#570B87" }}>
                  O salário era pago em dia?
                </TituloInput>
                <InputComentario
                  placeholder="Área do texto"
                  disabled={checkPreenchido}
                  erro={erro.dia_salario}
                  checkPreenchido={checkPreenchido}
                  onChange={(e) =>
                    preenchendoRespostas("O salário era pago em dia?", e.target.value)
                  }
                />
              </ConjuntoTituloInput>
            </CaixaSalario>
            {renderizaInput("O Local possuí equipe de apoio adequada?")}
            {renderizaInput("Qual o volume de pacientes?")}
            {renderizaInput("No cargo exercido você era responsável por quais outros cargos?")}
            {renderizaInput("Qual a área de abrangência do Local")}
            {renderizaInput("Como era a organização do local (Divisão em blocos e áreas)?")}
            {renderizaInput("Quais as condições de recursos para o trabalho?")}
            {renderizaInput("Fornece Alimentação?")}
            {renderizaInput("Fornece Horário e Local de descanso adequado?")}
            {renderizaInput("Algum outro comentário?")}
          </CaixaPerguntas>
          <CaixaAvaliacao>
            <TituloAvaliacao>Avaliação Geral:</TituloAvaliacao>
            <CaixaInputRotulo>
              <Input
                textAlign="center"
                fontSize="1.4em"
                erro={erro.avaliacao}
                onChange={(e) => preenchendoRespostas("Avaliação Geral", e.target.value)}
                borderWidth="0px 0px 1px 0px"
                borderColor={erro.avaliacao ? "red" : "#570B87"}
              />
              {erro.avaliacao && <Rotulo>Digite uma nota de 0 a 5</Rotulo>}
            </CaixaInputRotulo>
          </CaixaAvaliacao>
        </>
      )}

      <CaixaBotoes>
        <Botao width="40%" onClick={validarComentario}>
          {carregando ? <Spin indicator={antIcon} /> : "Cadastrar"}
        </Botao>
        <Botao
          color="#fff"
          backgroundColor="#ff3a3a"
          borderColor="#ff3a3a"
          width="40%"
          onClick={() => navegar(`/local/${id_local}`)}
        >
          Cancelar
        </Botao>
      </CaixaBotoes>
    </Body>
  );
}

export default NovoComentario;
