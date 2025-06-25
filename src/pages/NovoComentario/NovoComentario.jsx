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
} from "./Styles";
import Botao from "../../Styles/Botao/Botao";
import Input from "../../Styles/Input/Input";
import { Checkbox, Spin, Rate } from "antd";
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
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, color: "white" }} spin />
  );
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
    if (
      usuario?.formacao === "Estudante de Medicina" ||
      (usuario?.formacao === "Estudante" &&
        local?.tipo === "Instituição de Ensino")
    ) {
      novosErros = {
        ensino:
          !respostas["Como você avalia a qualidade do ensino na instituição?"],
      };
    } else if (usuario?.formacao === "Residente") {
      novosErros = {
        avaliacao:
          isNaN(respostas["Avaliação Geral"]) ||
          respostas["Avaliação Geral"] < 0 ||
          respostas["Avaliação Geral"] > 5,
      };
    } else {
      novosErros = {
        cargo: !respostas["Qual foi o cargo exercido no local?"],
        salario:
          !checkPreenchido && !respostas["De quanto era o salário pago?"],
        dia_salario:
          !checkPreenchido && !respostas["O salário era pago em dia?"],
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

      {usuario?.formacao == "Estudante de Medicina" ||
      (usuario?.formacao == "Estudante" &&
        local?.tipo !== "Instituição de Ensino") ? (
        <CaixaPlaceholder>
          <TextoPlaceholder>
            Você não pode comentar nesse local
          </TextoPlaceholder>
        </CaixaPlaceholder>
      ) : usuario?.formacao == "Estudante de Medicina" ||
        usuario?.formacao == "Estudante" ||
        (usuario?.formacao == "Residente" &&
          local?.tipo == "Instituição de Ensino") ? (
        <>
          <CaixaPerguntas>
            {renderizaInput(
              "Como você avalia a qualidade do ensino na instituição?",
              true
            )}
            {renderizaInput(
              "Os laboratórios e recursos para prática médica são adequados?"
            )}
            {renderizaInput(
              "O corpo docente possui experiência prática na área médica?"
            )}

            {renderizaInput(
              "Há oportunidades de estágio e residência oferecidas pela instituição?"
            )}
            {renderizaInput(
              "Como você avalia a infraestrutura da instituição?"
            )}
            {renderizaInput(
              "O suporte acadêmico e administrativo é eficiente?"
            )}
            {renderizaInput(
              "Qual é a sua avaliação geral sobre a instituição?"
            )}
          </CaixaPerguntas>
          <CaixaAvaliacao>
            <TituloAvaliacao>Avaliação Geral:</TituloAvaliacao>
            <Rate
              style={{ fontSize: 30 }}
              value={respostas["Avaliação Geral"]}
              onChange={(valor) =>
                preenchendoRespostas("Avaliação Geral", valor)
              }
            />
            <div
              style={{
                marginTop: 8,
                color: erro.avaliacao ? "red" : "#570B87",
              }}
            ></div>
            {erro.avaliacao && <Rotulo>Digite uma nota de 0 a 5</Rotulo>}
          </CaixaAvaliacao>
        </>
      ) : usuario?.formacao == "Residente" && local?.tipo == "Clínica" ? (
        <>
          <CaixaPerguntas>
            {renderizaInput(
              "Na experiência de vocês, o volume de pacientes atendidos na residência é adequado para uma boa formação?",
              true
            )}
            {renderizaInput(
              "Vocês sentem que há um bom equilíbrio entre a parte teórica e a prática na residência? Isso faz diferença na rotina de vocês?"
            )}
            {renderizaInput(
              "Como vocês veem a atuação dos preceptores nos ambulatórios e cirurgias? Eles conseguem orientar bem e ensinar durante os atendimentos?"
            )}

            {renderizaInput(
              "Como é a parte acadêmica da residência de vocês? Há espaço para discussão de casos, produção científica e atualização teórica?"
            )}
            {renderizaInput(
              "Como é o ambiente entre os setores do hospital? Há boa integração e convivência entre as equipes?"
            )}
            {renderizaInput(
              "Durante a residência/especialização, há oportunidade de realizar estágios em diferentes áreas ou subespecialidades?"
            )}
            {renderizaInput(
              "Como é a carga horária da residência? Vocês têm day off e a escala costuma ser divulgada com antecedência?"
            )}
            {renderizaInput(
              "A sua especialização é custeada por você ou há oferta de bolsa/remuneração durante o programa?"
            )}
          </CaixaPerguntas>
          <CaixaAvaliacao>
            <TituloAvaliacao>Avaliação Geral:</TituloAvaliacao>

            <Rate
              style={{ fontSize: 30 }}
              value={respostas["Avaliação Geral"]}
              onChange={(valor) =>
                preenchendoRespostas("Avaliação Geral", valor)
              }
            />
            <div
              style={{
                marginTop: 8,
                color: erro.avaliacao ? "red" : "#570B87",
              }}
            ></div>
            {erro.avaliacao && <Rotulo>Digite uma nota de 0 a 5</Rotulo>}
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
                Q
                onChange={(e) =>
                  preenchendoRespostas(
                    "Qual foi o cargo exercido no local?",
                    e.target.value
                  )
                }
              />
            </ConjuntoTituloInput>
            <CaixaSalario>
              <CaixaCheckbox>
                <TituloInput justifyContent="center">
                  Não desejo responder essa seção
                </TituloInput>
                <Checkbox onChange={estadoCheckbox}></Checkbox>
              </CaixaCheckbox>
              <ConjuntoTituloInput>
                <TituloInput
                  style={{ color: checkPreenchido ? "gray" : "#570B87" }}
                >
                  De quanto era o salário pago?
                </TituloInput>
                <InputComentario
                  placeholder="Área do texto"
                  disabled={checkPreenchido}
                  erro={erro.salario}
                  checkPreenchido={checkPreenchido}
                  onChange={(e) =>
                    preenchendoRespostas(
                      "De quanto era o salário pago?",
                      e.target.value
                    )
                  }
                />
              </ConjuntoTituloInput>
              <ConjuntoTituloInput>
                <TituloInput
                  style={{ color: checkPreenchido ? "gray" : "#570B87" }}
                >
                  O salário era pago em dia?
                </TituloInput>
                <InputComentario
                  placeholder="Área do texto"
                  disabled={checkPreenchido}
                  erro={erro.dia_salario}
                  checkPreenchido={checkPreenchido}
                  onChange={(e) =>
                    preenchendoRespostas(
                      "O salário era pago em dia?",
                      e.target.value
                    )
                  }
                />
              </ConjuntoTituloInput>
            </CaixaSalario>
            {renderizaInput("O Local possuí equipe de apoio adequada?")}
            {renderizaInput("Qual o volume de pacientes?")}
            {renderizaInput(
              "No cargo exercido você era responsável por quais outros cargos?"
            )}
            {renderizaInput("Qual a área de abrangência do Local")}
            {renderizaInput(
              "Como era a organização do local (Divisão em blocos e áreas)?"
            )}
            {renderizaInput("Quais as condições de recursos para o trabalho?")}
            {renderizaInput("Fornece Alimentação?")}
            {renderizaInput("Fornece Horário e Local de descanso adequado?")}
            {renderizaInput("Voce sofria assedio pela chefia?")}
            {renderizaInput("Algum outro comentário?")}
          </CaixaPerguntas>
          <CaixaAvaliacao>
            <TituloAvaliacao>Avaliação Geral:</TituloAvaliacao>

            <Rate
              style={{ fontSize: 30 }}
              value={respostas["Avaliação Geral"]}
              onChange={(valor) =>
                preenchendoRespostas("Avaliação Geral", valor)
              }
            />
            <div
              style={{
                marginTop: 8,
                color: erro.avaliacao ? "red" : "#570B87",
              }}
            ></div>
            {erro.avaliacao && <Rotulo>Digite uma nota de 0 a 5</Rotulo>}
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
