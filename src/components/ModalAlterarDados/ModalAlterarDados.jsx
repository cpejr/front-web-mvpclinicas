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

import { data, telefone } from "../../utils/masks";

function ModalAlterarDados(props) {
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
            <TituloInput>Nome Completo</TituloInput>
            <Input
              placeholder={props.usuario.nome}
              onChange={(e) =>
                preenchendoRespostas("Nome Completo", e.target.value)
              }
            />
          </ConjuntoTituloInput>
          <ConjuntoTituloInput>
            <TituloInput>Telefone</TituloInput>
            <Input
              placeholder={telefone(props.usuario.telefone)}
              onChange={(e) => preenchendoRespostas("Telefone", e.target.value)}
            />
          </ConjuntoTituloInput>
          <ConjuntoTituloInput>
            <TituloInput>Data de Nascimento</TituloInput>
            <Input
              placeholder={data(props.usuario.data_nascimento)}
              onChange={(e) =>
                preenchendoRespostas("Data de Nascimento", e.target.value)
              }
            />
          </ConjuntoTituloInput>
          <ConjuntoTituloInput>
            <TituloInput>Email</TituloInput>
            <Input
              placeholder={props.usuario.email}
              onChange={(e) => preenchendoRespostas("Email", e.target.value)}
            />
          </ConjuntoTituloInput>
          <ConjuntoTituloInput>
            <TituloInput>CRM</TituloInput>
            <Input
              placeholder={props.usuario.crm}
              onChange={(e) => preenchendoRespostas("CRM", e.target.value)}
            />
          </ConjuntoTituloInput>
          <ConjuntoTituloInput>
            <TituloInput>Unidade Federativa</TituloInput>
            <Input
              placeholder={props.usuario.uni_federativa}
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
  usuario: PropTypes.func.isRequired,
};

export default ModalAlterarDados;
