import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/auth";
import{
    Body,
    //BotaoConfirme,
    CaixaBotao,
    CaixaFoto,
    CaixaInputs,
    ConjuntoTituloInput,
    Conteudo,
    Form,
    InputDividido,
    TituloIcon,
    TituloInput,
} from "./Styles";

import {
    IdcardOutlined,
    PhoneOutlined,
    CalendarOutlined,
    MailOutlined,
    CopyOutlined,
    GlobalOutlined,
} from "@ant-design/icons";
  
import Botao from "../../Styles/Botao/Botao";
import Input from "../../Styles/Input/Input";
import fotoPerfil from "../../assets/montanha.jpg";

import * as managerService from "../../services/ManagerService/managerService";

function Edit(){
    const usuario = useAuthStore((state) => state.usuario?._id);
    const setUsuario = useAuthStore((state) => state.setUsuario);
    const id = '6466a62695e98cb373b670f4'; {/* PERGUNTAR SOBRE ISSO */}

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const res = await api.put(`/usuarios/${usuario}`, {
            nome,
            telefone,
            data_nascimento,
            email,
            crm,
            uni_federativa,
          });
          setUsuario(res.data);
        } catch (erro) {
          console.error(erro);
          alert(erro.response.data.message);
        }
    };

    const [nome, setNome] = useState(usuario.nome); //ver no backend o nome das variáveis para colocar certo
    const [email, setEmail] = useState(usuario.email); //ver no backend o nome das variáveis para colocar certo
    const [data_nascimento, setDataNascimento] = useState(usuario.data_nascimento); //ver no backend o nome das variáveis para colocar certo
    const [telefone, setTelefone] = useState(usuario.telefone); //ver no backend o nome das variáveis para colocar certo
    const [crm, setCrm] = useState(usuario.crm); //ver no backend o nome das variáveis para colocar certo
    const [uni_federativa, setUniFederativa] = useState(usuario.uni_federativa); //ver no backend o nome das variáveis para colocar certo

    const navigate = useNavigate();

    async function pegandoDadosUsuario() {
        const resposta = await managerService.GetDadosUsuario(id);
        setUsuario(resposta.dadosUsuario);
    }

    useEffect(() => {
        pegandoDadosUsuario();
    }, []);

    return(
        <Body>
            <Conteudo>
                {/* <CaixaFoto> (VER COMO EDITA FOTOS NO REACT)
                    <img src="" alt="" />
                </CaixaFoto> */}
                    <Form onSubmit={handleSubmit}>
                        <CaixaInputs>
                            <ConjuntoTituloInput>
                                <TituloIcon>
                                    <TituloInput>Nome Completo: </TituloInput>
                                    <IdcardOutlined style={{ fontSize: "22px", color: "#570B87" }} />
                                </TituloIcon>
                                <Input type="text" required placeholder={usuario.nome} backgroundColor="white" onChange={(e) => setNome(e.target.value)} />
                            </ConjuntoTituloInput>

                            <InputDividido>
                                <ConjuntoTituloInput>
                                    <TituloIcon>
                                        <TituloInput>Telefone: </TituloInput>
                                        <PhoneOutlined style={{ fontSize: "22px", color: "#570B87" }} />
                                    </TituloIcon>
                                    <Input type="tel" required placeholder={usuario.telefone} backgroundColor="white" onChange={(e) => setTelefone(e.target.value)}/>
                                </ConjuntoTituloInput>
                                <ConjuntoTituloInput>
                                    <TituloIcon>
                                        <TituloInput>Data de Nascimento: </TituloInput>
                                        <CalendarOutlined style={{ fontSize: "22px", color: "#570B87" }}/>
                                    </TituloIcon>
                                    <Input type="date" required placeholder={usuario.data_nascimento} backgroundColor="white" onChange={(e) => setDataNascimento(e.target.value)}/>
                                </ConjuntoTituloInput>
                            </InputDividido>

                            <ConjuntoTituloInput>
                                <TituloIcon>
                                    <TituloInput>E-mail: </TituloInput>
                                    <MailOutlined style={{ fontSize: "22px", color: "#570B87" }} />
                                </TituloIcon>
                                <Input type="email" required placeholder={usuario.email} backgroundColor="white" onChange={(e) => setEmail(e.target.value)}/>
                            </ConjuntoTituloInput>

                            <InputDividido>
                                <ConjuntoTituloInput>
                                    <TituloIcon>
                                        <TituloInput>CRM: </TituloInput>
                                        <CopyOutlined style={{ fontSize: "22px", color: "#570B87" }} />
                                    </TituloIcon>
                                    <Input type="text" placeholder={usuario.crm} backgroundColor="white" onChange={(e) => setCrm(e.target.value)}/>
                                </ConjuntoTituloInput>
                                <ConjuntoTituloInput>
                                    <TituloIcon>
                                        <TituloInput>Unidade Federativa: </TituloInput>
                                        <GlobalOutlined style={{ fontSize: "22px", color: "#570B87" }}/>
                                    </TituloIcon>
                                    <Input type="text" required placeholder={usuario.uni_federativa} backgroundColor="white" onChange={(e) => setUniFederativa(e.target.value)}/>
                                </ConjuntoTituloInput>
                            </InputDividido>

                        </CaixaInputs>

                        <CaixaBotao>
                            <Botao type="submit" onClick={() => navigate("/perfil")}> Confirmar </Botao>
                        </CaixaBotao>
                        
                    </Form>
            </Conteudo>
        </Body>
    );
}

export default Edit;