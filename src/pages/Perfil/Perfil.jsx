import React, { useEffect, useState } from "react";
import {
  Body,
  BotoesEdicao,
  CaixaBotoes,
  CaixaFoto,
  CaixaInputs,
  ConjuntoTituloInput,
  Conteudo,
  InputDividido,
  TituloIcon,
  TituloInput,
} from "./Styles";

import {
  IdcardOutlined,
  PhoneOutlined,
  CalendarOutlined,
  MailOutlined,
  CopyOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

import Botao from "../../Styles/Botao/Botao";
import Input from "../../Styles/Input/Input";
import { data, telefone } from "../../utils/masks";

import ModalAlterarDados from "../../components/ModalAlterarDados";
import ModalExcluirPerfil from "../../components/ModalExcluirPerfil";

import fotoPerfil from "../../assets/montanha.jpg";

import * as managerService from "../../services/ManagerService/managerService";

function Perfil() {
  const [usuario, setUsuario] = useState({});
  const [modalAlterarDados, setModalAlterarDados] = useState(false);
  const [modalExcluirPerfil, setModalExcluirPerfil] = useState(false);
  const id = "6466a62695e98cb373b670f4";

  async function pegandoDadosUsuario() {
    const resposta = await managerService.GetDadosUsuario(id);
    setUsuario(resposta.dadosUsuario);
  }

  function acionarModais(event) {
    const botaoId = event.target.dataset.botaoId;

    switch (botaoId) {
      case "alterarDados":
        setModalAlterarDados(true);
        console.log("alterar dados");
        break;
      case "alterarSenha":
        console.log("alterar senha");
        break;
      case "excluirPerfil":
        setModalExcluirPerfil(true);
        console.log("excluir perfil");
        break;

      default:
        break;
    }
  }

  function cancelouModal() {
    setModalAlterarDados(false);
    setModalExcluirPerfil(false);
  }

  useEffect(() => {
    pegandoDadosUsuario();
  }, []);

  return (
    <Body>
      <Conteudo>
        <CaixaFoto>
          <img
            src={fotoPerfil}
            width="100%"
            height="100%"
            style={{ borderRadius: "100%" }}
            alt="Foto de Perfil"
          ></img>
        </CaixaFoto>
        <CaixaInputs>
          <ConjuntoTituloInput>
            <TituloIcon>
              <TituloInput>Nome Completo:</TituloInput>
              <IdcardOutlined style={{ fontSize: "22px", color: "#570B87" }} />
            </TituloIcon>
            <Input
              placeholder={usuario.nome}
              backgroundColor="white"
              heightMedia700="20px"
              marginBottomMedia700="8%"
              readOnly
            ></Input>
          </ConjuntoTituloInput>
          <InputDividido>
            <ConjuntoTituloInput>
              <TituloIcon>
                <TituloInput>Telefone:</TituloInput>
                <PhoneOutlined style={{ fontSize: "22px", color: "#570B87" }} />
              </TituloIcon>
              <Input
                placeholder={telefone(usuario.telefone)}
                backgroundColor="white"
                width="100%"
                heightMedia700="20px"
                alignSelf="flex-start"
                marginBottomMedia700="8%"
                readOnly
              ></Input>
            </ConjuntoTituloInput>
            <ConjuntoTituloInput>
              <TituloIcon>
                <TituloInput>Data de Nascimento:</TituloInput>
                <CalendarOutlined
                  style={{ fontSize: "22px", color: "#570B87" }}
                />
              </TituloIcon>
              <Input
                placeholder={data(usuario.data_nascimento)}
                backgroundColor="white"
                width="100%"
                heightMedia700="20px"
                alignSelf="flex-start"
                marginBottomMedia700="8%"
                readOnly
              ></Input>
            </ConjuntoTituloInput>
          </InputDividido>
          <ConjuntoTituloInput>
            <TituloIcon>
              <TituloInput>Email:</TituloInput>
              <MailOutlined style={{ fontSize: "22px", color: "#570B87" }} />
            </TituloIcon>
            <Input
              placeholder={usuario.email}
              backgroundColor="white"
              heightMedia700="20px"
              marginBottomMedia700="8%"
              readOnly
            ></Input>
          </ConjuntoTituloInput>
          <InputDividido>
            <ConjuntoTituloInput>
              <TituloIcon>
                <TituloInput>CRM:</TituloInput>
                <CopyOutlined style={{ fontSize: "22px", color: "#570B87" }} />
              </TituloIcon>
              <Input
                placeholder={usuario.crm}
                backgroundColor="white"
                width="100%"
                heightMedia700="20px"
                alignSelf="flex-start"
                marginBottomMedia700="8%"
                readOnly
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
                placeholder={usuario.uni_federativa}
                backgroundColor="white"
                width="100%"
                heightMedia700="20px"
                justifyContent="flex-start"
                alignSelf="flex-start"
                marginBottomMedia700="8%"
                readOnly
              ></Input>
            </ConjuntoTituloInput>
          </InputDividido>
        </CaixaInputs>
        <CaixaBotoes>
          <BotoesEdicao>
            <Botao data-botao-id="alterarDados" onClick={acionarModais}>
              Alterar Dados
            </Botao>
            <Botao data-botao-id="alterarSenha" onClick={acionarModais}>
              Alterar Senha
            </Botao>
          </BotoesEdicao>
          <Botao
            color="#ffffff"
            backgroundColor="#ff0000c5"
            borderColor="#ff0000"
            width="30%"
            widthMedia700="40%"
            data-botao-id="excluirPerfil"
            onClick={acionarModais}
          >
            Excluir
          </Botao>
        </CaixaBotoes>
      </Conteudo>

      <ModalAlterarDados
        open={modalAlterarDados}
        onClose={cancelouModal}
        usuario={usuario}
      />
      <ModalExcluirPerfil open={modalExcluirPerfil} onClose={cancelouModal} />
    </Body>
  );
}

export default Perfil;
