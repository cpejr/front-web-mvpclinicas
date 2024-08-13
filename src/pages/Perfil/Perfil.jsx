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
  Imagem,
  TextoAlterarFoto,
  Texto,
} from "./Styles";

import {
  IdcardOutlined,
  PhoneOutlined,
  CalendarOutlined,
  MailOutlined,
  CopyOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Botao from "../../Styles/Botao/Botao";

import { data, telefone } from "../../utils/masks";

import useAuthStore from "../../stores/auth";
import AddToast from "../../components/AddToast/AddToast";
import { Modal } from "antd";

import ModalAlterarFotoDePerfil from "../../components/ModalAlterarFotoDePerfil/ModalAlterarFotoDePerfil";
import ModalAlterarDados from "../../components/ModalAlterarDados";
import ModalAlterarSenha from "../../components/ModalAlterarSenha";
import ModalExcluirPerfil from "../../components/ModalExcluirPerfil";
import { useRequisicaoFotoDePerfil } from "../../hooks/imagem";
import { useGetDadosUsuario } from "../../hooks/user";
import { toast } from "react-toastify";
import TextLabel from "../../Components/Label/TextLabel";
function Perfil() {
  const [usuario, setUsuario] = useState({});
  const [modalAlterarFotoPerfil, setModalAlterarFotoPerfil] = useState(false);
  const [imagem, setImagem] = useState("");
  const [modalAlterarDados, setModalAlterarDados] = useState(false);
  const [modalExcluirPerfil, setModalExcluirPerfil] = useState(false);
  const [modalAlterarSenha, setModalAlterarSenha] = useState(false);

  const usuarioLogado = useAuthStore((state) => state.usuario);
  const { data: imagemPerfil, isLoading } = useRequisicaoFotoDePerfil(usuarioLogado._id, {
    onError: (err) => {
      toast.error("Erro ao pegar itens", err);
    },
  });
  const { data: user, isPending } = useGetDadosUsuario(usuarioLogado._id, {
    onError: (err) => {
      toast.error("Erro ao pegar itens", err);
    },
  });

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
    if (!isPending) {
      setUsuario(user);
    }
    if (!isLoading) {
      setImagem(imagemPerfil.imagem);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, isPending]);

  async function fechandoModalAlterarFotoPerfil() {
    setModalAlterarFotoPerfil(false);
  }

  return (
    <Body>
      <Conteudo>
        <CaixaFoto>
          {isLoading ? <AiOutlineLoading3Quarters /> : <Imagem src={imagem} alt="Event" />}
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
            <TextLabel content="Nome Completo" icon={IdcardOutlined}></TextLabel>
            <Texto>{usuario.nome}</Texto>
          </ConjuntoTituloInput>
          <InputDividido>
            <ConjuntoTituloInput>
              <TextLabel content="Telefone" icon={PhoneOutlined}></TextLabel>
              <Texto>{telefone(usuario.telefone)}</Texto>
            </ConjuntoTituloInput>
            <ConjuntoTituloInput>
              <TextLabel content="Data de nascimento" icon={CalendarOutlined}></TextLabel>
              <Texto>{data(usuario.data_nascimento)}</Texto>
            </ConjuntoTituloInput>
          </InputDividido>
          <ConjuntoTituloInput>
            <TextLabel content="E-mail" icon={MailOutlined}></TextLabel>
            <Texto>{usuario.email}</Texto>
          </ConjuntoTituloInput>
          <InputDividido>
            {usuario.registro && (
              <ConjuntoTituloInput>
                <TextLabel content="Registro" icon={CopyOutlined}></TextLabel>
                <Texto>{usuario.registro}</Texto>
              </ConjuntoTituloInput>
            )}
            <ConjuntoTituloInput>
              <TextLabel content="Formação" icon={CopyOutlined}></TextLabel>
              <Texto>{usuario.formacao}</Texto>
            </ConjuntoTituloInput>
            <ConjuntoTituloInput>
              <TextLabel content="Unidade Federativa" icon={GlobalOutlined}></TextLabel>
              <Texto>{usuario.uni_federativa}</Texto>
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
      </Modal>
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
      <AddToast />
    </Body>
  );
}

export default Perfil;
