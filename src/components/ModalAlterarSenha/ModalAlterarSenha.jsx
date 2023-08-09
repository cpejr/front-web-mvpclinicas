import React, { useState } from "react";
import {
  CaixaBotoes,
  CaixaInputRotulo,
  CaixaInputs,
  ConjuntoTituloInput,
  ConteudoModal,
  Rotulo,
  TituloInput,
} from "./Styles";

import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { LoadingOutlined } from "@ant-design/icons";
import { Modal, Spin } from "antd";

import Botao from "../../Styles/Botao";
import Input from "../../Styles/Input";
import AddToast from "../../components/AddToast/AddToast";

import * as managerService from "../../services/ManagerService/managerService";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
function ModalAlterarSenha(props) {
  const [carregando, setCarregando] = useState(false);
  const [respostas, setRespostas] = useState({});
  const [erro, setErro] = useState({
    senhaAtual: false,
    senha: false,
    confirmaNovaSenha: false,
  });

  function preenchendoRespostas(pergunta, valor) {
    setRespostas((respostasAnteriores) => ({
      ...respostasAnteriores,
      [pergunta]: valor,
    }));
  }

  async function alterandoSenha() {
    if (!respostas.senhaAtual) {
      setErro((erroAnterior) => ({
        ...erroAnterior,
        senhaAtual: true,
      }));
      toast.error("Senha atual não confere.");
      setCarregando(false);
      return;
    } else {
      setErro((erroAnterior) => ({
        ...erroAnterior,
        senhaAtual: false,
      }));
    }

    if (!respostas.senha || respostas.senha.length < 8) {
      setErro((erroAnterior) => ({
        ...erroAnterior,
        senha: true,
      }));
      toast.error("Insira uma nova senha.");
      setCarregando(false);
      return;
    } else {
      setErro((erroAnterior) => ({
        ...erroAnterior,
        senha: false,
      }));
    }

    if (!respostas.confirmaNovaSenha) {
      setErro((erroAnterior) => ({
        ...erroAnterior,
        confirmaNovaSenha: true,
      }));
      toast.error("Preencha a confirmação da nova senha.");
      setCarregando(false);
      return;
    } else {
      setErro((erroAnterior) => ({
        ...erroAnterior,
        confirmaNovaSenha: false,
      }));
    }

    if (respostas.senha !== respostas.confirmaNovaSenha) {
      setErro((erroAnterior) => ({
        ...erroAnterior,
        confirmaNovaSenha: true,
      }));
      toast.error("Nova senha e confirmação não são iguais.");
      setCarregando(false);
      return;
    } else {
      setErro((erroAnterior) => ({
        ...erroAnterior,
        confirmaNovaSenha: false,
      }));
    }

    const resultado = await managerService.UpdateSenha(
      props.usuario._id,
      respostas
    );

    if (!resultado) {
      setErro((erroAnterior) => ({
        ...erroAnterior,
        senhaAtual: true,
      }));
      toast.error("Senha atual incorreta.");
      setCarregando(false);
      return;
    } else {
      toast.success("Senha alterada com sucesso!");
      setErro((erroAnterior) => ({
        ...erroAnterior,
        senhaAtual: false,
      }));
    }

    setCarregando(true);
    setErro(false);

    setTimeout(() => {
      setCarregando(false);
    }, 3000);
  }

  function cancelar() {
    props.onClose();
  }

  return (
    <Modal
      open={props.open}
      onCancel={cancelar}
      footer={null}
      confirmLoading={carregando}
      centered
      destroyOnClose
    >
      <ConteudoModal>
        <AddToast />
        <CaixaInputs>
          <ConjuntoTituloInput>
            <TituloInput>Insira a senha atual:</TituloInput>
            <CaixaInputRotulo>
              <Input
                placeholder={"Senha atual"}
                type="password"
                erro={erro.senhaAtual}
                onChange={(e) =>
                  preenchendoRespostas("senhaAtual", e.target.value)
                }
              />
              {erro.senhaAtual && <Rotulo>Senha atual incorreta</Rotulo>}
            </CaixaInputRotulo>
          </ConjuntoTituloInput>
          <ConjuntoTituloInput>
            <TituloInput>Digite uma nova senha:</TituloInput>
            <CaixaInputRotulo>
              <Input
                placeholder={"Nova senha"}
                type="password"
                erro={erro.senha}
                onChange={(e) => preenchendoRespostas("senha", e.target.value)}
              />
              {erro.senha && (
                <Rotulo>Insira uma nova senha com no minimo 8 digitos</Rotulo>
              )}
            </CaixaInputRotulo>
          </ConjuntoTituloInput>
          <ConjuntoTituloInput>
            <TituloInput>Confirme a nova senha:</TituloInput>
            <CaixaInputRotulo>
              <Input
                placeholder={"Confirmação nova senha"}
                type="password"
                erro={erro.confirmaNovaSenha}
                onChange={(e) =>
                  preenchendoRespostas("confirmaNovaSenha", e.target.value)
                }
              />
              {erro.confirmaNovaSenha && (
                <Rotulo>Preencha o campo corretamente</Rotulo>
              )}
            </CaixaInputRotulo>
          </ConjuntoTituloInput>
        </CaixaInputs>
        <CaixaBotoes>
          <Botao
            color="#ffffff"
            backgroundColor="#ff0000c5"
            borderColor="#ff0000"
            width="30%"
            onClick={cancelar}
          >
            Cancelar
          </Botao>
          <Botao onClick={alterandoSenha}>
            {carregando ? <Spin indicator={antIcon} /> : "Confirmar"}
          </Botao>
        </CaixaBotoes>
      </ConteudoModal>
    </Modal>
  );
}

ModalAlterarSenha.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  usuario: PropTypes.func.isRequired,
};

export default ModalAlterarSenha;
