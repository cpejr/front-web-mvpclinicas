import React from "react";
import {
  Body,
  BotoesEdicao,
  CaixaBotoes,
  CaixaFoto,
  CaixaInputs,
  ConjuntoTituloInput,
  Conteudo,
  InputDividido,
  TituloInput,
} from "./Styles";

import Botao from "../../Styles/Botao/Botao";
import Input from "../../Styles/Input/Input";

function Perfil() {
  return (
    <Body>
      <Conteudo>
        <CaixaFoto></CaixaFoto>
        <CaixaInputs>
          <ConjuntoTituloInput>
            <TituloInput>NOME COMPLETO:</TituloInput>
            <Input
              placeholder="Digite seu nome completo"
              backgroundColor="white"
              height="40px"
            ></Input>
          </ConjuntoTituloInput>
          <InputDividido>
            <ConjuntoTituloInput>
              <TituloInput>TELEFONE:</TituloInput>
              <Input
                placeholder="Digite seu número de telefone"
                backgroundColor="white"
                width="100%"
                height="40px"
                alignSelf="flex-start"
              ></Input>
            </ConjuntoTituloInput>
            <ConjuntoTituloInput>
              <TituloInput>DATA DE NASCIMENTO:</TituloInput>
              <Input
                placeholder="Digite sua data de nascimento:"
                backgroundColor="white"
                width="100%"
                height="40px"
                alignSelf="flex-start"
              ></Input>
            </ConjuntoTituloInput>
          </InputDividido>
          <ConjuntoTituloInput>
            <TituloInput>EMAIL:</TituloInput>
            <Input
              placeholder="Digite seu endereço de e-mail"
              backgroundColor="white"
              height="40px"
            ></Input>
          </ConjuntoTituloInput>
          <InputDividido>
            <ConjuntoTituloInput>
              <TituloInput>CRM:</TituloInput>
              <Input
                placeholder="Digite seu CRM"
                backgroundColor="white"
                width="100%"
                height="40px"
                alignSelf="flex-start"
              ></Input>
            </ConjuntoTituloInput>
            <ConjuntoTituloInput>
              <TituloInput>UNIDADE FEDERATIVA</TituloInput>
              <Input
                placeholder="Digite a Unidade Federativa Referente ao seu CRM"
                backgroundColor="white"
                width="100%"
                height="40px"
                justifyContent="flex-start"
                alignSelf="flex-start"
              ></Input>
            </ConjuntoTituloInput>
          </InputDividido>
        </CaixaInputs>
        <CaixaBotoes>
          <BotoesEdicao>
            <Botao>Alterar Dados</Botao>
            <Botao>Alterar Senha</Botao>
          </BotoesEdicao>
          <Botao
            color="#000000"
            backgroundColor="white"
            borderColor="#FF000080"
          >
            Excluir
          </Botao>
        </CaixaBotoes>
      </Conteudo>
    </Body>
  );
}

export default Perfil;
