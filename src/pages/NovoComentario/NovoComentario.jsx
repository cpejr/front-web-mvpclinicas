import React from "react";
import {
  Body,
  CaixaAvaliacao,
  CaixaBotoes,
  CaixaPerguntas,
  CaixaSalario,
  ConjuntoTituloInput,
  Titulo,
  TituloAvaliacao,
  TituloInput,
} from "./Styles";

import Botao from "../../Styles/Botao/Botao";
import Input from "../../Styles/Input/Input";

function NovoComentario() {
  return (
    <Body>
      <Titulo>Responda as perguntas abaixo:</Titulo>
      <CaixaPerguntas>
        <ConjuntoTituloInput>
          <TituloInput>Qual foi o cargo exercido no local?</TituloInput>
          <Input
            border="1px solid #570B87"
            borderRadius="18px"
            height="30px"
          ></Input>
        </ConjuntoTituloInput>
        <CaixaSalario>
          <ConjuntoTituloInput>
            <TituloInput>De quanto era o salário pago?</TituloInput>
            <Input
              border="1px solid #570B87"
              borderRadius="18px"
              height="30px"
            ></Input>
          </ConjuntoTituloInput>
          <ConjuntoTituloInput>
            <TituloInput>O salário era pago em dia?</TituloInput>
            <Input
              border="1px solid #570B87"
              borderRadius="18px"
              height="30px"
            ></Input>
          </ConjuntoTituloInput>
        </CaixaSalario>
        <ConjuntoTituloInput>
          <TituloInput>O Local possuí equipe de apoio adequada ?</TituloInput>
          <Input
            border="1px solid #570B87"
            borderRadius="18px"
            height="30px"
          ></Input>
        </ConjuntoTituloInput>
        <ConjuntoTituloInput>
          <TituloInput>Qual o volume de pacientes?</TituloInput>
          <Input
            border="1px solid #570B87"
            borderRadius="18px"
            height="30px"
          ></Input>
        </ConjuntoTituloInput>
        <ConjuntoTituloInput>
          <TituloInput>
            No cargo exercido você era responsável por quais outros cargos ?
          </TituloInput>
          <Input
            border="1px solid #570B87"
            borderRadius="18px"
            height="30px"
          ></Input>
        </ConjuntoTituloInput>
        <ConjuntoTituloInput>
          <TituloInput>Qual a área de abrangência do Local</TituloInput>
          <Input
            border="1px solid #570B87"
            borderRadius="18px"
            height="30px"
          ></Input>
        </ConjuntoTituloInput>
        <ConjuntoTituloInput>
          <TituloInput>
            Como era a organização do local (Divisão em blocos e áreas)?
          </TituloInput>
          <Input
            border="1px solid #570B87"
            borderRadius="18px"
            height="30px"
          ></Input>
        </ConjuntoTituloInput>
        <ConjuntoTituloInput>
          <TituloInput>
            Quais as condições de recursos para o trabalho ?
          </TituloInput>
          <Input
            border="1px solid #570B87"
            borderRadius="18px"
            height="30px"
          ></Input>
        </ConjuntoTituloInput>
        <ConjuntoTituloInput>
          <TituloInput>Fornece Alimentação ?</TituloInput>
          <Input
            border="1px solid #570B87"
            borderRadius="18px"
            height="30px"
          ></Input>
        </ConjuntoTituloInput>
        <ConjuntoTituloInput>
          <TituloInput>
            Fornece Horário e Local de descanso adequado ?
          </TituloInput>
          <Input
            border="1px solid #570B87"
            borderRadius="18px"
            height="30px"
          ></Input>
        </ConjuntoTituloInput>
        <ConjuntoTituloInput>
          <TituloInput>Algum outro comentário ?</TituloInput>
          <Input
            border="1px solid #570B87"
            borderRadius="18px"
            height="30px"
          ></Input>
        </ConjuntoTituloInput>
      </CaixaPerguntas>
      <CaixaAvaliacao>
        <TituloAvaliacao>Avaliação Geral:</TituloAvaliacao>
        <Input width="30%"></Input>
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
        <Botao width="40%">Comentar</Botao>
      </CaixaBotoes>
    </Body>
  );
}

export default NovoComentario;
