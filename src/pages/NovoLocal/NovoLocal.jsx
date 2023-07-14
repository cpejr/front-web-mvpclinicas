import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  Rotulo,
  IFrame,
} from "./Styles";

import Botao from "../../Styles/Botao/Botao";
import Input from "../../Styles/Input/Input";
import { telefone } from "../../utils/masks";
import AddToast from "../../components/AddToast/AddToast";
import { toast } from "react-toastify";
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
  const [erro, setErro] = useState({
    endereco: false,
  });

  const navigate = useNavigate();

  function preenchendoDados(e) {
    const { name, value } = e.target;
    if (name === 'telefone') {
      setNovoLocal(prevState => ({
        ...prevState,
        [name]: telefone(value)
      }
      ))

      //atualiza o valor do campo
    } else { 
      setNovoLocal(prevState => ({
        ...prevState,
        [name]: value
      }))
    }
  }

  const style = {
    borderBottom: props => (props.erro ? '1px solid #ff0000c5' : '1px solid #570B87')
  };

  async function requisicaoCadastroNovoLocal() {
    const enderecoErro = !novoLocal.endereco;
  
    setErro((erroAnterior)=> ({
      ...erroAnterior,
      endereco: enderecoErro,
    }));
      if(enderecoErro){
        toast.error("Preencha todos os campos corretamente!");
  
        return;
      }else{
        try {
          await managerService.CadastroNovoLocal(
            novoLocal,
          )
          toast.success("Local Cadastrado com sucesso!");
          navigate("/local");
        } catch (err) {
          toast.error("Erro na validação!");
        }
      }
      
}

  function preenchendoEndereco(e) {
    const { name, value } = e.target

    setNovoLocal(prevState => ({
      ...prevState,
      [name]: value
    }))

    clearTimeout(timeoutId);

    const novoTimeoutId = setTimeout(() => {
      setEnderecoMapa(value);
    }, 2000);

    setTimeoutId(novoTimeoutId);
  }

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
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
            <TituloInput>Endereço:</TituloInput>
            <Input
              placeholder="1234 Rua Fictícia, Cidade Imaginária"
              backgroundColor="white"
              heightMedia700="20px"
              marginBottomMedia700="8%"
              name="endereco"
              value={novoLocal.endereco}
              erro={false}
              onChange={preenchendoEndereco}
              style={{ borderBottom: `${(erro.endereco ? "1px solid #ff0000c5" : "1px solid #570B87")}` }}
            ></Input>
            {erro.endereco && <Rotulo>Digite um endereço!</Rotulo>}
          </ConjuntoTituloInput>
          <IFrame
            id="mapIframe"
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBUwXbN66GC9i-ZGfQmEY8n_QXGytWBe6I&q=${enderecoMapa ? enderecoMapa : "UFMGBeloHorizonte"}`}
          ></IFrame>
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
      <AddToast/>
    </Body>
  );
}

export default CadastroNovoLocal;
