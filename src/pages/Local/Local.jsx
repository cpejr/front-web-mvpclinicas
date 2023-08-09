import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  HeaderUsuario,
} from "./Styles";

import { Rate, Spin } from "antd";
import {
  IdcardOutlined,
  PhoneOutlined,
  CalendarOutlined,
  MailOutlined,
  CopyOutlined,
  LeftOutlined,
  RightOutlined,
  DeleteOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

import Botao from "../../Styles/Botao/Botao";
import Input from "../../Styles/Input/Input";
import fotoPerfil from "../../assets/montanha.jpg";

import * as managerService from "../../services/ManagerService/managerService";
import AddToast from "../../components/AddToast/AddToast";
import { toast } from "react-toastify";

function Local() {
  const [local, setLocal] = useState({});
  const [comentarios, setComentarios] = useState([]);
  const [avaliacao, setAvaliacao] = useState();
  const [comentarioAtual, setComentarioAtual] = useState(0);
  const [carregando, setCarregando] = useState(false);
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 30, color: "white" }} spin />
  );
  

  const navigate = useNavigate();

  const id_local = "64cc36e7ad699172358faef7";
  const id_usuario = "64668ccfcf080fad87158da8";

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
    let recebeAvaliacao = resposta.comentariosLocal.media_avaliacao;
    let avaliacaoArredondada = recebeAvaliacao.toFixed(1);
    setAvaliacao(avaliacaoArredondada);
  }

  async function deletarComentario(id_comentario) {
    try{
      setCarregando(true);
      await managerService.DeletarComentario(id_comentario);
      toast.success("Comentário deletado com sucesso!");
      setTimeout(() => {
        setComentarioAtual(0);
        pegandoComentariosLocal();
        setCarregando(false);
      }, 3000);
    } catch(error){
      toast.error("Erro no servidor!");
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
      <AddToast />
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
              {carregando ? <Spin indicator={antIcon}/> : 
              <>
              <HeaderUsuario canDelete={comentarios[comentarioAtual].id_usuario._id === id_usuario}>
                  <Usuario>
                    <FotoUsuario>
                      <img
                        src="https://i0.wp.com/www.multarte.com.br/wp-content/uploads/2019/01/totalmente-transparente-png-fw.png?fit=696%2C392&ssl=1"
                        style={{ backgroundImage: 
                          `url(https://img.freepik.com/fotos-premium/paisagem-de-montanha-incrivelmente-bela-picos-das-montanhas-ao-sol-vista-panoramica-das-montanhas-de-outono-paisagem-com-vista-para-os-vales-das-montanhas-vista-superior-do-desfiladeiro-da-montanha-copie-o-espaco_135372-459.jpg?w=2000)`}}
                      />
                    </FotoUsuario>
                    <NomeUsuario>
                      {comentarios[comentarioAtual].id_usuario.nome}
                    </NomeUsuario>
                  </Usuario>             
                  <DeleteOutlined style={{fontSize: 30, display: comentarios[comentarioAtual].id_usuario._id === id_usuario ? 'block' : 'none'}}
                    onClick={() => deletarComentario(comentarios[comentarioAtual]._id)}
                  /> 
                </HeaderUsuario>
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
                </>
                }
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
            width="20%"
            widthMedia700="30%"
            onClick={() => navigate("/novocomentario")}
          >
            Adicionar Comentário
          </Botao>
        </CaixaBotoes>
      </Conteudo>
    </Body>
  );
}

export default Local;
