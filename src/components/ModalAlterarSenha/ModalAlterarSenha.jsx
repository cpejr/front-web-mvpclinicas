import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "antd";
import Botao from "../../Styles/Botao";
import Input from "../../Styles/Input";
import {
  CaixaBotoes,
  CaixaInputs,
  ConjuntoTituloInput,
  ConteudoModal,
  TituloInput,
} from "./Styles";

import { senha } from "../../utils/masks";

function ModalAlterarSenha(props) {
  const [carregando, setCarregando] = useState(false);
  const [respostas, setRespostas] = useState({});

  function preenchendoRespostas(pergunta, valor) {
    setRespostas((respostasAnteriores) => ({
      ...respostasAnteriores,
      [pergunta]: valor,
    }));
  }

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
    >
      <ConteudoModal>
        <CaixaInputs>
          <ConjuntoTituloInput>
            <TituloInput>Insira a senha atual</TituloInput>
            <Input
              placeholder={senha(props.usuario.senha)}
              type="password"
              onChange={(e) =>
                preenchendoRespostas("Senha Atual", e.target.value)
              }
            />
          </ConjuntoTituloInput>
          <ConjuntoTituloInput>
            <TituloInput>Digite a nova senha</TituloInput>
            <Input
              placeholder={"Digite Nova Senha"}
              type="password"
              onChange={(e) => preenchendoRespostas("Nova Senha", e.target.value)}
            />
          </ConjuntoTituloInput>
          <ConjuntoTituloInput>
            <TituloInput>Confirme a nova senha</TituloInput>
            <Input
              placeholder={"Confirme Nova Senha"}
              type="password"
              onChange={(e) => preenchendoRespostas("Confirme Senha", e.target.value)}
            />
          </ConjuntoTituloInput>
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

ModalAlterarSenha.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  usuario: PropTypes.func.isRequired,
};

export default ModalAlterarSenha;
