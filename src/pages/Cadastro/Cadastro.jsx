import React, { useState } from 'react';
import { DatePicker } from 'antd';
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

import { apenasLetras, telefone } from '../../../utils/masks';
import Botao from "../../Styles/Botao";
import Input from "../../Styles/Input";
import AddToast from "../../components/AddToast/AddToast";
import { toast } from "react-toastify";
import _ from "lodash";
import { Spin } from 'antd';
import * as managerService from '../../services/ManagerService/managerService';



function Cadastro() {

  const [erro, setErro] = useState(false);
  const [estado, setEstado] = useState({});
  const [usuario, setUsuario] = useState({});
  const [carregando, setCarregando] = useState(false);
  const errors = {};
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const [camposVazios, setCamposVazios] = useState({
    nome: false,
    telefone: false,
    data_nascimento: false,
    email: false,
    crm: false,
    uni_federativa: false,
    senha: false,
    confirmacao_senha: false,
  });
  const testeOriginal = {
    nome: false,
    telefone: false,
    data_nascimento: false,
    email: false,
    crm: false,
    uni_federativa: false,
    senha: false,
    confirmacao_senha: false,
  };
  let testeTemp = testeOriginal;

  async function validacaoEmail(e) {
    const { value, name } = e.target;
    if (value) {
      setCamposVazios({ ...camposVazios, [name]: false });
    }

    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (!regEx.test(value)) {
      setErro({ ...erro, [name]: true });
    } else {
      setErro({ ...erro, [name]: false });
    }

    setUsuario({ ...usuario, [name]: value });
  }

  function preenchendoDados(e) {
    const { name, value } = e.target;
    if (
      (name === 'telefone' && value.length < 15) ||
      ((name === 'senha' || name === 'confirmacao_senha') )
    ) {
      setErro({ ...erro, [name]: true });
    } else {
      setErro({ ...erro, [name]: false });
    }

    setUsuario({ ...usuario, [name]: value });
    setEstado({ ...estado, [name]: value });

    if (name === 'nome') {
      setEstado({
        ...estado,
        [name]: apenasLetras(value),
      });
      setUsuario({ ...usuario, [name]: apenasLetras(value) });
    }

    if (name === 'telefone') {
      setEstado({ ...estado, [name]: telefone(value) });
      setUsuario({ ...usuario, [name]: telefone(value) });
    }

    if (name === 'crm') {
      setEstado({ ...estado, [name]: (value) });
      setUsuario({ ...usuario, [name]: (value) });
    }

    if (name === 'uni_federativa') {
      setEstado({ ...estado, [name]: apenasLetras(value) });
      setUsuario({ ...usuario, [name]: apenasLetras(value) });
    }

  }

  function preenchendoData(name, value) {
    setUsuario({ ...usuario, [name]: value });
  }

  async function requisicaoCadastro() {
    setCarregando(true);
    if (!usuario.nome) errors.nome = true;
    if (!usuario.telefone) errors.telefone = true;
    if (!usuario.data_nascimento) errors.data_nascimento = true;
    if (!usuario.email) errors.email = true;
    if (!usuario.crm) errors.crm = true;
    if (!usuario.uni_federativa) errors.uni_federativa = true;
    if (!usuario.senha) errors.senha = true;
    if (!usuario.confirmacao_senha) errors.confirmacao_senha = true;


    if (_.isEqual(camposVazios, testeTemp)) {
      if (usuario.senha === usuario.confirmacao_senha) {
        await managerService.CadastroUsuario(usuario);
        toast.success('Usuário cadastrado com sucesso!');
        setCarregando(false);
      } else {
        toast.error('As senhas digitadas são diferentes.');
        setCarregando(false);
      }
    } else {
      toast.error('Preencha todos os campos obrigatórios');
    }

    testeTemp = testeOriginal;
    setCarregando(false);
  }
console.log(usuario)
  return (
    <Body>
      <Conteudo>
        <CaixaTitulo>
          <CaixaLogo>
            <img></img>
          </CaixaLogo>
          <Titulo>
            Faça seu
            <br style={{ display: 'block' }} />
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
              ></Input>
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
                    style={{ border: '0px', width: '100%' }}
                    placeholder="Selecione sua data de nascimento"
                    locale="pt_BR"
                    format="DD/MM/YYYY"
                    value={estado.data_nascimento}
                    name="data_nascimento"
                    onChange={(value) => preenchendoData('data_nascimento', value)}
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
            ></Input>
          </ConjuntoTituloInput>
          <InputDividido>
            <ConjuntoTituloInput>
              <TituloIcon>
                <TituloInput>CRM:</TituloInput>
                <CopyOutlined style={{ fontSize: "22px", color: "#570B87" }} />
              </TituloIcon>
              <Input
                placeholder="Digite seu CRM"
                backgroundColor="white"
                width="100%"
                heightMedia700="20px"
                alignSelf="flex-start"
                marginBottomMedia700="8%"
                name="crm"
                value={estado.crm}
                erro={erro.crm}
                camposVazios={camposVazios.crm}
                onChange={preenchendoDados}
              ></Input>
            </ConjuntoTituloInput>
            <ConjuntoTituloInput>
              <TituloIcon>
                <TituloInput>Unidade Federativa</TituloInput>
                <GlobalOutlined
                  style={{ fontSize: "22px", color: "#570B87" }}
                />
              </TituloIcon>
              <Input
                placeholder="Digite a Unidade Federativa do CRM"
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
              ></Input>
            </ConjuntoTituloInput>
          </InputDividido>
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
            ></Input>
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
            ></Input>
            <SubtituloInput>Informamos que nenhuma informação aqui preenchida além de seu nome será exibida para outros usuários!</SubtituloInput>
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
                window.location.href = "/Login"
              }}
            >Já possui uma conta?</Botao>
            <Botao
              border-radius="10px"
              onClick={() => { requisicaoCadastro(); }}>
              {carregando ? <Spin indicator={antIcon} /> : 'Confirmar'}
            </Botao>
          </BotoesEdicao>
        </CaixaBotoes>
      </Conteudo>
      <AddToast />
    </Body>
  );
}

export default Cadastro;
