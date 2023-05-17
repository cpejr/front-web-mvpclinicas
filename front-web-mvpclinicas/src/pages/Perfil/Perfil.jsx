import React from "react";
import {
  Body,
  BotoesEdicao,
  CaixaBotoes,
  CaixaFoto,
  CaixaInput,
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
        <CaixaInput>
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
          <InputDividido>
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
          </InputDividido>
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
          <InputDividido>
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
          </InputDividido>
        </CaixaInput>
        <CaixaBotoes>
          <BotoesEdicao>
            <Botao>Alterar Dados</Botao>
            <Botao>Alterar Senha</Botao>
          </BotoesEdicao>
          <Botao>Excluir</Botao>
        </CaixaBotoes>
      </Conteudo>
    </Body>
  );
}

export default Perfil;
