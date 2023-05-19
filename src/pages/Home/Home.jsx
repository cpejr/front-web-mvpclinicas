import React, { useEffect, useState } from "react";
import {
  Body,
  CaixaInputs,
  Conteudo
} from "./Styles";

import {
  IdcardOutlined,
  PhoneOutlined,
  CalendarOutlined,
  MailOutlined,
  CopyOutlined,
  GlobalOutlined,
  SearchOutlined
} from "@ant-design/icons";

import Botao from "../../Styles/Botao/Botao";
import Input from "../../Styles/Input/Input";
import fotoPerfil from "../../assets/montanha.jpg"

import * as managerService from "../../services/ManagerService/managerService";



function Perfil() {
  const [usuario, setUsuario] = useState({});
  const id = '646614fa7e221267c351d2c5';

  async function pegandoDadosUsuario() {
    const resposta = await managerService.GetDadosUsuario(id);
    setUsuario(resposta.dadosUsuario);
  }

  useEffect(() => {
    pegandoDadosUsuario();
  }, []);

  return (
    <Body>
      <Conteudo>
      <CaixaInputs>
        <Input
        placeholder="Pesquisar Local"
        backgroundColor="white"
        width="60%"
        borderColor="#570B87"
        borderWidth="1px"
        borderRadius="10px"
        fontSize="1.5em"
        padding="10px">
        </Input>
        <SearchOutlined style={{ fontSize: "28px", color: "#570B87",position:"absolute",right:"23.5%",paddingBottom:"1.8%"}}/>
      </CaixaInputs>
      
      </Conteudo>
    </Body>
  );
}

export default Perfil;