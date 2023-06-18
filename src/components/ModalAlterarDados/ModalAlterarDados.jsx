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

function ModalAlterarDados(props) {
  const [carregando, setCarregando] = useState(false);
  const [respostas, setRespostas] = useState({});

  function preenchendoRespostas(pergunta, valor) {
    setRespostas((respostasAnteriores) => ({
      ...respostasAnteriores,
      [pergunta]: valor,
    }));
    console.log(respostas);
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
      destroyOnClose
      wrapClassName="modal-wrapper"
    >
      <ConteudoModal>
        <CaixaInputs>
          <ConjuntoTituloInput>
            <TituloInput>Nome Completo</TituloInput>
            <Input
              placeholder="Nome Completo"
              onChange={(e) =>
                preenchendoRespostas("Nome Completo", e.target.value)
              }
            />
          </ConjuntoTituloInput>
          <ConjuntoTituloInput>
            <TituloInput>Telefone</TituloInput>
            <Input
              placeholder="Telefone"
              onChange={(e) => preenchendoRespostas("Telefone", e.target.value)}
            />
          </ConjuntoTituloInput>
          <ConjuntoTituloInput>
            <TituloInput>Data de Nascimento</TituloInput>
            <Input
              placeholder="Data de Nascimento"
              onChange={(e) =>
                preenchendoRespostas("Data de Nascimento", e.target.value)
              }
            />
          </ConjuntoTituloInput>
          <ConjuntoTituloInput>
            <TituloInput>Email</TituloInput>
            <Input
              placeholder="Email"
              onChange={(e) => preenchendoRespostas("Email", e.target.value)}
            />
          </ConjuntoTituloInput>
          <ConjuntoTituloInput>
            <TituloInput>CRM</TituloInput>
            <Input
              placeholder="CRM"
              onChange={(e) => preenchendoRespostas("CRM", e.target.value)}
            />
          </ConjuntoTituloInput>
          <ConjuntoTituloInput>
            <TituloInput>Unidade Federativa</TituloInput>
            <Input
              placeholder="Unidade Federativa"
              onChange={(e) =>
                preenchendoRespostas("Unidade Federativa", e.target.value)
              }
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

ModalAlterarDados.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalAlterarDados;
