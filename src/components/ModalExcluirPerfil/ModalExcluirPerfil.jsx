import React, { useState } from "react";

import {
  CaixaBotoes,
  CaixaInputs,
  ConteudoModal,
  SubTitulo,
  Titulo,
} from "./Styles";

import PropTypes from "prop-types";
import { LoadingOutlined } from "@ant-design/icons";
import { Modal, Spin } from "antd";
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
import { toast } from "react-toastify";
import useAuthStore from "../../stores/auth";

import Botao from "../../Styles/Botao";
import AddToast from "../../components/AddToast/AddToast";

import * as managerService from "../../services/ManagerService/managerService";
function ModalAlterarDados(props) {
  const [carregando, setCarregando] = useState(false);
  const logout = useAuthStore((state) => state.logout);

  async function deletarPerfil() {
    setCarregando(true);
    await managerService.ExcluirPerfil(props.usuario._id);
    toast.success("Sua conta foi excluída com sucesso!");
    logout();

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
          <Titulo>Você tem certeza que deseja excluir sua conta?</Titulo>
          <SubTitulo>
            Todos os comentários feitos por você serão excluídos juntos, o que
            ocasionará uma perda de conhecimento para diversos outros
            profissionais como você.
          </SubTitulo>
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
          <Botao onClick={deletarPerfil} disabled={carregando}>
            {carregando ? <Spin indicator={antIcon} /> : "Confirmar"}
          </Botao>
        </CaixaBotoes>
      </ConteudoModal>
    </Modal>
  );
}

ModalAlterarDados.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  usuario: PropTypes.func.isRequired,
};

export default ModalAlterarDados;
