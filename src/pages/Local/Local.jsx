import React from "react";

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
} from "@ant-design/icons";

import Botao from "../../Styles/Botao/Botao";
import Input from "../../Styles/Input/Input";
import fotoPerfil from "../../assets/montanha.jpg";

function Local() {
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
                placeholder="teste"
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
                placeholder="teste"
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
              placeholder="teste"
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
                placeholder="teste"
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
                placeholder="teste"
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
                <TituloInput width="100%" justifyContent="center" fontSize="1.2em">
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
