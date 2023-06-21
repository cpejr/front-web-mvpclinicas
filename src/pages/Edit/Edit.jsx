import React, { useEffect, useState } from "react";
import api from "../../services/api";
import{
    Body,
    CaixaBotao,
    CaixaInputs,
    ConjuntoTituloInput,
    Conteudo,
    Form,
    H1,
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

import * as managerService from "../../services/ManagerService/managerService";


function Edit(){
    const [usuario, setUsuario] = useState({});
    const id = '6466a62695e98cb373b670f4';

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const res = await api.put(`/usuarios/${id}`, {
            nome,
            telefone,
            data_nascimento,
            email,
            crm,
            uni_federativa,
          });
          window.location.href="/perfil";
          setUsuario(res.data);
        } catch (erro) {
          console.error(erro);
          alert(erro.response.data.message);
        }
    };

    const [nome, setNome] = useState(usuario.nome); 
    const [email, setEmail] = useState(usuario.email); 
    const [data_nascimento, setDataNascimento] = useState(usuario.data_nascimento); 
    const [telefone, setTelefone] = useState(usuario.telefone); 
    const [crm, setCrm] = useState(usuario.crm); 
    const [uni_federativa, setUniFederativa] = useState(usuario.uni_federativa); 

    async function pegandoDadosUsuario() {
        const resposta = await managerService.GetDadosUsuario(id);
        setUsuario(resposta.dadosUsuario);
    }

    useEffect(() => {
        pegandoDadosUsuario();
    }, []);

    return(
        <Body>
            <Form onSubmit={handleSubmit}>
                <Conteudo>
                    <H1>EDIÇÃO DOS DADOS PESSOAIS</H1>
                    <CaixaInputs>
                        <ConjuntoTituloInput>
                            <TituloIcon>
                                <TituloInput>Nome Completo: </TituloInput>
                                <IdcardOutlined style={{ fontSize: "22px", color: "#570B87" }} />
                            </TituloIcon>
                            <Input 
                            required 
                            placeholder={usuario.nome} 
                            backgroundColor="white" 
                            onChange={(e) => setNome(e.target.value)} />
                        </ConjuntoTituloInput>

                        <InputDividido>
                            <ConjuntoTituloInput>
                                <TituloIcon>
                                    <TituloInput>Telefone: </TituloInput>
                                    <PhoneOutlined style={{ fontSize: "22px", color: "#570B87" }} />
                                </TituloIcon>
                                <Input 
                                required 
                                placeholder={usuario.telefone} 
                                backgroundColor="white" 
                                onChange={(e) => setTelefone(e.target.value)}/>
                            </ConjuntoTituloInput>
                            <ConjuntoTituloInput>
                                <TituloIcon>
                                    <TituloInput>Data de Nascimento: </TituloInput>
                                    <CalendarOutlined style={{ fontSize: "22px", color: "#570B87" }}/>
                                </TituloIcon>
                                <Input 
                                required 
                                placeholder={usuario.data_nascimento} 
                                backgroundColor="white" 
                                onChange={(e) => setDataNascimento(e.target.value)}/> {/* VER COMO ALTERAR FORMATO DA DATA */}
                            </ConjuntoTituloInput>
                        </InputDividido>

                        <ConjuntoTituloInput>
                            <TituloIcon>
                                <TituloInput>E-mail: </TituloInput>
                                <MailOutlined style={{ fontSize: "22px", color: "#570B87" }} />
                            </TituloIcon>
                            <Input 
                            required 
                            placeholder={usuario.email} 
                            backgroundColor="white" 
                            onChange={(e) => setEmail(e.target.value)}/>
                        </ConjuntoTituloInput>

                        <InputDividido>
                            <ConjuntoTituloInput>
                                <TituloIcon>
                                    <TituloInput>CRM: </TituloInput>
                                    <CopyOutlined style={{ fontSize: "22px", color: "#570B87" }} />
                                </TituloIcon>
                                <Input 
                                required
                                placeholder={usuario.crm} 
                                backgroundColor="white" 
                                onChange={(e) => setCrm(e.target.value)}/>
                            </ConjuntoTituloInput>
                            <ConjuntoTituloInput>
                                <TituloIcon>
                                    <TituloInput>Unidade Federativa: </TituloInput>
                                    <GlobalOutlined style={{ fontSize: "22px", color: "#570B87" }}/>
                                </TituloIcon>
                                <Input 
                                required 
                                placeholder={usuario.uni_federativa} 
                                backgroundColor="white" 
                                onChange={(e) => setUniFederativa(e.target.value)}/>
                            </ConjuntoTituloInput>
                        </InputDividido>

                    </CaixaInputs>
                    <CaixaBotao>
                        <Botao type="submit"> Confirmar </Botao>
                    </CaixaBotao>
                </Conteudo>
            </Form>
        </Body>
    );
}

export default Edit;