import React, { useEffect, useState } from "react";

import {} from "./Styles";

import {
  IdcardOutlined,
  PhoneOutlined,
  CalendarOutlined,
  MailOutlined,
  CopyOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

import Botao from "../../Styles/Botao/Botao";
import Input from "../../Styles/Input/Input";
import fotoPerfil from "../../assets/montanha.jpg";

import * as managerService from "../../services/ManagerService/managerService";

function Local() {
  const [local, setLocal] = useState({});
  const [comentarios, setComentarios] = useState([]);
  const [avaliacao, setAvaliacao] = useState();

  const id_local = "6469762610cc9138d78e6470";

  async function pegandoDadosLocal() {
    const resposta = await managerService.GetDadosLocal(id_local);
    setLocal(resposta.dadosLocal);
  }

  async function pegandoComentariosLocal() {
    const resposta = await managerService.GetComentariosLocal(id_local);
    setComentarios(resposta.comentariosLocal.comentarios);
    setAvaliacao(resposta.comentariosLocal.media_avaliacao);
  }

  useEffect(() => {
    pegandoDadosLocal();
  }, []);

  useEffect(() => {
    pegandoComentariosLocal();
  }, []);

  return (
    <div>
      <h1>Local</h1>
    </div>
  );
}

export default Local;
