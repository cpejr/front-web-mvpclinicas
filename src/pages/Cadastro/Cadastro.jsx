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
  OpcaoFormacao,
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
  const [estado, setEstado] = useState({});
  const [usuario, setUsuario] = useState({});
  const [carregando, setCarregando] = useState(false);
  const [formacao, setFormacao] = useState("");
  const [stringRegistro, setStringRegistro] = useState("");

  const errors = {};
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
    } else setCamposVazios({ ...camposVazios, [name]: true });

    if (
      (name === "telefone" && value.length < 15) ||
      ((name === "senha" || name === "confirmacao_senha") && value.length < 6)
    ) {
      setErro({ ...erro, [name]: true });
    } else {
      setErro({ ...erro, [name]: false });
    }
    setUsuario({ ...usuario, [name]: value });
    setEstado({ ...estado, [name]: value });

    if (name === "nome") {
      setEstado({
        ...estado,
        [name]: apenasLetras(value),
      });
      setUsuario({ ...usuario, [name]: apenasLetras(value) });
    }

    if (name === "telefone") {
      setEstado({ ...estado, [name]: telefone(value) });
      setUsuario({ ...usuario, [name]: telefone(value) });
    }

    if (name === "registro") {
      if (value.length > 7) setErro({ ...erro, [name]: true });
      else setErro({ ...erro, [name]: false });
      setEstado({ ...estado, [name]: registro(value) });
      setUsuario({ ...usuario, [name]: registro(value) });
    }

    if (name === "uni_federativa") {
      setEstado({ ...estado, [name]: apenasLetras(value) });
      setUsuario({ ...usuario, [name]: apenasLetras(value) });
    }

    if (name === "formacao"){
     
      setFormacao(value);
      if (value == "medico") setStringRegistro("CRM");
      else if (value == "dentista") setStringRegistro("CRO");
      else if (value == "enfermeiro") setStringRegistro("COREN");
      else if(value == "outros") setStringRegistro("Registro");
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
    if (!usuario.nome) errors.nome = true;
    if (!usuario.telefone) errors.telefone = true;
    if (!usuario.data_nascimento) errors.data_nascimento = true;
    if (!usuario.email) errors.email = true;
    if (!usuario.registro) errors.registro = true;
    if (!usuario.uni_federativa) errors.uni_federativa = true;
    if (!usuario.senha) errors.senha = true;
    if (!usuario.confirmacao_senha) errors.confirmacao_senha = true;

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
              value={estado.nome}
              onChange={preenchendoDados}
              erro={erro.nome}
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
                value={estado.telefone}
                onChange={preenchendoDados}
                erro={erro.telefone}
                camposVazios={camposVazios.telefone}
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
                <EstiloData>
                  <DatePicker
                    style={{ border: "0px", width: "100%" }}
                    placeholder="Selecione sua data de nascimento"
                    locale="pt_BR"
                    format="DD/MM/YYYY"
                    value={estado.data_nascimento}
                    name="data_nascimento"
                    onChange={(value) =>
                      preenchendoData("data_nascimento", value)
                    }
                    erro={erro.data_nascimento}
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
              value={estado.email}
              erro={erro.email}
              camposVazios={camposVazios.email}
              onChange={validacaoEmail}
              fontSize="0.8em"
            ></Input>
            {erro.email && (
              <Rotulo>Digite um e-mail no formato email@email.com</Rotulo>
            )}
          </ConjuntoTituloInput>

          <ConjuntoTituloInput> 
            <SelecaoFormacao id="formacao" name="formacao" onChange={preenchendoDados}>
                <OpcaoFormacao value="" disabled selected hidden >Selecione sua Formação</OpcaoFormacao>
                <OpcaoFormacao value="medico">Médico(a)</OpcaoFormacao>
                <OpcaoFormacao value="dentista">Dentista</OpcaoFormacao>
                <OpcaoFormacao value="enfermeiro">Enfermeiro(a)</OpcaoFormacao>
                <OpcaoFormacao value="outros">Outros</OpcaoFormacao>
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
                  value={estado.registro}
                  erro={erro.registro}
                  camposVazios={camposVazios.registro}
                  onChange={preenchendoDados}
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
                  erro={erro.uni_federativa}
                  camposVazios={camposVazios.uni_federativa}
                  value={estado.uni_federativa}
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
              value={estado.senha}
              erro={erro.senha}
              onChange={preenchendoDados}
              camposVazios={camposVazios.senha}
              fontSize="0.8em"
            ></Input>
            {erro.senha && (
              <Rotulo>A senha deve ter no minimo 6 dígitos.</Rotulo>
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
              erro={erro.confirmacao_senha}
              camposVazios={camposVazios.senhaConfirmada}
              value={estado.confirmacao_senha}
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
