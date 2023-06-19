import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/auth";
import{
    Body,
    CaixaBotao,
    CaixaInputs,
    ConjuntoTituloInput,
    Conteudo,
    Form,
    H1,
    TituloIcon,
    TituloInput,
} from "./Styles";

import Botao from "../../Styles/Botao/Botao";
import Input from "../../Styles/Input/Input";

import * as managerService from "../../services/ManagerService/managerService";

function EditSenha(){
    const navigate = useNavigate();

    const usuario = useAuthStore((state) => state.usuario?._id);
    const setUsuario = useAuthStore((state) => state.setUsuario);
    const id = '6466a62695e98cb373b670f4'; {/* PERGUNTAR SOBRE ISSO */}

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const res = await api.put(`/usuarios/${usuario}`, {
            senha
          });
          setUsuario(res.data);
        } catch (erro) {
          console.error(erro);
          alert(erro.response.data.message);
        }
    };

    const [senha, setSenha] = useState(usuario.senha);
    const [confirmeSenha, setConfirmeSenha] = useState(usuario.confirmeSenha);

    async function pegandoDadosUsuario() {
        const resposta = await managerService.GetDadosUsuario(id);
        setUsuario(resposta.dadosUsuario);
    }

    useEffect(() => {
        pegandoDadosUsuario();
    }, []);

    // const ConfereSenha = () => {
    //     if(senha != confirmeSenha){
    //         alert("Senha incorreta")
    //       } else {
    //         alert("Acesso liberado")
    //       }
    // }

    return (
        <Body>
            <Conteudo>
                <H1>ALTERAÇÃO DA SENHA</H1>
                <Form onSubmit={(handleSubmit)}>
                    <CaixaInputs>
                        <ConjuntoTituloInput> {/* VER SE VAI COLOCAR ÍCONE. SE FOR, TEM QUE COLOCAR O TituloInput E A TAG DE ÍCONE DENTRO DA TAG TituloIcon */}
                            <TituloInput>Nova senha: </TituloInput>
                            <Input type="text" backgroundColor="white" onChange={(e) => setSenha(e.target.value)}/> {/* FORA DA TituloIcon */}
                        </ConjuntoTituloInput>
                        <ConjuntoTituloInput> {/* VER QUESTÃO DO ÍCONE */}
                            <TituloInput>Confirme a senha: </TituloInput>
                            <Input type="text" required backgroundColor="white" onChange={(e) => setConfirmeSenha(e.target.value)}/>
                        </ConjuntoTituloInput>
                        <CaixaBotao>
                            <Botao type="submit" onClick={() => navigate("/perfil")}> Confirmar </Botao>
                        </CaixaBotao>
                    </CaixaInputs>
                </Form>
            </Conteudo>
        </Body>
    )
}

export default EditSenha;