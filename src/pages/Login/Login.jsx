import React from "react";
import { MailOutlined } from '@ant-design/icons';
import {
  Body,
  BotoesEdicao,
  CaixaBotoes,
  CaixaFoto,
  CaixaInput,
  Conteudo,
  BotaoCadastro,
  TituloInput,
} from "./Styles";
import Botao from "../../Styles/Botao/Botao";
import Input from "../../Styles/Input/Input";
function Login(){ 
  return ( 
    <Body>
    <Conteudo>
      <CaixaFoto></CaixaFoto>
      <CaixaInput> 
        <TituloInput>E-mail</TituloInput>
        <Input
          placeholder="Digite seu e-mail"
          color="#8B00FF"
          backgroundColor="white"
          type="email"
          width="50%"
          height="100%"
          minHeight="45px"
          maxHeight="40px"
          paddingRight="2%"
        >
          <MailOutlined style={{marginLeft: "1rem", position: "absolute"}} color="#623CEA" size="1.5em" />
        </Input>
        <TituloInput>Senha</TituloInput>
        <Input
          placeholder="Digite sua senha"
          backgroundColor="white"
          width="50%"
          type="password"
          height="100%"
          minHeight="45px"
          maxHeight="40px"
          paddingRight="2%"
        >
        </Input>
      </CaixaInput>
      <CaixaBotoes>
        <BotoesEdicao>
          <Botao fontSize = "1.2em" width="40%" widthMedia500="80%" widthMedia280="70%">Entrar</Botao>
        </BotoesEdicao>
        <BotaoCadastro
        textDecoration= "underline"
        width="40%"
        fontSize = "1.2em"
        widthMedia500="80%"
        widthMedia280="80%"
        onClick={() => {
          window.location.href="/cadastro"
        }}
        >Cadastre-se
        </BotaoCadastro>
      </CaixaBotoes>
    </Conteudo>
  </Body>
  ) 
} 
 
export default Login;