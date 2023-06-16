import {useState} from "react";
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import Icon from "@ant-design/icons/lib/components/Icon";
import {
  Body,
  BotoesEdicao,
  CaixaBotoes,
  CaixaFoto,
  CaixaInput,
  Conteudo,
  BotaoCadastro,
  TituloInput,
  TituloIcon,
  InputNovo,
  Form,
  TextoErro,
} from "./Styles";
import Botao from "../../Styles/Botao/Botao";
import Input from "../../Styles/Input/Input";
import * as managerService from "../../services/ManagerService/managerService";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


function Login(){ 
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
const [erro, setErro] = useState("");
const [emailPreenchido, setEmailPreenchido] = useState(false);
const [senhaPreenchida, setSenhaPreenchida] = useState(false);

const logar = async (e) => {

  if(email.trim() === '' || senha.trim() === ''){
  toast.warn("Preencha todos os campos!");
    setErro('Preencha todos os campos');
    console.log(erro);
  }
  else if( (!/\S+@\S+\.\S+/.test(email) && email !== "") || senha.length < 8){
    toast.error("Preencha os campos corretamente");
    setErro('Preencha os campos corretamente');
    console.log(erro);
  }
  else if ( (/\S+@\S+\.\S+/.test(email) && email !== "") && senha.length >= 8){
    toast.success("Login Realizado com sucesso");
    console.log("Login realizado com sucesso");

  }

  await managerService.requisicaoLogin(email, senha);
}


  return ( 
    <Body>
    <Conteudo>
      <CaixaFoto></CaixaFoto>
      <CaixaInput> 
        {/* email */}
        <InputNovo>
        <TituloIcon>
          <TituloInput>E-mail</TituloInput>
          <MailOutlined style={{ fontSize: "18px", color: "#570B87", marginTop: "10%"}} />
        </TituloIcon>
        {(() => {
          console.log(email);
          if (!/\S+@\S+\.\S+/.test(email) && emailPreenchido) {
            var borderColor = "red";
            var color = "red";
            var placeholderColor = "red";
          }
          else { 
            var borderColor = "#570B87";
            var color = "#570B87";
            var placeholderColor = "#570B87"
          }
          return(
              <Input
                required
                placeholder="Digite seu e-mail"
                color={color}
                placeholderColor={placeholderColor} 
                backgroundColor="white"
                type="email"
                width="50%"
                height="100%"
                minHeight="45px"
                maxHeight="40px"
                paddingRight="2%"
                marginBottom="0%"
                borderWidth="1px"
                borderBottom={`1px solid ${borderColor}`}
                onChange = {(e) => {
                  setEmail(e.target.value);
                  setEmailPreenchido(true)
                }}
                />
            
          )  
        })()} 
        {(() => { 
          if (!/\S+@\S+\.\S+/.test(email) && email !== "") 
            return <TextoErro>Digite o e-mail corretamente</TextoErro>
          // else if (email.trim() == '' && emailPreenchido) 
          //   return <TextoErro>O e-mail deve ser preenchido</TextoErro>
        })()}
        </InputNovo>
        {/* senha */}
        <InputNovo>
        <TituloIcon>
          <TituloInput>Senha</TituloInput>
          <LockOutlined style={{ fontSize: "18px", color: "#570B87", marginTop: "10%"}} />
        </TituloIcon>
        {(() => {
          if(senha.length < 8 && senhaPreenchida) {
            var borderColor = "red";
            var color = "red";
            var placeholderColor = "red";
          }
          else {
            var borderColor = "#570B87";
            var color = "#570B87";
            var placeholderColor = "#570B87"
          }
          return(
            <Input
              placeholder="Digite sua senha"
              color={color}
              placeholderColor={placeholderColor} 
              backgroundColor="white"
              type="password"
              width="50%"
              height="100%"
              minHeight="45px"
              maxHeight="40px"
              paddingRight="2%"
              marginBottom="0%"
              borderWidth="1px"
              borderBottom={`1px solid ${borderColor}`}
              onChange = {(e) => {
                setSenha(e.target.value);
                setSenhaPreenchida(true);
              }}
              />)
        })()}
        {(() => { 
          if (senha.length < 8 && senha !== "") 
            return <TextoErro>Digite uma senha com no mínimo 8 dígitos</TextoErro>
          // else if (senha.trim() == '' && senhaPreenchida) 
          //   return <TextoErro>A senha deve ser preenchida</TextoErro>
        })()} 
        </InputNovo>

      </CaixaInput>
      <CaixaBotoes>
        <BotoesEdicao>
          <Botao 
          type="submit" 
          fontSize = "1.2em"
          width="40%"
          widthMedia500="80%"
          widthMedia280="70%"
          onClick={() => logar()}>
            Entrar</Botao>
        </BotoesEdicao>
        <BotaoCadastro
        textDecoration= "underline"
        width="40%"
        fontSize = "1.2em"
        widthMedia500="80%"
        widthMedia280="80%"
        onClick={() => {
          window.location.href="/cadastro"
        }}
        >Cadastre-se
        </BotaoCadastro>
        <ToastContainer/>
      </CaixaBotoes>
    </Conteudo>
  </Body>
  ) 
} 
 
export default Login;