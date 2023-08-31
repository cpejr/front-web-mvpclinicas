import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Body,
  BotoesEdicao,
  CaixaBotoes,
  CaixaInputs,
  CaixaTitulo,
  ConjuntoTituloInput,
  Conteudo,
  Mapa,
  Rotulo,
  Subtitulo,
  Titulo,
  TituloInput,
} from "./Styles";
import Header from "../../Components/Header/Header";

import Botao from "../../Styles/Botao/Botao";
import Input from "../../Styles/Input/Input";
import { telefone } from "../../utils/masks";
import AddToast from "../../components/AddToast/AddToast";
import { toast } from "react-toastify";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import * as managerService from "../../services/ManagerService/managerService";

function CadastroNovoLocal() {
  const zeraInputs = {
    nome: "",
    telefone: "",
    setor: "",
    empresa: "",
    endereco: "",
  };

  const navigate = useNavigate();

  const [novoLocal, setNovoLocal] = useState(zeraInputs);
  const [enderecoMapa, setEnderecoMapa] = useState("Brasil");
  const [timeoutId, setTimeoutId] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState({
    nome: false,
    telefone: false,
    setor: false,
    empresa: false,
    endereco: false,
  });

  const navegar = useNavigate();

  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, color: "white" }} spin />
  );

  function preenchendoDados(e) {
    const { name, value } = e.target;

    if (name === "telefone" && value.length < 15) {
      setNovoLocal((prevState) => ({
        ...prevState,
        [name]: telefone(value),
      }));
    } else {
      setNovoLocal((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  }

  async function requisicaoCadastroNovoLocal() {
    const enderecoErro = !novoLocal.endereco;
    const nomeErro = !novoLocal.nome || /\d/.test(novoLocal.nome);
    const telefoneErro = !novoLocal.telefone || novoLocal.telefone.length < 15;
    const setorErro = !novoLocal.setor;
    const empresaErro = !novoLocal.empresa;

    setErro((erroAnterior) => ({
      ...erroAnterior,
      endereco: enderecoErro,
      nome: nomeErro,
      telefone: telefoneErro,
      setor: setorErro,
      empresa: empresaErro,
    }));
    if (nomeErro || telefoneErro || setorErro || empresaErro || enderecoErro) {
      toast.error("Preencha todos os campos corretamente!");

      return;
    } else {
      setCarregando(true);

      try {
        await managerService.CadastroNovoLocal(novoLocal);

        toast.success("Local Cadastrado com sucesso!");
        setTimeout(() => {
          navegar("/home");
          setCarregando(false);
        }, 3000);
      } catch (err) {
        toast.error("Erro na validação!");
        setCarregando(false);
      }
    }
  }

  function preenchendoEndereco(e) {
    const { name, value } = e.target;

    setNovoLocal((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    clearTimeout(timeoutId);

    const novoTimeoutId = setTimeout(() => {
      setEnderecoMapa(value);
    }, 3000);

    setTimeoutId(novoTimeoutId);
  }

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return (
    <Body>
      <Header/>
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
            ></Input>
            {/\d/.test(novoLocal.nome) && (
              <Rotulo>Digite um local válido</Rotulo>
            )}
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
              maxLength={15}
              value={novoLocal.telefone}
              onChange={preenchendoDados}
            ></Input>
            {erro.telefone && novoLocal.telefone.length < 15 && (
              <Rotulo>Digite um telefone no formato (XX)XXXXX-XXXX</Rotulo>
            )}
          </ConjuntoTituloInput>
          <ConjuntoTituloInput>
            <TituloInput>Setor:</TituloInput>
            <Input
              placeholder="Digite o nome do setor responsável"
              backgroundColor="white"
              heightMedia700="20px"
              marginBottomMedia700="8%"
              name="setor"
              erro={erro.setor}
              value={novoLocal.setor}
              onChange={preenchendoDados}
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
              erro={erro.empresa}
              value={novoLocal.empresa}
              onChange={preenchendoDados}
            ></Input>
          </ConjuntoTituloInput>
          <ConjuntoTituloInput>
            <TituloInput>Endereço:</TituloInput>
            <Input
              placeholder="Digite o endereço da empresa responsável"
              backgroundColor="white"
              heightMedia700="20px"
              marginBottomMedia700="8%"
              name="endereco"
              value={novoLocal.endereco}
              erro={erro.endereco}
              onChange={preenchendoEndereco}
            ></Input>
            {erro.endereco && <Rotulo>Digite um endereço!</Rotulo>}
          </ConjuntoTituloInput>
          <Mapa
            id="mapIframe"
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBUwXbN66GC9i-ZGfQmEY8n_QXGytWBe6I&q=${
              enderecoMapa ? enderecoMapa : "Brasil"
            }`}
          ></Mapa>
        </CaixaInputs>
        <CaixaBotoes>
          <BotoesEdicao>
            <Botao
              color="#000000"
              backgroundColor="white"
              borderColor="#FF000080"
              onClick={() => navegar("/")}
            >
              Cancelar
            </Botao>
            <Botao
              onClick={() => {
                requisicaoCadastroNovoLocal();
              }}
            >
              {carregando ? <Spin indicator={antIcon} /> : "Cadastrar"}
            </Botao>
          </BotoesEdicao>
        </CaixaBotoes>
      </Conteudo>
      <AddToast />
    </Body>
  );
}

export default CadastroNovoLocal;
