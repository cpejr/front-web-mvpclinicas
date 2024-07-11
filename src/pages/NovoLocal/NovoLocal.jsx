import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Body, Titulo } from "./Styles";

import AddToast from "../../components/AddToast/AddToast";
import { toast } from "react-toastify";

import {
  BankOutlined,
  EnvironmentOutlined,
  HeartOutlined,
  MailOutlined,
  PhoneOutlined,
  RocketOutlined,
} from "@ant-design/icons";

import { novoLocalSchema } from "./NovoLocalSchema";
import Form from "../../Components/Form";
import { useCreatePlace } from "../../hooks/place";

function CadastroNovoLocal() {
  const [inputs, setInputs] = useState([
    {
      type: "text",
      key: "nome",
      placeholder: "Digite o nome do local",
      label: "Nome",
      icon: HeartOutlined,
    },
    {
      type: "select",
      key: "tipo",
      placeholder: "Selecione o tipo de local",
      label: "Tipo",
      options: [
        {
          value: "clinica",
          name: "Clínica",
        },
        { value: "instituicao-de-ensino", name: "Instituição de Ensino" },
      ],
      icon: RocketOutlined,
    },
    {
      type: "text",
      key: "telefone",
      placeholder: "Digite seu telefone",
      label: "Telefone",
      icon: PhoneOutlined,
    },
    {
      type: "text",
      key: "setor",
      placeholder: "Digite o setor responsável",
      label: "Setor",
      icon: MailOutlined,
    },
    {
      type: "text",
      key: "empresa",
      placeholder: "Digite a empresa responsável",
      label: "Empresa",
      icon: BankOutlined,
    },
    {
      type: "address",
      key: "endereco",
      placeholder: "Digite endereço",
      label: "Endereço",
      icon: EnvironmentOutlined,
    },
  ]);

  const navegar = useNavigate();
  const [selectType, setSelectType] = useState("");

  useEffect(() => {
    if (selectType === "Instituição de Ensino") {
      setInputs((prevInputs) => {
        const hospitalProprioInput = {
          type: "select",
          key: "hospitalProprio",
          placeholder: "Possui hospital próprio?",
          label: "Hospital Próprio",
          options: [
            {
              value: false,
              name: "Não",
            },
            { value: true, name: "Sim" },
          ],
          icon: RocketOutlined,
        };
        // Avoid duplicating the input
        if (!prevInputs.some((input) => input.key === "hospitalProprio")) {
          const newInputs = [...prevInputs];
          newInputs.splice(newInputs.length - 1, 0, hospitalProprioInput);
          return newInputs;
        }
        return prevInputs;
      });
    } else {
      setInputs((prevInputs) =>
        prevInputs.filter((input) => input.key !== "hospitalProprio")
      );
    }
  }, [selectType]);

  const {
    mutate: criarLocal,
    isPending: carregando,
    error,
  } = useCreatePlace({
    onSuccess: () => {
      toast.success("Local criado com sucesso");
      navegar("/home");
    },
    onError: (err) => {
      toast.error("Não foi possível criar o local");
      return err;
    },
  });

  return (
    <Body>
      <Titulo>Cadastrar um local</Titulo>
      <Form
        inputs={inputs}
        onSubmit={criarLocal}
        schema={novoLocalSchema}
        loading={carregando}
        requestError={error}
        setSelectType={setSelectType}
      />
      <AddToast />
    </Body>
  );
}

export default CadastroNovoLocal;
