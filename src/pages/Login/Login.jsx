import { useState } from "react";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

import { Body, CaixaFoto } from "./Styles";

import { toast } from "react-toastify";
import useAuthStore from "../../stores/auth";
import { useLogin } from "../../hooks/user";
import { useNavigate } from "react-router-dom";
import Form from "../../Components/Form";
import { loginSchema } from "./loginSchema";
import Botao from "../../Styles/Botao/Botao";

function Login() {
  const setToken = useAuthStore((state) => state.setToken);
  const navigate = useNavigate();

  const {
    mutate: login,
    isPending: carregando,
    error,
  } = useLogin({
    onSuccess: ({ token }) => {
      toast.success("Login realizado com sucesso");
      setToken(token);
      navigate("/home");
    },
    onError: (err) => {
      toast.error("Não foi possível fazer o login");
      return err;
    },
  });

  async function logar(dados) {
    login(dados);
  }

  const [inputs] = useState([
    {
      type: "text",
      key: "email",
      placeholder: "Digite seu e-mail",
      label: "E-mail",
      icon: MailOutlined,
    },
    {
      type: "password",
      key: "senha",
      placeholder: "Digite sua senha",
      label: "Senha",
      icon: LockOutlined,
    },
  ]);

  return (
    <Body>
        <CaixaTitulo>
          <CaixaLogo>
            <img></img>
          </CaixaLogo>
          <Titulo>
            Faça seu
            <br style={{ display: "block" }} />
            login
          </Titulo>
        </CaixaTitulo>

      <Form
        inputs={inputs}
        onSubmit={logar}
        schema={loginSchema}
        color={"white"}
        loading={carregando}
        requestError={error}
        selectedOptionsInitial={{}}
      />
      <Botao
        textDecoration="underline"
        width="40%"
        fontSize="1.2em"
        widthMedia500="80%"
        widthMedia280="80%"
        backgroundColor="transparent"
        borderColor="transparent"
        color="#8B00FF"
        onClick={() => {
          window.location.href = "/Cadastro";
        }}
      >
        Cadastre-se
      </Botao>
    </Body>
  );
}

export default Login;
