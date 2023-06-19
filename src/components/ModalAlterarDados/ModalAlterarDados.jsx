import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal, DatePicker } from "antd";
import Botao from "../../Styles/Botao";
import Input from "../../Styles/Input";
import {
  CaixaBotoes,
  CaixaInputs,
  ConjuntoTituloInput,
  ConteudoModal,
  Data,
  TituloInput,
} from "./Styles";

import { telefone } from "../../utils/masks";

import * as managerService from "../../services/ManagerService/managerService";

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

  async function alterandoDados() {
    setCarregando(true);
    console.log(respostas);
    await managerService.UpdateDadosPerfil(props.usuario._id, respostas);
    setCarregando(false);
  }

  const cancelar = () => {
    props.onClose();
  };

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
        <CaixaInputs>
          <ConjuntoTituloInput>
            <TituloInput>Nome Completo</TituloInput>
            <Input
              placeholder={props.usuario.nome}
              onChange={(e) => preenchendoRespostas("nome", e.target.value)}
            />
          </ConjuntoTituloInput>
          <ConjuntoTituloInput>
            <TituloInput>Telefone</TituloInput>
            <Input
              placeholder={telefone(props.usuario.telefone)}
              onChange={(e) => preenchendoRespostas("telefone", e.target.value)}
            />
          </ConjuntoTituloInput>
          <ConjuntoTituloInput>
            <TituloInput>Data de Nascimento</TituloInput>
            <Data>
              <DatePicker
                placeholder="Selecione a data"
                format="DD/MM/YYYY"
                style={{ border: "none", boxShadow: "none", width: "100%" }}
                suffixIcon={null}
                onChange={(date, dateString) =>
                  preenchendoRespostas("data_nascimento", dateString)
                }
              />
            </Data>
          </ConjuntoTituloInput>
          <ConjuntoTituloInput>
            <TituloInput>Email</TituloInput>
            <Input
              placeholder={props.usuario.email}
              onChange={(e) => preenchendoRespostas("email", e.target.value)}
            />
          </ConjuntoTituloInput>
          <ConjuntoTituloInput>
            <TituloInput>CRM</TituloInput>
            <Input
              placeholder={props.usuario.crm}
              onChange={(e) => preenchendoRespostas("crm", e.target.value)}
            />
          </ConjuntoTituloInput>
          <ConjuntoTituloInput>
            <TituloInput>Unidade Federativa</TituloInput>
            <Input
              placeholder={props.usuario.uni_federativa}
              onChange={(e) =>
                preenchendoRespostas("uni_federativa", e.target.value)
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
            onClick={cancelar}
          >
            Cancelar
          </Botao>
          <Botao onClick={alterandoDados}>Confirmar</Botao>
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
