import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "antd";
import Botao from "../../Styles/Botao";
import {
  CaixaBotoes,
  CaixaInputs,
  ConjuntoTituloInput,
  ConteudoModal,
  SubTitulo,
  Titulo,
} from "./Styles";

function ModalAlterarDados(props) {
  const [carregando, setCarregando] = useState(false);

  const handleOk = () => {
    setCarregando(true);
    setTimeout(() => {
      props.onClose();
      setCarregando(false);
    }, 2000);
  };

  const handleCancel = () => {
    props.onClose();
  };

  return (
    <Modal
      open={props.open}
      onCancel={handleCancel}
      footer={null}
      confirmLoading={carregando}
      centered
      destroyOnClose
    >
      <ConteudoModal>
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
            onClick={handleCancel}
          >
            Cancelar
          </Botao>
          <Botao onClick={handleOk}>Confirmar</Botao>
        </CaixaBotoes>
      </ConteudoModal>
    </Modal>
  );
}

ModalAlterarDados.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalAlterarDados;
