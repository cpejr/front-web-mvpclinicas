import React, { useEffect, useState } from "react";

import {
  Body,
  BoxCarrossel,
  CaixaBotoes,
  CaixaFoto,
  CaixaInputs,
  Comentario,
  ConjuntoTituloInput,
  Conteudo,
  ConteudoAvaliacao,
  Direita,
  Esquerda,
  FotoNome,
  FotoUsuario,
  InputDividido,
  NomeTelefone,
  NomeUsuario,
  TituloAvaliacao,
  TituloIcon,
  TituloInput,
  Usuario,
  UsuarioComentario,
} from "./Styles";

import {
  IdcardOutlined,
  PhoneOutlined,
  CalendarOutlined,
  MailOutlined,
  CopyOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

import Botao from "../../Styles/Botao/Botao";
import Input from "../../Styles/Input/Input";
import fotoPerfil from "../../assets/montanha.jpg";

import * as managerService from "../../services/ManagerService/managerService";

function Local() {
  const [local, setLocal] = useState({});
  const [comentarios, setComentarios] = useState({});
  const [comentarioAtual, setComentarioAtual] = useState(0);

  const id_local = "6469762610cc9138d78e6470";

  const proxComentario = (comentarioAtual) => {
    if (comentarioAtual === comentarios.length - 1) {
      setComentarioAtual(0);
    } else {
      setComentarioAtual(comentarioAtual + 1);
    }
  };

  const antComentario = () => {
    if (comentarioAtual === 0) {
      setComentarioAtual(comentarios.length - 1);
    } else {
      setComentarioAtual(comentarioAtual - 1);
    }
  };

  async function pegandoDadosLocal() {
    const resposta = await managerService.GetDadosLocal(id_local);
    setLocal(resposta.dadosLocal);
  }

  async function pegandoComentariosLocal() {
    const resposta = await managerService.GetComentariosLocal(id_local);
    setComentarios(resposta.comentariosLocal);
  }

  useEffect(() => {
    pegandoDadosLocal();
  }, []);

  useEffect(() => {
    pegandoComentariosLocal();
  }, []);

  return (
    <Body>
      <Conteudo>
        <FotoNome>
          <CaixaFoto>
            <img
              src={fotoPerfil}
              width="100%"
              height="100%"
              style={{ borderRadius: "2%" }}
            />
          </CaixaFoto>
          <NomeTelefone>
            <ConjuntoTituloInput>
              <TituloIcon>
                <TituloInput>NOME:</TituloInput>
                <IdcardOutlined
                  style={{ fontSize: "18px", color: "#570B87" }}
                />
              </TituloIcon>
              <Input
                placeholder={local.nome}
                backgroundColor="white"
                heightMedia700="20px"
                marginBottomMedia700="8%"
                readOnly
              ></Input>
            </ConjuntoTituloInput>
            <ConjuntoTituloInput>
              <TituloIcon>
                <TituloInput>TELEFONE:</TituloInput>
                <PhoneOutlined style={{ fontSize: "18px", color: "#570B87" }} />
              </TituloIcon>
              <Input
                placeholder={local.telefone}
                backgroundColor="white"
                width="100%"
                heightMedia700="20px"
                alignSelf="flex-start"
                marginBottomMedia700="8%"
                readOnly
              ></Input>
            </ConjuntoTituloInput>
          </NomeTelefone>
        </FotoNome>
        <CaixaInputs>
          <ConjuntoTituloInput>
            <TituloIcon>
              <TituloInput>ENDERECO:</TituloInput>
              <CalendarOutlined
                style={{ fontSize: "18px", color: "#570B87" }}
              />
            </TituloIcon>
            <Input
              placeholder={local.endereco}
              backgroundColor="white"
              width="100%"
              heightMedia700="20px"
              alignSelf="flex-start"
              marginBottomMedia700="8%"
              readOnly
            ></Input>
          </ConjuntoTituloInput>
          <InputDividido>
            <ConjuntoTituloInput>
              <TituloIcon>
                <TituloInput>SETOR:</TituloInput>
                <MailOutlined style={{ fontSize: "18px", color: "#570B87" }} />
              </TituloIcon>
              <Input
                placeholder={local.setor}
                backgroundColor="white"
                heightMedia700="20px"
                marginBottomMedia700="8%"
                readOnly
              ></Input>
            </ConjuntoTituloInput>
            <ConjuntoTituloInput>
              <TituloIcon>
                <TituloInput>EMPRESA RESPONSÁVEL:</TituloInput>
                <CopyOutlined style={{ fontSize: "18px", color: "#570B87" }} />
              </TituloIcon>
              <Input
                placeholder={local.empresa}
                backgroundColor="white"
                width="100%"
                heightMedia700="20px"
                alignSelf="flex-start"
                marginBottomMedia700="8%"
                readOnly
              ></Input>
            </ConjuntoTituloInput>
          </InputDividido>
        </CaixaInputs>
        <ConteudoAvaliacao>
          <TituloAvaliacao>Avaliação Geral: {comentarios.media_avaliacao}</TituloAvaliacao>
          <BoxCarrossel>
            <Esquerda
              onClick={() => {
                antComentario(comentarioAtual);
              }}
            >
              <LeftOutlined style={{ fontSize: 25 }} />
            </Esquerda>
            {comentarios.length > 0 &&
              comentarioAtual >= 0 &&
              comentarioAtual < comentarios.length && (
                <UsuarioComentario>
                  <Usuario>
                    <FotoUsuario>
                      <img
                        src={fotoPerfil}
                        width="100%"
                        height="100%"
                        style={{ borderRadius: "100%" }}
                      />
                    </FotoUsuario>
                    <NomeUsuario>
                      {comentarios[comentarioAtual].id_usuario.nome}
                    </NomeUsuario>
                  </Usuario>
                  <Comentario>
                    {comentarios[comentarioAtual].comentario}
                  </Comentario>
                </UsuarioComentario>
              )}
            <Direita
              onClick={() => {
                proxComentario(comentarioAtual);
              }}
            >
              <RightOutlined style={{ fontSize: 25 }} />
            </Direita>
          </BoxCarrossel>
        </ConteudoAvaliacao>
        <CaixaBotoes>
          <Botao width="20%" widthMedia700="30%">
            Adicionar Comentário
          </Botao>
        </CaixaBotoes>
      </Conteudo>
    </Body>
  );
}

export default Local;
