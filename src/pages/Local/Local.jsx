import { useEffect, useState } from "react";
import useAuthStore from "../../stores/auth";
import AddToast from "../../components/AddToast/AddToast";
import { toast } from "react-toastify";
import { Spin } from "antd";
import {
  HeatMapOutlined,
  LoadingOutlined,
  MedicineBoxOutlined,
  UserOutlined,
} from "@ant-design/icons";
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
  Usuario,
  UsuarioComentario,
  ItemComentario,
  Pergunta,
  TextoBotao,
  CaixaLoader,
  TextoCarregando,
  Texto,
} from "./Styles";

import { Rate } from "antd";
import {
  IdcardOutlined,
  PhoneOutlined,
  CopyOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

import Botao from "../../Styles/Botao/Botao";
import fotoPerfil from "../../assets/montanha.jpg";

import * as managerService from "../../services/ManagerService/managerService";
import TextLabel from "../../Components/Label/TextLabel";
import { useGetComments } from "../../hooks/place";

function Local() {
  const antIconModal = <LoadingOutlined style={{ fontSize: 15, color: "#fff" }} spin />;
  const [local, setLocal] = useState({});
  const [comentarios, setComentarios] = useState([]);
  const [avaliacao, setAvaliacao] = useState();
  const [comentarioAtual, setComentarioAtual] = useState(0);
  const [carregando, setCarregando] = useState(false);
  const [carregandoComentarios, setCarregandoComentarios] = useState(false);
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

  async function pegandoImagens(comentarios) {
    const comentariosComImagens = [];

    for (const comentario of comentarios) {
      const imagem = await managerService.GetFotoDePerfil(comentario?.id_usuario._id);
      comentario.id_usuario.imagem = imagem;
      comentariosComImagens.push(comentario);
    }
    return comentariosComImagens;
  }

  async function pegandoComentariosLocal() {
    const resposta = await managerService.GetComentariosLocal(id_local);
    const comentariosComImagem = await pegandoImagens(resposta.comentariosLocal.comentarios);
    setComentarios(comentariosComImagem);
    setCarregandoComentarios(false);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id_local]);

  useEffect(() => {
    setCarregandoComentarios(true);
    pegandoComentariosLocal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id_local]);
  return (
    <Body>
      <Conteudo>
        <FotoNome>
          <CaixaFoto>
            <img
              src={`https://corsclinicas.onrender.com/${local.imagem}`}
              onError="https://s2-casaejardim.glbimg.com/nHlVi8l9Hvjpydwfm2vSykkiVU4=/0x0:1400x933/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_a0b7e59562ef42049f4e191fe476fe7d/internal_photos/bs/2023/p/n/a6KJuERmmFBzM2ibHhhw/platina-220-qual-e-o-predio-mais-alto-de-sao-paulo-casa-e-jardim4.jpg"
            />
          </CaixaFoto>
          <NomeTelefone>
            <ConjuntoTituloInput>
              <TextLabel content="Nome" icon={IdcardOutlined} />
              <Texto>{local?._doc?.nome}</Texto>
            </ConjuntoTituloInput>
            <ConjuntoTituloInput>
              <TextLabel content="Telefone" icon={PhoneOutlined} />
              <Texto>{local?._doc?.telefone}</Texto>
            </ConjuntoTituloInput>
          </NomeTelefone>
        </FotoNome>
        <CaixaInputs>
          <InputDividido>
            <ConjuntoTituloInput>
              <TextLabel content="Tipo" icon={UserOutlined} />
              <Texto>{local?._doc?.tipo || "Clínica"}</Texto>
            </ConjuntoTituloInput>
            {local?._doc?.tipo == "Instituição de Ensino" ? (
              <ConjuntoTituloInput>
                <TextLabel content="Contém hospital próprio?" icon={MedicineBoxOutlined} />
                <Texto>{local?._doc?.hospitalProprio}</Texto>
              </ConjuntoTituloInput>
            ) : undefined}
          </InputDividido>
          <ConjuntoTituloInput>
            <TextLabel content="Endereço" icon={HeatMapOutlined} />
            <Texto>{local?._doc?.endereco}</Texto>
          </ConjuntoTituloInput>
          <InputDividido>
            <ConjuntoTituloInput>
              <TextLabel content="Setor" icon={UserOutlined} />
              <Texto>{local?._doc?.setor}</Texto>
            </ConjuntoTituloInput>
            <ConjuntoTituloInput>
              <TextLabel content="Empresa" icon={CopyOutlined} />
              <Texto>{local?._doc?.empresa}</Texto>
            </ConjuntoTituloInput>
          </InputDividido>
        </CaixaInputs>
        {carregandoComentarios ? (
          <ConteudoAvaliacao>
            <UsuarioComentario>
              <Comentario>
                <TextoCarregando>Carregando avaliações</TextoCarregando>
                <LoadingOutlined
                  style={{
                    fontSize: 24,
                    display: "inline",
                    //padding: "1rem",
                  }}
                  spin
                />
              </Comentario>
            </UsuarioComentario>
          </ConteudoAvaliacao>
        ) : (
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
                <Comentario>Ainda não existem comentários relacionados a esse local.</Comentario>
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
                        src={comentarios[comentarioAtual]?.id_usuario?.imagem || fotoPerfil}
                        style={{
                          borderRadius: "50%",
                          height: "100%",
                          width: "100%",
                        }}
                      />
                    </FotoUsuario>
                    <NomeUsuario>{comentarios[comentarioAtual].id_usuario?.nome}</NomeUsuario>
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
        )}
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
