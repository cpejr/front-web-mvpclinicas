import { useEffect, useState } from "react";
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
import ModalAlterarFotoDePerfil from "../../components/ModalAlterarFotoDePerfil/ModalAlterarFotoDePerfil";
import { Modal } from "antd";

import fotoPerfil from "../../assets/montanha.jpg";

import * as managerService from "../../services/ManagerService/managerService";

function Perfil() {
  const [usuario, setUsuario] = useState({});
  const _id = "64668ccfcf080fad87158da8";
  const [modalAlterarFotoPerfil, setModalAlterarFotoPerfil] = useState(false);
  const [imagem, setImagem] = useState("");

  async function pegandoDadosUsuario() {
    const resposta = await managerService.GetDadosUsuario(_id);
    const respostaImagem = await managerService.GetFotoDePerfil(_id);
    setUsuario(resposta.dadosUsuario);
    setImagem(respostaImagem);
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
        <CaixaFoto>
          <img
            src={imagem}
            width="100%"
            height="100%"
            style={{ borderRadius: "100%" }}
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
            <Botao>Alterar Dados</Botao>
            <Botao>Alterar Senha</Botao>
          </BotoesEdicao>
          <Botao
            color="#ffffff"
            backgroundColor="#ff0000c5"
            borderColor="#ff0000"
            width="30%"
            widthMedia700="40%"
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
      </Modal>
    </Body>
  );
}

export default Perfil;
