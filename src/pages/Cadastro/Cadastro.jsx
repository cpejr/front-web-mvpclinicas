import React, { useState } from "react";
import { DatePicker } from "antd";
import {
  Body,
  BotoesEdicao,
  CaixaBotoes,
  CaixaLogo,
  CaixaInputs,
  ConjuntoTituloInput,
  Conteudo,
  InputDividido,
  TituloIcon,
  TituloInput,
  SubtituloInput,
  CaixaTitulo,
  Titulo,
  EstiloData,
  Rotulo,
  SelecaoFormacao,
} from "./Styles";

import {
  IdcardOutlined,
  PhoneOutlined,
  CalendarOutlined,
  MailOutlined,
  CopyOutlined,
  GlobalOutlined,
  LockOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

import { apenasLetras, telefone, registro } from "../../../utils/masks";
import Botao from "../../Styles/Botao";
import Input from "../../Styles/Input";
import AddToast from "../../components/AddToast/AddToast";
import { toast } from "react-toastify";
import _ from "lodash";
import { Spin } from "antd";
import * as managerService from "../../services/ManagerService/managerService";

function Cadastro() {
  const [erro, setErro] = useState(false);
  const [erroEmailIgual, setErroEmailIgual] = useState(false);
  const [usuario, setUsuario] = useState({});
  const [carregando, setCarregando] = useState(false);
  const [formacao, setFormacao] = useState("");
  const [stringRegistro, setStringRegistro] = useState("");
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const [camposVazios, setCamposVazios] = useState({
    nome: true,
    telefone: true,
    data_nascimento: true,
    email: true,
    registro: true,
    formacao: true,
    uni_federativa: true,
    senha: true,
    confirmacao_senha: true,
  });
  const verificaCamposVazios = {
    nome: false,
    telefone: false,
    data_nascimento: false,
    email: false,
    registro: false,
    formacao: false,
    uni_federativa: false,
    senha: false,
    confirmacao_senha: false,
  };
  const [camposVaziosErro, setCamposVaziosErro] =
    useState(verificaCamposVazios);

  async function validacaoEmail(e) {
    const { value, name } = e.target;
    if (value) {
      setCamposVazios({ ...camposVazios, [name]: false });
    }

    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (!regEx.test(value)) {
      setErro({ ...erro, [name]: true });
    } else {
      const verificaEmailIgual = await managerService.GetDadosPessoais();
      if (verificaEmailIgual.includes(value)) {
        setErroEmailIgual(true);
      } else {
        setErro({ ...erro, [name]: false });
        setUsuario({ ...usuario, [name]: value });
        setErroEmailIgual(false);
      }
    }
  }

  function preenchendoDados(e) {
    const { name, value } = e.target;
    if (value) {
      setCamposVazios({ ...camposVazios, [name]: false });
    } else {
      setCamposVazios({ ...camposVazios, [name]: true });
    }

    if (
      (name === "telefone" && value.length < 15) ||
      ((name === "senha" || name === "confirmacao_senha") && value.length < 8)
    ) {
      setErro({ ...erro, [name]: true });
    } else {
      setErro({ ...erro, [name]: false });
    }
    setUsuario({ ...usuario, [name]: value });

    if (name === "nome") {
      setUsuario({ ...usuario, [name]: apenasLetras(value) });
    }

    if (name === "telefone") {
      setUsuario({ ...usuario, [name]: telefone(value) });
    }

    if (name === "registro") {
      if (value.length > 7 || registro(value) == 0)
        setErro({ ...erro, [name]: true });
      else setErro({ ...erro, [name]: false });
      setUsuario({ ...usuario, [name]: registro(value) });
    }

    if (name === "uni_federativa") {
      setUsuario({ ...usuario, [name]: apenasLetras(value) });
    }

    if (name === "formacao") {
      setFormacao(value);
      if (value == "medico") setStringRegistro("CRM");
      else if (value == "dentista") setStringRegistro("CRO");
      else if (value == "enfermeiro") setStringRegistro("COREN");
      else if (value == "outros") setStringRegistro("Registro");
    }
  }

  function preenchendoData(name, value) {
    if (value) {
      setCamposVazios({ ...camposVazios, [name]: false });
    }
    setUsuario({ ...usuario, [name]: value });
  }

  async function requisicaoCadastro() {
    setCarregando(true);

    if (_.isEqual(camposVazios, verificaCamposVazios)) {
      if (usuario.senha !== usuario.confirmacao_senha) {
        toast.error("As senhas digitadas são diferentes.");
        setCarregando(false);
      } else if (erroEmailIgual === true) {
        toast.error("O email digitado já está cadastrado no sistema!");
        setCarregando(false);
      } else if (erro.telefone === true) {
        toast.error("Digite o numero de telefone na formatação correta!");
        setCarregando(false);
      } else if (erro.senha === true) {
        toast.error("Digite uma senha formatação correta!");
        setCarregando(false);
      } else {
        await managerService.CadastroUsuario(usuario);
        toast.success("Usuário cadastrado com sucesso!");
        setCarregando(false);
      }
    } else {
      setCamposVaziosErro(camposVazios);
      toast.error("Preencha todos os campos obrigatórios");
      setCarregando(false);
    }

    setCarregando(false);
  }

  return (
    <Body>
      <Conteudo>
        <CaixaTitulo>
          <CaixaLogo>
            <img></img>
          </CaixaLogo>
          <Titulo>
            Faça seu
            <br style={{ display: "block" }} />
            cadastro
          </Titulo>
        </CaixaTitulo>
        <CaixaInputs>
          <ConjuntoTituloInput>
            <TituloIcon>
              <TituloInput>Nome Completo:</TituloInput>
              <IdcardOutlined style={{ fontSize: "22px", color: "#570B87" }} />
            </TituloIcon>
            <Input
              placeholder="Digite seu nome completo"
              status="error"
              backgroundColor="white"
              heightMedia700="20px"
              marginBottomMedia700="8%"
              name="nome"
              onChange={preenchendoDados}
              erro={erro.nome || camposVaziosErro.nome}
              camposVazios={camposVazios.nome}
              fontSize="0.8em"
            ></Input>
          </ConjuntoTituloInput>
          <InputDividido>
            <ConjuntoTituloInput>
              <TituloIcon>
                <TituloInput>Telefone:</TituloInput>
                <PhoneOutlined style={{ fontSize: "22px", color: "#570B87" }} />
              </TituloIcon>
              <Input
                placeholder="Digite seu número de telefone"
                backgroundColor="white"
                width="100%"
                heightMedia700="20px"
                alignSelf="flex-start"
                marginBottomMedia700="8%"
                name="telefone"
                onChange={preenchendoDados}
                erro={erro.telefone || camposVaziosErro.telefone}
                camposVazios={camposVazios.telefone}
                value={usuario.telefone}
                fontSize="0.8em"
              ></Input>
              {erro.telefone && (
                <Rotulo>Digite um telefone no formato (XX)XXXXX-XXXX</Rotulo>
              )}
            </ConjuntoTituloInput>
            <ConjuntoTituloInput>
              <TituloIcon>
                <TituloInput>Data de Nascimento:</TituloInput>
                <CalendarOutlined
                  style={{ fontSize: "22px", color: "#570B87" }}
                />
              </TituloIcon>
              <TituloIcon>
                <EstiloData
                  erro={
                    erro.data_nascimento || camposVaziosErro.data_nascimento
                  }
                >
                  <DatePicker
                    style={{ border: "0px", width: "100%" }}
                    placeholder="Selecione sua data de nascimento"
                    locale="pt_BR"
                    format="DD/MM/YYYY"
                    name="data_nascimento"
                    onChange={(value) =>
                      preenchendoData("data_nascimento", value)
                    }
                    suffixIcon={null}
                  />
                </EstiloData>
              </TituloIcon>
            </ConjuntoTituloInput>
          </InputDividido>
          <ConjuntoTituloInput>
            <TituloIcon>
              <TituloInput>E-mail:</TituloInput>
              <MailOutlined style={{ fontSize: "22px", color: "#570B87" }} />
            </TituloIcon>
            <Input
              placeholder="Digite seu endereço de e-mail"
              backgroundColor="white"
              heightMedia700="20px"
              marginBottomMedia700="8%"
              name="email"
              erro={erro.email || camposVaziosErro.email}
              camposVazios={camposVazios.email}
              onChange={validacaoEmail}
              fontSize="0.8em"
            ></Input>
            {erro.email && (
              <Rotulo>Digite um e-mail no formato email@email.com</Rotulo>
            )}
          </ConjuntoTituloInput>

          <ConjuntoTituloInput>
            <SelecaoFormacao
              id="formacao"
              name="formacao"
              onChange={preenchendoDados}
              erro={camposVaziosErro.formacao}
            >
              <option value="" disabled selected hidden>
                Selecione sua Formação
              </option>
              <option value="medico">Médico(a)</option>
              <option value="dentista">Dentista</option>
              <option value="enfermeiro">Enfermeiro(a)</option>
              <option value="outros">Outros</option>
            </SelecaoFormacao>
          </ConjuntoTituloInput>

          {formacao && (
            <InputDividido>
              <ConjuntoTituloInput>
                <TituloIcon>
                  <TituloInput>{stringRegistro}:</TituloInput>
                  <CopyOutlined
                    style={{ fontSize: "22px", color: "#570B87" }}
                  />
                </TituloIcon>
                <Input
                  placeholder={`Digite seu ${stringRegistro}`}
                  backgroundColor="white"
                  width="100%"
                  heightMedia700="20px"
                  alignSelf="flex-start"
                  marginBottomMedia700="8%"
                  name="registro"
                  erro={erro.registro || camposVaziosErro.registro}
                  camposVazios={camposVazios.registro}
                  onChange={preenchendoDados}
                  value={usuario.registro}
                  fontSize="0.8em"
                ></Input>
                {erro.registro && (
                  <Rotulo>Digite um {stringRegistro} válido</Rotulo>
                )}
              </ConjuntoTituloInput>
              <ConjuntoTituloInput>
                <TituloIcon>
                  <TituloInput>Unidade Federativa</TituloInput>
                  <GlobalOutlined
                    style={{ fontSize: "22px", color: "#570B87" }}
                  />
                </TituloIcon>
                <Input
                  placeholder="Digite a Unidade Federativa"
                  backgroundColor="white"
                  width="100%"
                  heightMedia700="20px"
                  justifyContent="flex-start"
                  alignSelf="flex-start"
                  marginBottomMedia700="8%"
                  name="uni_federativa"
                  erro={erro.uni_federativa || camposVaziosErro.uni_federativa}
                  camposVazios={camposVazios.uni_federativa}
                  onChange={preenchendoDados}
                  fontSize="0.8em"
                ></Input>
              </ConjuntoTituloInput>
            </InputDividido>
          )}
          <ConjuntoTituloInput>
            <TituloIcon>
              <TituloInput>Senha:</TituloInput>
              <LockOutlined style={{ fontSize: "22px", color: "#570B87" }} />
            </TituloIcon>
            <Input
              placeholder="Digite sua senha"
              backgroundColor="white"
              id="senha"
              type="password"
              heightMedia700="20px"
              marginBottomMedia700="8%"
              name="senha"
              erro={erro.senha || camposVaziosErro.senha}
              onChange={preenchendoDados}
              camposVazios={camposVazios.senha}
              fontSize="0.8em"
            ></Input>
            {erro.senha && (
              <Rotulo>A senha deve ter no minimo 8 dígitos.</Rotulo>
            )}
          </ConjuntoTituloInput>
          <ConjuntoTituloInput>
            <TituloIcon>
              <TituloInput>Confirmação de Senha:</TituloInput>
              <LockOutlined style={{ fontSize: "22px", color: "#570B87" }} />
            </TituloIcon>
            <Input
              placeholder="Digite sua senha novamente"
              backgroundColor="white"
              heightMedia700="20px"
              marginBottomMedia700="8%"
              name="confirmacao_senha"
              id="confirmacao_senha"
              type="password"
              erro={
                erro.confirmacao_senha || camposVaziosErro.confirmacao_senha
              }
              camposVazios={camposVazios.senhaConfirmada}
              onChange={preenchendoDados}
              fontSize="0.8em"
            ></Input>
            <SubtituloInput>
              Informamos que nenhuma informação aqui preenchida além de seu nome
              será exibida para outros usuários!
            </SubtituloInput>
          </ConjuntoTituloInput>
        </CaixaInputs>
        <CaixaBotoes>
          <BotoesEdicao>
            <Botao
              backgroundColor="transparent"
              borderColor="transparent"
              color="#570B87"
              textDecoration="underline"
              onClick={() => {
                window.location.href = "/Login";
              }}
            >
              Já possui uma conta?
            </Botao>
            <Botao
              border-radius="10px"
              onClick={() => {
                requisicaoCadastro();
              }}
            >
              {carregando ? <Spin indicator={antIcon} /> : "Confirmar"}
            </Botao>
          </BotoesEdicao>
        </CaixaBotoes>
      </Conteudo>
      <AddToast />
    </Body>
  );
}

export default Cadastro;
