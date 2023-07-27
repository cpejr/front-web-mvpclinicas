import { useState } from "react";
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
import { Checkbox, Spin } from "antd";
import AddToast from "../../components/AddToast/AddToast";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { CriarNovoComentario } from "../../services/ManagerService/managerService";
import { LoadingOutlined } from "@ant-design/icons";

function NovoComentario() {
  const [checkPreenchido, setCheckPreenchido] = useState(false);
  const [respostas, setRespostas] = useState({});
  const [carregando, setCarregando] = useState(false);
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, color: "white" }} spin />
  );
  const [erro, setErro] = useState({
    cargo: false,
    salario: false,
    dia_salario: false,
    avaliacao: false,
  });
  const navegar = useNavigate();

  const {id_local} = useParams();
  const id_usuario = "64ae9e9eb163ec6a9b9ed270";

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
    const cargoErro = !respostas["Qual foi o cargo exercido no local?"];
    const salarioErro =
      !checkPreenchido && !respostas["De quanto era o salário pago?"];
    const diaSalarioErro =
      !checkPreenchido && !respostas["O salário era pago em dia?"];
    const avaliacaoErro =
      isNaN(respostas["Avaliação Geral"]) ||
      respostas["Avaliação Geral"] < 0 ||
      respostas["Avaliação Geral"] > 5;

    setErro((erroAnterior) => ({
      ...erroAnterior,
      cargo: cargoErro,
      salario: salarioErro,
      dia_salario: diaSalarioErro,
      avaliacao: avaliacaoErro,
    }));

    if (cargoErro || salarioErro || diaSalarioErro || avaliacaoErro) {
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

      toast.success("Local Cadastrado com sucesso!");
      setTimeout(() => {
        navegar("/home");
        setCarregando(false);
      }, 3000);
    } catch (err) {
      if (err.response.status === 400) {
        setCarregando(false);
        return toast.error("O id do local está incorreto!");
      }
      setCarregando(false);
      console.log(err.response.data);
      toast.error("Erro no servidor!");
    }
  }

  function renderizaInput(pergunta) {
    return (
      <ConjuntoTituloInput>
        <TituloInput>{pergunta}</TituloInput>
        <InputComentario
          placeholder="Área do texto"
          onChange={(e) => preenchendoRespostas(pergunta, e.target.value)}
        />
        <NaoObrigatorio>Não obrigatório*</NaoObrigatorio>
      </ConjuntoTituloInput>
    );
  }

  return (
    <Body>
      <AddToast />
      <Titulo>Responda as perguntas abaixo:</Titulo>
      <CaixaPerguntas>
        <ConjuntoTituloInput>
          <TituloInput>Qual foi o cargo exercido no local?</TituloInput>
          <InputComentario
            placeholder="Área do texto"
            erro={erro.cargo}
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
          "No cargo exercido você era responsável por quais outros cargos?",
          false
        )}
        {renderizaInput("Qual a área de abrangência do Local")}
        {renderizaInput(
          "Como era a organização do local (Divisão em blocos e áreas)?",
          false
        )}
        {renderizaInput(
          "Quais as condições de recursos para o trabalho?",
          false
        )}
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
            onChange={(e) =>
              preenchendoRespostas("Avaliação Geral", e.target.value)
            }
            borderWidth="0px 0px 1px 0px"
            borderColor={erro.avaliacao ? "red" : "#570B87"}
          />
          {erro.avaliacao && <Rotulo>Digite uma nota de 0 a 5</Rotulo>}
        </CaixaInputRotulo>
      </CaixaAvaliacao>
      <CaixaBotoes>
        <Botao
          color="#ffffff"
          backgroundColor="#ff0000c5"
          borderColor="#ff0000"
          width="40%"
        >
          Excluir
        </Botao>
        <Botao
          width="40%"
          onClick={() => {
            validarComentario();
          }}
        >
          {carregando ? <Spin indicator={antIcon} /> : "Cadastrar"}
        </Botao>
      </CaixaBotoes>
    </Body>
  );
}

export default NovoComentario;
