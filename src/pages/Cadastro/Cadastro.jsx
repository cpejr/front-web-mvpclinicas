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
} from "@ant-design/icons";

import { telefone } from '../../../utils/masks';
import Botao from "../../Styles/Botao";
import Input from "../../Styles/Input";
import * as managerService from '../../services/ManagerService/managerService';



function Cadastro() {
  const zeraInputs = {
    nome: '',
    telefone: '',
    data_nascimento: '',
    email: '',
    crm: '',
    uni_federativa: '',
    senha: '',
    avatar_url: '',
  };
  const [usuario, setUsuario] = useState(zeraInputs);

  function preenchendoDados(e) {
    const { nome, valor } = e.target;
    if (name === 'telefone') {
      setUsuario(estadoAnterior => ({
        ...estadoAnterior,
        [nome]: telefone(valor)
      }
      ))
    } else {
      setUsuario(estadoAnterior => ({
        ...estadoAnterior,
        [nome]: valor
      }))
    }

  }

  function preenchendoData(nome, valor) {
    setUsuario({ ...usuario, [nome]: valor });

  }


  async function requisicaoCadastro() {
    if (usuario.senha === usuario.confirmacao_senha) {
      const usuarioCadastrado = await managerService.CadastroUsuario(
        usuario,
      )
      if (usuarioCadastrado) {
        alert('Usuário criado.')
      } else {
        alert('As senhas digitadas são diferentes.');
      }
    }
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
              backgroundColor="white"
              heightMedia700="20px"
              marginBottomMedia700="8%"
              name="nome"
              value={usuario.nome}
              onChange={preenchendoDados}
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
                value={usuario.telefone}
                onChange={preenchendoDados}
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
                    value={usuario.data_nascimento}
                    name="data_nascimento"
                    onChange={(value) => preenchendoData('data_nascimento', value)}
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
              value={usuario.email}
              onChange={preenchendoDados}
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
                value={usuario.crm}
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
                value={usuario.uni_federativa}
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
              heightMedia700="20px"
              marginBottomMedia700="8%"
              name="senha"
              value={usuario.senha}
              onChange={preenchendoDados}
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
              value={usuario.confirmacao_senha}
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
            >Já possui uma conta?</Botao>
            <Botao
              border-radius="10px"
              onClick={() => { requisicaoCadastro(); }}>
              Confirmar
            </Botao>
          </BotoesEdicao>
        </CaixaBotoes>
      </Conteudo>
    </Body>
  );
}

export default Cadastro;
