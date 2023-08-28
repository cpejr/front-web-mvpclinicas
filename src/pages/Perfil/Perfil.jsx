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
  TextoAlterarFoto,
  SairTexto,
} from "./Styles";

import {
  IdcardOutlined,
  PhoneOutlined,
  CalendarOutlined,
  MailOutlined,
  CopyOutlined,
  GlobalOutlined,
  ExportOutlined,
} from "@ant-design/icons";

import Botao from "../../Styles/Botao/Botao";
import Input from "../../Styles/Input/Input";
import { data, telefone } from "../../utils/masks";
import { redirecionamento } from "../../utils/redirecionamento";
import * as managerService from "../../services/ManagerService/managerService";
import useAuthStore from "../../stores/auth";
import { logout } from "../../services/auth";
import AddToast from "../../components/AddToast/AddToast";

import { toast } from "react-toastify";
import { Modal } from "antd";

import ModalAlterarFotoDePerfil from "../../components/ModalAlterarFotoDePerfil/ModalAlterarFotoDePerfil";
import ModalAlterarDados from "../../components/ModalAlterarDados";
import ModalAlterarSenha from "../../components/ModalAlterarSenha";
import ModalExcluirPerfil from "../../components/ModalExcluirPerfil";

function Perfil() {
  const [usuario, setUsuario] = useState({});
  const [modalAlterarFotoPerfil, setModalAlterarFotoPerfil] = useState(false);
  const [imagem, setImagem] = useState("");
  const [modalAlterarDados, setModalAlterarDados] = useState(false);
  const [modalExcluirPerfil, setModalExcluirPerfil] = useState(false);
  const [modalAlterarSenha, setModalAlterarSenha] = useState(false);
  const usuarioLogado = useAuthStore((state) => state.usuario);

  async function pegandoDadosUsuario() {
    const respostaImagem = await managerService.GetFotoDePerfil(
      "64e653213833edb51e9afbc4"
    );
    const resposta = await managerService.GetDadosUsuario(
      "64e653213833edb51e9afbc4"
    );
    setUsuario(resposta.dadosUsuario);
    setImagem(respostaImagem);
  }

  async function handleLogout() {
    try {
      logout();
      toast.success("Usuario deslogado com sucesso");
      setTimeout(() => {
        redirecionamento("/login");
      }, 3000);
    } catch (error) {
      alert(error);
    }
  }

  function acionarModais(e) {
    const botaoId = e.target.dataset.botaoId;

    switch (botaoId) {
      case "alterarDados":
        setModalAlterarDados(true);
        break;
      case "alterarSenha":
        setModalAlterarSenha(true);
        break;
      case "excluirPerfil":
        setModalExcluirPerfil(true);
        break;

      default:
        break;
    }
  }

  function cancelouModal() {
    setModalAlterarDados(false);
    setModalAlterarSenha(false);
    setModalExcluirPerfil(false);
  }

  useEffect(() => {
    pegandoDadosUsuario();
  }, []);

  async function fechandoModalAlterarFotoPerfil() {
    setModalAlterarFotoPerfil(false);
    pegandoDadosUsuario();
  }

  return (
    <Body>
      <Conteudo>
        <div
          style={{
            left: "77%",
            alignItems: "center",
            position: "absolute",
            top: "3%",
          }}
        >
          <ExportOutlined
            style={{ fontSize: "40px", color: "#570B87" }}
            onClick={handleLogout}
          />
          <SairTexto onClick={handleLogout}>Sair</SairTexto>
        </div>
        <CaixaFoto>
          <img
            src={imagem}
            width="100%"
            height="100%"
            style={{ borderRadius: "100%" }}
            alt="Foto de Perfil"
          ></img>
        </CaixaFoto>
        <TextoAlterarFoto
          onClick={() => {
            setModalAlterarFotoPerfil(true);
          }}
        >
          Alterar imagem de Perfil
        </TextoAlterarFoto>
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
                <TituloInput>Registro:</TituloInput>
                <CopyOutlined style={{ fontSize: "22px", color: "#570B87" }} />
              </TituloIcon>
              <Input
                placeholder={usuario.registro}
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
                <TituloInput>Formação:</TituloInput>
                <CopyOutlined style={{ fontSize: "22px", color: "#570B87" }} />
              </TituloIcon>
              <Input
                placeholder={usuario.formacao}
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
      <Modal
        open={modalAlterarFotoPerfil}
        onCancel={fechandoModalAlterarFotoPerfil}
        footer={null}
        width={"50%"}
        centered={true}
        destroyOnClose={true}
        style={{ maxWidth: "450px", minWidth: "250px" }}
      >
        <ModalAlterarFotoDePerfil
          emailUsuario={usuario.email}
          fecharModal={() => fechandoModalAlterarFotoPerfil()}
          idUsuario={usuario._id}
        />
        <ModalAlterarDados
          open={modalAlterarDados}
          onClose={cancelouModal}
          usuario={usuario}
          centered
          destroyOnClose
        />
        <ModalAlterarSenha
          open={modalAlterarSenha}
          onClose={cancelouModal}
          usuario={usuario}
          centered
          destroyOnClose
        />
        <ModalExcluirPerfil
          open={modalExcluirPerfil}
          onClose={cancelouModal}
          usuario={usuario}
          centered
          destroyOnClose
        />
      </Modal>

      <AddToast />
    </Body>
  );
}

export default Perfil;
