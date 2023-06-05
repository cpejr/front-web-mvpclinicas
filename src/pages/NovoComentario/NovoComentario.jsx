import React, { useState } from "react";
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
} from "./Styles";

import Botao from "../../Styles/Botao/Botao";
import Input from "../../Styles/Input/Input";
import { Checkbox } from "antd";

function NovoComentario() {
  const [checkPreenchido, setCheckPreenchido] = useState(false);
  const [respostas, setRespostas] = useState({});
  const [erro, setErro] = useState({
    cargo: false,
    salario: false,
    dia_salario: false,
    avaliacao: false,
  });

  function estadoCheckbox() {
    setCheckPreenchido(!checkPreenchido);
  }

  function preenchendoRespostas(pergunta, valor) {
    setRespostas((prevRespostas) => ({
      ...prevRespostas,
      [pergunta]: valor,
    }));
  }

  function validarComentario() {
    const cargoErro = !respostas["Qual foi o cargo exercido no local?"];
    const salarioErro =
      !checkPreenchido && !respostas["De quanto era o salário pago?"];
    const diaSalarioErro =
      !checkPreenchido && !respostas["O salário era pago em dia?"];
    const avaliacaoErro =
      isNaN(respostas["Avaliação Geral"]) ||
      respostas["Avaliação Geral"] < 0 ||
      respostas["Avaliação Geral"] > 5;

    setErro((prevErro) => ({
      ...prevErro,
      cargo: cargoErro,
      salario: salarioErro,
      dia_salario: diaSalarioErro,
      avaliacao: avaliacaoErro,
    }));

    if (cargoErro || salarioErro || diaSalarioErro || avaliacaoErro) {
      alert("Preencha os campos obrigatórios corretamente!");
      return;
    }

    alert("uhuhuhuh");
  }

  function renderizaInput(pergunta) {
    return (
      <ConjuntoTituloInput>
        <TituloInput>{pergunta}</TituloInput>
        <InputComentario
          onChange={(e) => preenchendoRespostas(pergunta, e.target.value)}
        />
      </ConjuntoTituloInput>
    );
  }

  return (
    <Body>
      <Titulo>Responda as perguntas abaixo:</Titulo>
      <CaixaPerguntas>
        <ConjuntoTituloInput>
          <TituloInput>Qual foi o cargo exercido no local?</TituloInput>
          <InputComentario
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
            width="100%"
            textAlign="center"
            fontSize="1.4em"
            erro={erro.avaliacao}
            onChange={(e) =>
              preenchendoRespostas("Avaliação Geral", e.target.value)
            }
          />
          {erro.avaliacao && (
            <Rotulo>Digite uma nota de 0 a 5</Rotulo>
          )}
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
        <Botao width="40%" onClick={validarComentario}>
          Comentar
        </Botao>
      </CaixaBotoes>
    </Body>
  );
}

export default NovoComentario;
