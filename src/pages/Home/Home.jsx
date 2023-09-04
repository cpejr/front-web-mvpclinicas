import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  CaixaConteudo,
} from "./Styles";
import { Cores } from "../../utils/variaveis";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import Input from "../../Styles/Input/Input";
import Select from "../../Styles/Select/Select";
import Botao from "../../Styles/Botao/Botao";
import * as managerService from "../../services/ManagerService/managerService";
import AddToast from "../../components/AddToast/AddToast";
import Header from "../../Components/Header/Header";

function Home() {
  const navigate = useNavigate();
  const [locais, setLocais] = useState([]);
  const [buscaTipo, setBuscaTipo] = useState("nome");
  const [pesquisa, setPesquisa] = useState("");

  const pesquisaAjustada = pesquisa
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const locaisFiltrados = locais.filter((locais) => {
    if (buscaTipo === "nome") {
      return locais?.nome
        ?.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(pesquisaAjustada);
    }
    if (buscaTipo === "endereco") {
      return locais?.endereco
        ?.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(pesquisaAjustada);
    }
    return locais;
  });

  async function pegandoDadosDeLocais() {
    try {
      const resposta = await managerService.GetDadosLocais();

      setLocais(resposta.dadosLocais);
    } catch (error) {
      console.error("Erro ao carregar os dados:", error);
    }
  }

  useEffect(() => {
    pegandoDadosDeLocais();
  }, []);

  function MudarBuscaTipo(tipo) {
    setBuscaTipo(tipo);
  }

  return (
    <Body>
      <Header />
      <Conteudo>
        <CaixaInputs>
          <Input
            placeholder="Pesquisar Local"
            height={"22px"}
            backgroundColor="white"
            width="67%"
            borderColor="#570B87"
            borderWidth="2px"
            borderRadius="18px"
            fontSize="1.4em"
            paddingTop="10px"
            paddingRight="10px"
            paddingBottom="10px"
            paddingLeft="2%"
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
          ></Input>
          <SearchOutlined
            style={{
              fontSize: "28px",
              color: "#570B87",
              position: "absolute",
              right: "20%",
              paddingBottom: "1.8%",
            }}
          />
        </CaixaInputs>
        <CaixaSelect>
          <Select
            backgroundColor={Cores.branco}
            color="#570B87"
            borderColor="#570B87"
            borderWidth="2px"
            fontSize="16px"
            marginTop="0px"
            paddingLeft="20px"
            borderRadius="18px"
            placeholder="Pesquisar por nome"
            height="35px"
            nome="id_usuario"
            fontSize750="13px"
            defaultValue={"nome"}
            value={buscaTipo}
            onChange={(e) => MudarBuscaTipo(e.target.value)}
          >
            <option value="nome">Pesquisar por nome</option>
            <option value="endereco">Pesquisar por endereço</option>
          </Select>
        </CaixaSelect>
        <CaixaConteudo>
          {locais.length === 0 ? (
            <CaixaPlaceholder>
              <TextoPlaceholder>
                Ainda não existem Locais Cadastrados
              </TextoPlaceholder>
            </CaixaPlaceholder>
          ) : (
            <CaixaLocais>
              {locaisFiltrados?.map((value, index) => (
                <Local
                  key={index}
                  onClick={() => navigate(`/local/${value?._id}`)}
                >
                  <CaixaFoto>
                    <img src={value.foto_url} width="100%" height="100%"></img>
                  </CaixaFoto>
                  <CaixaDados>
                    <NomeLocal>{value?.nome}</NomeLocal>
                    <EnderecoLocal>{value?.endereco}</EnderecoLocal>
                    <EstrelasLocal>
                      {value?.estrelas}
                      <Rate
                        value={value?.estrelas}
                        style={{
                          color: "#570B87",
                          fontSize: "0.75em",
                          marginBottom: "5%",
                        }}
                        disabled
                      />
                    </EstrelasLocal>
                  </CaixaDados>
                </Local>
              ))}
            </CaixaLocais>
          )}
        </CaixaConteudo>
        <div
          style={{
            width: "65%",
            height: "40%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <CaixaBotoes>
            <Botao
              borderRadius="18px"
              width="100%"
              alignSelf="flex-end"
              fontSize="22px"
              height="45px"
              paddingRight="30px"
              onClick={() => navigate("/novolocal")}
            >
              Adicionar Local
            </Botao>
            <PlusOutlined
              className="iconeMais"
              style={{
                fontSize: "20px",
                color: "#fdfdfd",
                position: "absolute",
                right: "4%",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          </CaixaBotoes>
        </div>
      </Conteudo>
      <AddToast />
    </Body>
  );
}

export default Home;
