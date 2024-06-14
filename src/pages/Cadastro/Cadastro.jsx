import { useState } from "react";
import { Body, CaixaTitulo, Titulo } from "./Styles";
import Form from "../../Components/Form";

import {
  PhoneOutlined,
  CalendarOutlined,
  MailOutlined,
  CopyOutlined,
  LockOutlined,
  UserOutlined,
  RocketOutlined,
} from "@ant-design/icons";

import Botao from "../../Styles/Botao";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { cadastroSchema } from "./cadastroSchema";
import { useCadastro } from "../../hooks/user";
import Logo from "../../assets/logo-no-background.svg";

function Cadastro() {
  const navegar = useNavigate();

  const {
    mutate: cadastro,
    isPending: carregando,
    error,
  } = useCadastro({
    onSuccess: () => {
      toast.success("Cadastro realizado com sucesso");
      navegar("/home");
    },
    onError: (err) => {
      toast.error("Não foi possível fazer o cadastro");
      return err;
    },
  });

  const [inputs] = useState([
    {
      type: "text",
      key: "nome",
      placeholder: "Digite seu nome",
      label: "Nome",
      icon: UserOutlined,
    },
    {
      type: "text",
      key: "email",
      placeholder: "Digite seu e-mail",
      label: "E-mail",
      icon: MailOutlined,
    },
    {
      type: "text",
      key: "telefone",
      placeholder: "Digite seu telefone",
      label: "Telefone",
      icon: PhoneOutlined,
    },
    {
      type: "date",
      key: "data_nascimento",
      placeholder: "Selecione sua data de nascimento",
      label: "Data de nascimento",
      icon: CalendarOutlined,
    },
    {
      type: "select",
      key: "formacao",
      placeholder: "Selecione sua formação",
      label: "Formacao",
      options: [
        {
          value: "medico",
          name: "Médico",
        },
        { value: "estudante", name: "Estudante" },
      ],
      icon: RocketOutlined,
    },
    {
      type: "text",
      key: "registro",
      placeholder: "Digite seu registro",
      label: "Registro (CRM para médicos ou matrícula para estudantes)",
      icon: CopyOutlined,
    },
    {
      type: "text",
      key: "uni_federativa",
      placeholder: "Digite sua UF",
      label: "Unidade federativa",
      icon: CopyOutlined,
    },
    {
      type: "password",
      key: "senha",
      placeholder: "Digite sua senha",
      label: "Senha",
      icon: LockOutlined,
    },
    {
      type: "password",
      key: "confirmacao_senha",
      placeholder: "Digite a confirmação da sua senha",
      label: "Confirmação da senha",
      icon: LockOutlined,
    },
  ]);

  return (
    <Body>
      <CaixaTitulo>
        <img src={Logo} alt="logo" />

        <Titulo>Fazer cadastro</Titulo>
      </CaixaTitulo>
      <Form
        inputs={inputs}
        onSubmit={cadastro}
        schema={cadastroSchema}
        loading={carregando}
        requestError={error}
        selectedOptionsInitial={{}}
      />
      <Botao
        backgroundColor="transparent"
        borderColor="transparent"
        color="#570B87"
        textDecoration="underline"
        onClick={() => {
          window.location.href = "/Login";
        }}
      >
        Fazer login
      </Botao>
    </Body>
  );
}

export default Cadastro;
