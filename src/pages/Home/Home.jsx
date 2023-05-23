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
  CaixaSelect
} from "./Styles";
import { Cores } from "../../variaveis";
import {
  SearchOutlined,
  StarFilled,
  StarOutlined
} from "@ant-design/icons";
import { Rate } from 'antd';
import Input from "../../Styles/Input/Input";
import Select from "../../Styles/Select/Select";
import Botao from "../../Styles/Botao/Botao";
import * as managerService from "../../services/ManagerService/managerService";





function Home() {
  const [locais, setLocais] = useState([]);

  async function pegandoDadosDeLocais() {
    const resposta = await managerService.GetDadosLocais();
    setLocais(resposta.dadosLocais);
  }
  
  useEffect(() => {
    pegandoDadosDeLocais();
  }, []);

  return (
    <Body>
      <Conteudo>
      <CaixaInputs>
        <Input
        placeholder="Pesquisar Local"
        backgroundColor="white"
        width="70%"
        borderColor="#570B87"
        borderWidth="2px"
        borderRadius="10px"
        fontSize="1.5em"
        padding="10px">
        </Input>
        <SearchOutlined style={{ fontSize: "28px", color: "#570B87",position:"absolute",right:"19%",paddingBottom:"1.8%"}}/>
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
			>
				<option value="">
          Pesquisar por nome
				</option>	
			</Select>
      </CaixaSelect>
      {locais.length === 0 ? (
        <CaixaPlaceholder>
        <TextoPlaceholder>Ainda não existem Locais Cadastrados</TextoPlaceholder>
        </CaixaPlaceholder>
      ) : (
      <CaixaLocais>
      {locais?.map((value, index) => (
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
                  {value?.estrelas}<Rate value={value?.estrelas} style={{color: "#570B87"}} disabled/>
									</EstrelasLocal>
                  </CaixaDados>
								</Local>
				))}
      </CaixaLocais>
      )}
      <div className="botoes-direita" style={{width: "100%", justifyContent: "flex-end"}}>
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
      </CaixaBotoes></div>
      </Conteudo>
    </Body>
  );
}

export default Home;