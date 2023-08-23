import React, { useState } from "react";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

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
  Rotulo,
  RotuloSenha,
} from "./Styles";
import Botao from "../../Styles/Botao/Botao";
import Input from "../../Styles/Input/Input";
import * as managerService from "../../services/ManagerService/managerService";
import { LoadingOutlined } from "@ant-design/icons";
import AddToast from "../../components/AddToast/AddToast";
import { toast } from "react-toastify";
import _ from "lodash";
import { Spin } from "antd";
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const referenciaCamposNulos = {
    email: false,
    senha: false,
  };
  const [camposVazios, setCamposVazios] = useState({
    email: true,
    senha: true,
  });
  const [erroLoginInvalido, setErroLoginInvalido] = useState(
    referenciaCamposNulos
  );
  const [deuUploadInicial, setDeuUploadInicial] = useState(false);

  async function validacaoEmail(e) {
    const { value, name } = e.target;
    if (value) {
      setCamposVazios({ ...camposVazios, [name]: false });
    } else {
      setCamposVazios({ ...camposVazios, [name]: true });
    }

    const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regEx.test(value)) {
      setErro({ ...erro, [name]: true });
    } else {
      setErro({ ...erro, [name]: false });
    }

    setEmail(value);
  }

  async function validacaoSenha(e) {
    const { value, name } = e.target;

    if (value) {
      setCamposVazios({ ...camposVazios, [name]: false });
    } else {
      setCamposVazios({ ...camposVazios, [name]: true });
    }

    if (name === "senha" && value.length < 8) {
      setErro({ ...erro, [name]: true });
    } else {
      setErro({ ...erro, [name]: false });
    }

    setSenha(value);
  }

  async function logar() {
    setDeuUploadInicial(true);
    if (
      _.isEqual(camposVazios, referenciaCamposNulos) &&
      _.isEqual(erro, referenciaCamposNulos)
    ) {
      setCarregando(true);
      const resposta = await managerService.requisicaoLogin(email, senha);
      setCarregando(false);
      if (resposta) toast.success("Login realizado com sucesso");
      else {
        setErroLoginInvalido({ email: true, senha: true });
      }
    } else if (!_.isEqual(camposVazios, referenciaCamposNulos)) {
      toast.error("Preencha todos os campos");
      return;
    } else {
      toast.error("Preencha todos os campos corretamente");
      return;
    }
  }

  return (
    <Body>
      <Conteudo>
        <CaixaFoto></CaixaFoto>
        <CaixaInput>
          <InputNovo>
            <TituloIcon>
              <TituloInput>E-mail</TituloInput>
              <MailOutlined
                style={{ fontSize: "18px", color: "#570B87", marginTop: "10%" }}
              />
            </TituloIcon>
            <Input
              placeholder="Digite seu e-mail"
              backgroundColor="white"
              type="email"
              width="50%"
              height="100%"
              minHeight="45px"
              maxHeight="40px"
              paddingRight="2%"
              marginBottom="0%"
              name="email"
              value={email}
              onChange={validacaoEmail}
              camposVazios={camposVazios.email}
              erro={
                erro.email ||
                erroLoginInvalido.email ||
                (deuUploadInicial && camposVazios.email)
              }
            ></Input>
            {erro.email && (
              <Rotulo>Digite um email no formato email@email.com</Rotulo>
            )}
          </InputNovo>

          <TituloIcon>
            <TituloInput>Senha</TituloInput>
            <LockOutlined
              style={{ fontSize: "18px", color: "#570B87", marginTop: "10%" }}
            />
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
            name="senha"
            senh
            value={senha}
            onChange={validacaoSenha}
            camposVazios={camposVazios.senha}
            erro={
              erro.senha ||
              erroLoginInvalido.senha ||
              (deuUploadInicial && camposVazios.senha)
            }
          ></Input>
          {erro.senha && (
            <RotuloSenha>Digite uma senha com no minimo 8 digitos</RotuloSenha>
          )}
        </CaixaInput>
        <CaixaBotoes>
          <BotoesEdicao>
            <Botao
              type="submit"
              fontSize="1.2em"
              width="40%"
              widthMedia500="80%"
              widthMedia280="70%"
              onClick={() => logar()}
            >
              {carregando ? <Spin indicator={antIcon} /> : "Confirmar"}
            </Botao>
          </BotoesEdicao>
          <BotaoCadastro
            textDecoration="underline"
            width="40%"
            fontSize="1.2em"
            widthMedia500="80%"
            widthMedia280="80%"
            onClick={() => {
              window.location.href = "/Cadastro";
            }}
          >
            Cadastre-se
          </BotaoCadastro>
        </CaixaBotoes>
      </Conteudo>
      <AddToast />
    </Body>
  );
}

export default Login;
