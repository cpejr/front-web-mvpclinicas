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

  const proxComentario = () => {
    setComentarioAtual(comentarioAtual + 1);
  };

  const antComentario = () => {
    setComentarioAtual(comentarioAtual - 1);
  };

  async function pegandoDadosLocal() {
    const resposta = await managerService.GetDadosLocal(id_local);
    setLocal(resposta.dadosLocal);
  }

  async function pegandoComentariosLocal() {
    const resposta = await managerService.GetComentariosLocal(id_local);
    setComentarios(resposta.comentariosLocal);
  }

  //console.log(local.nome)
  //console.log(comentarios);

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
              ></Input>
            </ConjuntoTituloInput>
          </InputDividido>
        </CaixaInputs>
        <ConteudoAvaliacao>
          <TituloAvaliacao>Avaliação Geral:</TituloAvaliacao>
          <BoxCarrossel>
            <Esquerda
              onClick={() => {
                antComentario(comentarioAtual);
                console.log(comentarioAtual);
              }}
            >
              <LeftOutlined style={{ fontSize: 25 }} />
            </Esquerda>
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
                <TituloInput
                  width="100%"
                  justifyContent="center"
                  fontSize="1.2em"
                >
                  Nome do Usuário
                </TituloInput>
              </Usuario>
              <Comentario>
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </Comentario>
            </UsuarioComentario>
            <Direita
              onClick={() => {
                proxComentario(comentarioAtual);
                console.log(comentarioAtual);
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
