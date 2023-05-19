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
  CaixaBotoes
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




function Home() {
  const modelodeLocal = [
    {
      id: 1,
      nome: "Restaurante A",
      endereco: "Rua 1, Cidade A",
      estrelas: 4,
      imgUrl: "https://exemplo.com/imagem1.jpg"
    },
    {
      id: 2,
      nome: "Restaurante B",
      endereco: "Rua 2, Cidade B",
      estrelas: 3,
      imgUrl: "https://exemplo.com/imagem2.jpg"
    },
    {
      id: 3,
      nome: "Restaurante C",
      endereco: "Rua 3, Cidade C",
      estrelas: 5,
      imgUrl: "https://exemplo.com/imagem3.jpg"
    },
    {
      id: 4,
      nome: "Restaurante D",
      endereco: "Rua 4, Cidade D",
      estrelas: 1,
      imgUrl: "https://exemplo.com/imagem4.jpg"
    }
  ];


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
      <Select
				backgroundColor={Cores.branco}
				color="#570B87"
				borderColor="#570B87"
        borderWidth="2px"
        borderRadius="10px"
				fontSize="17px"
				width="15%"
				marginTop="0px"
        marginLeft="56%"
				placeholder="Pesquisar por nome"
				height="45px"
				nome="id_usuario"
        borderWidth820="46%"
			>
				<option value="">
          Pesquisar por nome
				</option>	
			</Select>
      <CaixaLocais>
      {modelodeLocal.map((value) => (
								<Local key={value?.id}>
									<NomeLocal>{value?.nome}</NomeLocal>
									<EnderecoLocal>{value?.endereco}</EnderecoLocal>
                  <EstrelasLocal>
                  {value?.estrelas}<Rate value={value?.estrelas} style={{color: "#570B87"}} disabled/>
									</EstrelasLocal>
								</Local>
				))}
      </CaixaLocais>
      <div className="botoes-direita" style={{width: "100%", justifyContent: "flex-end"}}>
      <CaixaBotoes>
      <Botao
      borderRadius="10px"
      width="100%"
      alignSelf="flex-end"
      fontSize="27px"
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