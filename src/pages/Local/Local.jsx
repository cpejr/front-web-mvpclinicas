import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/auth";

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
  ItemComentario,
  Pergunta,
  TextoBotao,
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
  const [comentarios, setComentarios] = useState([]);
  const [avaliacao, setAvaliacao] = useState();
  const [comentarioAtual, setComentarioAtual] = useState(0);
  const usuarioLogado = useAuthStore((state) => state.usuario);

  const navigate = useNavigate();

  const id_local = "64bfeb1b46f359c7844ccdfb";

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
    const resposta = await managerService.GetDadosLocalPorId(id_local);
    setLocal(resposta.dadosLocais);
  }

  async function pegandoComentariosLocal() {
    const resposta = await managerService.GetComentariosLocal(id_local);
    setComentarios(resposta.comentariosLocal.comentarios);
    setAvaliacao(resposta.comentariosLocal.media_avaliacao);
  }

  async function deletaLocal() {
    try {
      if (usuarioLogado.admin === false) {
        return console.log(
          "Usuário não é administrador. Não pode deletar local."
        );
      }

      await managerService.DeletaLocal(id_local);
      navigate("/");
    } catch (error) {
      console.error("Erro ao deletar local", error);
    }
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
                <TituloInput>Nome:</TituloInput>
                <IdcardOutlined
                  style={{
                    fontSize: "22px",
                    color: "#570B87",
                    fontWeight: "bold",
                  }}
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
                <TituloInput>Telefone:</TituloInput>
                <PhoneOutlined style={{ fontSize: "22px", color: "#570B87" }} />
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
              <TituloInput>Endereço:</TituloInput>
              <CalendarOutlined
                style={{ fontSize: "22px", color: "#570B87" }}
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
                <TituloInput>Setor:</TituloInput>
                <MailOutlined style={{ fontSize: "22px", color: "#570B87" }} />
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
                <TituloInput>Empresa Responsável:</TituloInput>
                <CopyOutlined style={{ fontSize: "22px", color: "#570B87" }} />
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
          <TituloAvaliacao>
            Avaliação Geral: {Math.trunc(avaliacao * 10) / 10}
          </TituloAvaliacao>
          {comentarios.length === 0 ? (
            <UsuarioComentario>
              <Comentario>
                Ainda não existem comentários relacionados a esse local.
              </Comentario>
            </UsuarioComentario>
          ) : (
            <BoxCarrossel>
              <Esquerda
                onClick={() => {
                  antComentario(comentarioAtual);
                }}
              >
                <LeftOutlined style={{ fontSize: "22px" }} />
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
                  <NomeUsuario>
                    {comentarios[comentarioAtual].id_usuario.nome}
                  </NomeUsuario>
                </Usuario>
                <Comentario>
                  {Object.entries(comentarios[comentarioAtual].comentario).map(
                    ([pergunta, resposta]) => (
                      <ItemComentario key={pergunta}>
                        <Pergunta>{pergunta}</Pergunta>
                        {resposta}
                      </ItemComentario>
                    )
                  )}
                </Comentario>
              </UsuarioComentario>
              <Direita
                onClick={() => {
                  proxComentario(comentarioAtual);
                }}
              >
                <RightOutlined style={{ fontSize: "22px" }} />
              </Direita>
            </BoxCarrossel>
          )}
        </ConteudoAvaliacao>
        <CaixaBotoes>
          <Botao
            width="12.5rem !important"
            widthMedia700="30%"
            height="2.5rem !important"
            onClick={() => navigate("/novocomentario")}
          >
            <TextoBotao>Adicionar Comentário</TextoBotao>
          </Botao>
          <Botao
            width="12.5rem !important"
            widthMedia700="30%"
            color="white"
            backgroundColor="#ff3a3a"
            borderColor="#ff3a3a"
            onClick={() => deletaLocal()}
          >
            <TextoBotao>Excluir</TextoBotao>
          </Botao>
        </CaixaBotoes>
      </Conteudo>
    </Body>
  );
}

export default Local;
