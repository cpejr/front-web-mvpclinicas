import React from "react";
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import Icon from "@ant-design/icons/lib/components/Icon";
import {
  Body,
  BotoesEdicao,
  CaixaBotoes,
  CaixaFoto,
  CaixaInput,
  Conteudo,
  BotaoCadastro,
  TituloInput,
  TituloIcon,
  InputNovo,
} from "./Styles";
import Botao from "../../Styles/Botao/Botao";
import Input from "../../Styles/Input/Input";
function Login(){ 
  return ( 
    <Body>
    <Conteudo>
      <CaixaFoto></CaixaFoto>
      <CaixaInput> 
        <InputNovo>
        <TituloIcon>
              <TituloInput>E-mail</TituloInput>
              <MailOutlined style={{ fontSize: "18px", color: "#570B87", marginTop: "10%"}} />
            </TituloIcon>
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
          marginBottom="-5%"
        >
        </Input>
        </InputNovo>
        <TituloIcon>
              <TituloInput>Senha</TituloInput>
              <LockOutlined style={{ fontSize: "18px", color: "#570B87", marginTop: "10%"}} />
            </TituloIcon>
        <Input
          placeholder="Digite sua senha"
          backgroundColor="white"
          width="50%"
          type="password"
          height="100%"
          minHeight="45px"
          maxHeight="40px"
          marginTop="0%"
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