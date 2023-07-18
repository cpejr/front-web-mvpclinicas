import  { useState } from "react";
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
} from "./Styles";

import Botao from "../../Styles/Botao/Botao";
import Input from "../../Styles/Input/Input";
import { telefone } from "../../utils/masks";
import * as managerService from "../../services/ManagerService/managerService";
import AddToast from "../../components/AddToast/AddToast";
import { toast } from "react-toastify";


function CadastroNovoLocal() {
  const zeraInputs = {
    nome: '',
    telefone: '',
    setor: '',
    empresa: '',
  };
 
  const [novoLocal, setNovoLocal] = useState(zeraInputs);
  const [erro, setErro] = useState({
    nome: false,
    telefone: false,
    setor: false,
    empresa: false,
    endereco: false,
  });
  function preenchendoDados(e) {
    const { name, value } = e.target;

    if (name === 'telefone' && value.length < 15) {
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
  const nomeErro = !novoLocal.nome || /\d/.test(novoLocal.nome);
  const telefoneErro = !novoLocal.telefone || novoLocal.telefone.length < 15;
  const setorErro = !novoLocal.setor;
  const empresaErro = !novoLocal.empresa;

  setErro((erroAnterior)=> ({
    ...erroAnterior,
    nome: nomeErro,
    telefone: telefoneErro,
    setor: setorErro,
    empresa: empresaErro,
  }));
    if(nomeErro|| telefoneErro|| setorErro || empresaErro){
      toast.error("Preencha todos os campos corretamente!");

      return;
    }else{
     
      toast.success("Local Cadastrado com sucesso!");
      await managerService.CadastroNovoLocal(
        novoLocal,
      )
    }
    
  }
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
              erro={erro.nome}
              value={novoLocal.nome}
              onChange={preenchendoDados}
              style={{ color: '#570B87' }}
            ></Input>
      
            {/\d/.test(novoLocal.nome) && <Rotulo>Digite um local válido</Rotulo>}
          </ConjuntoTituloInput>
          <ConjuntoTituloInput>
            <TituloInput>Telefone:</TituloInput>
            <Input
              placeholder="Digite o telefone do local"
              backgroundColor="white"
              heightMedia700="20px"
              marginBottomMedia700="8%"
              name="telefone"
              erro={erro.telefone}
              value={novoLocal.telefone}
              maxLength={15}
              onChange={preenchendoDados}
              style={{ color: '#570B87' }}
            ></Input>
            {erro.telefone && novoLocal.telefone.length < 15 && <Rotulo>Digite um telefone no formato (XX)XXXXX-XXXX</Rotulo>}

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
              erro={erro.setor}
              onChange={preenchendoDados}
              style={{ color: '#570B87' }}
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
              erro={erro.empresa}
              onChange={preenchendoDados}
              style={{ color: '#570B87' }}
            ></Input>
          </ConjuntoTituloInput>
          <ConjuntoTituloInput>
            <TituloInput>Selecione um endereço no mapa abaixo:</TituloInput>
          </ConjuntoTituloInput>

        </CaixaInputs>
        <CaixaBotoes>
          <BotoesEdicao>
            <Botao
             onClick={() => { requisicaoCadastroNovoLocal() }}>
              Cadastrar
            </Botao>
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
