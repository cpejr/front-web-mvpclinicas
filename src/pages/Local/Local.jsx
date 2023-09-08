import React, { useEffect, useState } from "react";
import useAuthStore from "../../stores/auth";
import AddToast from "../../components/AddToast/AddToast";
import { toast } from "react-toastify";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";

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
  EstrelasLocal,
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
  CaixaLoader,
} from "./Styles";

import { Rate } from "antd";
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
import HeaderHome from "../../Components/HeaderHome/HeaderHome";
import * as managerService from "../../services/ManagerService/managerService";

function Local() {
  const antIconModal = (
    <LoadingOutlined style={{ fontSize: 15, color: "#fff" }} spin />
  );
  const [local, setLocal] = useState({});
  const [comentarios, setComentarios] = useState([]);
  const [avaliacao, setAvaliacao] = useState();
  const [comentarioAtual, setComentarioAtual] = useState(0);
  const [carregando, setCarregando] = useState(false);
  const usuarioLogado = useAuthStore((state) => state.usuario);

  const navigate = useNavigate();

  const { id_local } = useParams();

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
    setLocal(resposta?.dadosLocais);
  }

  // async function pegandoImagens(comentarios) {
  //   const comentariosComImagens = [];

  //   for (const comentario of comentarios) {
  //     const imagem = await managerService.GetFotoDePerfil(
  //       comentario.id_usuario._id
  //     );
  //     comentario.id_usuario.imagem = imagem;
  //     comentariosComImagens.push(comentario);
  //   }
  //   return comentariosComImagens;
  // }

  async function pegandoComentariosLocal() {
    const resposta = await managerService.GetComentariosLocal(id_local);
    // const comentariosComImagem = await pegandoImagens(
    //   resposta.comentariosLocal.comentarios
    // );
    setComentarios(resposta.comentariosLocal.comentarios);
    let recebeAvaliacao = resposta.comentariosLocal.media_avaliacao;
    let avaliacaoArredondada = recebeAvaliacao.toFixed(1);
    setAvaliacao(avaliacaoArredondada);
  }

  async function deletaLocal() {
    if (usuarioLogado.admin === false) {
      toast.error("Usuário não é administrador.");
      return;
    }
    setCarregando(true);
    try {
      await managerService.DeletaLocal(id_local);
      toast.success("Local deletado com sucesso!");
      setTimeout(() => {
        navigate("/home");
      }, 3000);
    } catch (error) {
      toast.error("Erro ao deletar local");
      setCarregando(false);
    }
  }

  useEffect(() => {
    pegandoDadosLocal();
  }, [id_local]);

  useEffect(() => {
    pegandoComentariosLocal();
  }, [id_local]);

  return (
    <Body>
      <HeaderHome local={true} />
      <Conteudo>
        <FotoNome>
          <CaixaFoto>
            <img
              src="https://i0.wp.com/www.multarte.com.br/wp-content/uploads/2019/01/totalmente-transparente-png-fw.png?fit=696%2C392&ssl=1"
              style={{
                backgroundImage: `url(https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${local.foto_url}&key=AIzaSyBUwXbN66GC9i-ZGfQmEY8n_QXGytWBe6I)`,
                borderRadius: "2%",
              }}
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
                placeholder={local?.nome}
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
                placeholder={local?.telefone}
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
              placeholder={local?.endereco}
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
                placeholder={local?.setor}
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
                placeholder={local?.empresa}
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
          <TituloAvaliacao>Avaliação Geral: {avaliacao}</TituloAvaliacao>
          <EstrelasLocal>
            <Rate
              value={Math.floor(avaliacao) + 0.5}
              style={{
                color: "#570B87",
                display: "flex",
                justifyContent: "row",
              }}
              allowHalf
              defaultValue={avaliacao}
              disabled
            />
          </EstrelasLocal>
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
                      src={
                        //comentarios[comentarioAtual]?.id_usuario.imagem ||
                        fotoPerfil
                      }
                      style={{
                        borderRadius: "50%",
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  </FotoUsuario>
                  <NomeUsuario>
                    {comentarios[comentarioAtual].id_usuario?.nome}
                  </NomeUsuario>
                </Usuario>
                <Comentario>
                  {Object.entries(comentarios[comentarioAtual]?.comentario).map(
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
            onClick={() => navigate(`/novocomentario/${id_local}`)}
            height="2.5rem !important"
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
            <TextoBotao>
              {carregando ? (
                <CaixaLoader>
                  <Spin indicator={antIconModal} />
                </CaixaLoader>
              ) : (
                "Excluir"
              )}
            </TextoBotao>
          </Botao>
        </CaixaBotoes>
      </Conteudo>
      <AddToast />
    </Body>
  );
}

export default Local;
