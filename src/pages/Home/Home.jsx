import React, { useEffect, useState } from "react";
import {
  Body,
  CaixaInputs,
  CaixaLocais,
  Conteudo,
  Local,
  NomeLocal,
  EnderecoLocal,
  EstrelasLocal,
  CaixaBotoes,
  TextoPlaceholder,
  CaixaPlaceholder,
  CaixaFoto,
  CaixaDados,
  CaixaSelect,
  CaixaConteudo
} from "./Styles";
import { Cores } from "../../variaveis";
import {
  SearchOutlined,
  StarFilled,
  StarOutlined,
  PlusOutlined
} from "@ant-design/icons";
import { Rate } from 'antd';
import Input from "../../Styles/Input/Input";
import Select from "../../Styles/Select/Select";
import Botao from "../../Styles/Botao/Botao";
import * as managerService from "../../services/ManagerService/managerService";
import AddToast from "../../components/AddToast/AddToast";
import Header from "../../Components/Header/Header";

function Home() {
  const [locais, setLocais] = useState([]);
  const [buscaTipo, setBuscaTipo] = useState("nome");
  const [pesquisa, setPesquisa] = useState('');


  const pesquisaAjustada = pesquisa
		.toLowerCase()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "");
  
  const locaisFiltrados = locais.filter((local) => {
    if (buscaTipo === "nome"){ 
      return (local?.nome
      ?.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(pesquisaAjustada) 
    )}
    if (buscaTipo === "endereco") {
    return (local?.endereco
      ?.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(pesquisaAjustada) 
    )}
    return local
	});

  async function pegandoDadosDeLocais() {
    const resposta = await managerService.GetDadosLocais();
    setLocais(resposta.dadosLocais);
  }
  function MudarBuscaTipo(tipo){
    setBuscaTipo(tipo)
  }

  useEffect(() => {
    pegandoDadosDeLocais();
  }, []);

  return (
    <Body>
      <Header/>
      <Conteudo>
        <CaixaInputs>
          <Input
            placeholder="Pesquisar Local"
            height={"25px"}
            backgroundColor="white"
            width="68%"
            borderColor="#570B87"
            borderWidth="2px"
            borderRadius="10px"
            fontSize="1.5em"
            paddingTop="10px"
            paddingRight="10px"
            paddingBottom="10px"
            paddingLeft="2%"
            value={pesquisa}
            onChange={e => setPesquisa(e.target.value)}
            >
          </Input>
          <SearchOutlined style={{ fontSize: "28px", color: "#570B87", position: "absolute", right: "19%", paddingBottom: "1.8%" }} />
        </CaixaInputs>
        <CaixaSelect>
          <Select
            backgroundColor={Cores.branco}
            color="#570B87"
            borderColor="#570B87"
            borderWidth="2px"
            borderRadius="10px"
            fontSize="17px"
            width="20%"
            marginTop="0px"
            placeholder="Pesquisar por nome"
            height="45px"
            nome="id_usuario"
            borderWidth820="100%"
            defaultValue={"nome"}
            value={buscaTipo}
            onChange={e => MudarBuscaTipo(e.target.value)}
          >
            <option value="nome">
              Pesquisar por nome
            </option>
            <option value="endereco">
              Pesquisar por endereço
            </option>
          </Select>
        </CaixaSelect>
        <CaixaConteudo>
        {locais.length === 0 ? (
          <CaixaPlaceholder>
            <TextoPlaceholder>Ainda não existem Locais Cadastrados</TextoPlaceholder>
          </CaixaPlaceholder>
        ) : (
          <CaixaLocais>
            {locaisFiltrados?.map((value, index) => (
              <Local key={index}>
                <CaixaFoto>
                  <img
                    src={value.foto_url}
                    width="100%"
                    height="100%"
                  ></img>
                </CaixaFoto>
                <CaixaDados>
                  <NomeLocal>{value?.nome}</NomeLocal>
                  <EnderecoLocal>{value?.endereco}</EnderecoLocal>
                  <EstrelasLocal>
                    {value?.estrelas}<Rate value={value?.estrelas} style={{ color: "#570B87" }} disabled />
                  </EstrelasLocal>
                </CaixaDados>
              </Local>
            ))}
          </CaixaLocais>
        )}
        </CaixaConteudo>
        <div className="botoes-direita" style={{ width: "100%", justifyContent: "flex-end" }}>
          <CaixaBotoes>
            <Botao
              borderRadius="10px"
              width="100%"
              alignSelf="flex-end"
              fontSize="25px"
              height="50px"
              HeightMedia500="50px"
              widthMedia500="100%"

            >
              Adicionar Local
            </Botao>
            <PlusOutlined style={{ fontSize: "26px", color: "#fdfdfd", position: "absolute", right: "4%", top: "23%" }}/>
          </CaixaBotoes></div>
      </Conteudo>
      <AddToast />
    </Body>
  );
}

export default Home;