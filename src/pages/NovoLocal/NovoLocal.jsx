import React, { useEffect, useState } from "react";
import {
  Body,
  BotoesEdicao,
  CaixaBotoes,
  CaixaInputs,
  CaixaTitulo,
  ConjuntoTituloInput,
  Conteudo,
  Subtitulo,
  Titulo,
  TituloInput,
} from "./Styles";

import Botao from "../../Styles/Botao/Botao";
import Input from "../../Styles/Input/Input";
import { telefone } from "../../utils/masks";
import { GoogleMap, LoadScript, StandaloneSearchBox } from '@react-google-maps/api';

import * as managerService from "../../services/ManagerService/managerService";

function CadastroNovoLocal() {
  const zeraInputs = {
    nome: '',
    telefone: '',
    setor: '',
    empresa: '',
    endereco: ''
  };
  const [novoLocal, setNovoLocal] = useState(zeraInputs);
  const [enderecoMapa, setEnderecoMapa] = useState("UFMGBeloHorizonte");
  const [timeoutId, setTimeoutId] = useState(null);

  function preenchendoDados(e) {
    const { name, value } = e.target;
    if (name === 'telefone') {
      setNovoLocal(prevState => ({
        ...prevState,
        [name]: telefone(value)
      }
      ))
    } else {
      setNovoLocal(prevState => ({
        ...prevState,
        [name]: value
      }))
    }
  }

  async function requisicaoCadastroNovoLocal() {
    const novoLocalCadastrado = await managerService.CadastroNovoLocal(
      novoLocal,
    )
    if (novoLocalCadastrado) {
      alert('Novo local cadastrado.')
    } else {
      alert('Erro ao cadastrar novo local.');
    }
  }

  function preenchendoEndereco(e) {
    const { name, value } = e.target

    setNovoLocal(prevState => ({
      ...prevState,
      [name]: value
    }))

    clearTimeout(timeoutId);

    const newTimeoutId = setTimeout(() => {
      setEnderecoMapa(value);
    }, 2000);

    setTimeoutId(newTimeoutId);
  }

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId); // Clear the timeout when the component unmounts
    };
  }, [timeoutId]);

  return (
    <Body>
      <Conteudo>
        <CaixaTitulo>
          <Titulo>Cadastro de local</Titulo>
          <Subtitulo>Insira os dados</Subtitulo>
        </CaixaTitulo>
        <CaixaInputs>
          <ConjuntoTituloInput>
            <TituloInput>Nome:</TituloInput>
            <Input
              placeholder="Digite o nome do local"
              backgroundColor="white"
              heightMedia700="20px"
              marginBottomMedia700="8%"
              name="nome"
              value={novoLocal.nome}
              onChange={preenchendoDados}
              style={{ borderBottom: '1px solid #570B87' }}
            ></Input>
          </ConjuntoTituloInput>
          <ConjuntoTituloInput>
            <TituloInput>Telefone:</TituloInput>
            <Input
              placeholder="Digite o telefone do local"
              backgroundColor="white"
              heightMedia700="20px"
              marginBottomMedia700="8%"
              name="telefone"
              value={novoLocal.telefone}
              onChange={preenchendoDados}
              style={{ borderBottom: '1px solid #570B87' }}
            ></Input>
          </ConjuntoTituloInput>
          <ConjuntoTituloInput>
            <TituloInput>Setor:</TituloInput>
            <Input
              placeholder="Digite o nome do setor responsável"
              backgroundColor="white"
              heightMedia700="20px"
              marginBottomMedia700="8%"
              name="setor"
              value={novoLocal.setor}
              onChange={preenchendoDados}
              style={{ borderBottom: '1px solid #570B87' }}
            ></Input>
          </ConjuntoTituloInput>
          <ConjuntoTituloInput>
            <TituloInput>Empresa Responsável:</TituloInput>
            <Input
              placeholder="Digite o nome da empresa responsável"
              backgroundColor="white"
              heightMedia700="20px"
              marginBottomMedia700="8%"
              name="empresa"
              value={novoLocal.empresa}
              onChange={preenchendoDados}
              style={{ borderBottom: '1px solid #570B87' }}
            ></Input>
          </ConjuntoTituloInput>
          <ConjuntoTituloInput>
            <TituloInput>Digite o nome do endereço abaixo:</TituloInput>
            <Input
              placeholder="1234 Rua Fictícia, Cidade Imaginária"
              backgroundColor="white"
              heightMedia700="20px"
              marginBottomMedia700="8%"
              name="endereco"
              value={novoLocal.endereco}
              onChange={preenchendoEndereco}
              style={{ borderBottom: '1px solid #570B87' }}
            ></Input>
          </ConjuntoTituloInput>
          <iframe
            id="mapIframe"
            width="600"
            height="450"
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBUwXbN66GC9i-ZGfQmEY8n_QXGytWBe6I&q=${enderecoMapa ? enderecoMapa : "UFMGBeloHorizonte"}`}
          ></iframe>
        </CaixaInputs>
        <CaixaBotoes>
          <BotoesEdicao>
            <Botao
              onClick={() => { requisicaoCadastroNovoLocal(); }}>
              Cadastrar</Botao>
            <Botao
              color="#000000"
              backgroundColor="white"
              borderColor="#FF000080"
            >
              Excluir
            </Botao>
          </BotoesEdicao>

        </CaixaBotoes>
      </Conteudo>
    </Body>
  );
}

export default CadastroNovoLocal;
