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
            <TituloInput>Nome Completo:</TituloInput>
            <Input
              placeholder="Nome Completo"
              backgroundColor="white"
              width="90%"
              height="100%"
              minHeight="45px"
              maxHeight="40px"
              paddingRight="2%"
            ></Input>
          </ConjuntoTituloInput>
          <InputDividido>
            <ConjuntoTituloInput>
              <TituloInput>Telefone:</TituloInput>
              <Input
                placeholder="Telefone"
                backgroundColor="white"
                width="50%"
                height="100%"
                minHeight="45px"
                maxHeight="40px"
                paddingRight="2%"
              ></Input>
            </ConjuntoTituloInput>
            <ConjuntoTituloInput>
              <TituloInput>Data de Nascimento:</TituloInput>
              <Input
                placeholder="Data de Nascimento"
                backgroundColor="white"
                width="50%"
                height="100%"
                minHeight="45px"
                maxHeight="40px"
                paddingRight="2%"
              ></Input>
            </ConjuntoTituloInput>
          </InputDividido>
          <ConjuntoTituloInput>
            <TituloInput>Email</TituloInput>
            <Input
              placeholder="Email"
              backgroundColor="white"
              width="90%"
              height="100%"
              minHeight="45px"
              maxHeight="40px"
              paddingRight="2%"
            ></Input>
          </ConjuntoTituloInput>
          <InputDividido>
            <ConjuntoTituloInput>
              <TituloInput>CRM</TituloInput>
              <Input
                placeholder="CRM"
                backgroundColor="white"
                width="50%"
                height="100%"
                minHeight="45px"
                maxHeight="40px"
                paddingRight="2%"
              ></Input>
            </ConjuntoTituloInput>
            <ConjuntoTituloInput>
              <TituloInput>Unidade Federativa</TituloInput>
              <Input
                placeholder="Unidade Federativa"
                backgroundColor="white"
                width="50%"
                height="100%"
                minHeight="45px"
                maxHeight="40px"
                paddingRight="2%"
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
            Excluir</Botao>
        </CaixaBotoes>
      </Conteudo>
    </Body>
  );
}

export default Perfil;
