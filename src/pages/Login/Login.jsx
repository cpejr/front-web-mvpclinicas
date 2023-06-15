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
} from "./Styles";
import Botao from "../../Styles/Botao/Botao";
import Input from "../../Styles/Input/Input";
import * as managerService from "../../services/ManagerService/managerService";


function Login(){ 
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
const logar = async (e) => {
  await managerService.requisicaoLogin(email, senha);
}

  return ( 
    <Body>
    <Conteudo>
      <CaixaFoto></CaixaFoto>
      <CaixaInput> 
        <InputNovo>
        <TituloIcon>
          <TituloInput>E-mail</TituloInput>
          <MailOutlined style={{ fontSize: "18px", color: "#570B87", marginTop: "10%"}} />
        </TituloIcon>
         
        {(() => {
          console.log(email);
          if (email == "") {
            var borderColor = "white";
            var color = "#570B87";
            var placeholderColor = "#570B87"
          }
          else var borderColor = color = placeholderColor = "red";
            
          return(
            <Input
              borderColor={borderColor}
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
              onChange = {(e) => setEmail(e.target.value)}
              />)  
        })()} 
        {/* {(() => { ... })()} immediately invokes the arrow function and returns the JSX component returned by that function. */}
        
        </InputNovo>
        <TituloIcon>
              <TituloInput>Senha</TituloInput>
              <LockOutlined style={{ fontSize: "18px", color: "#570B87", marginTop: "10%"}} />
            </TituloIcon>
        <Input
          placeholder="Digite sua senha"
          backgroundColor="white"
          width="50%"
          type="password"
          height="100%"
          minHeight="45px"
          maxHeight="40px"
          marginTop="0%"
          paddingRight="2%"
          onChange = {(e) => setSenha(e.target.value)}
        >
        </Input>
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
      </CaixaBotoes>
    </Conteudo>
  </Body>
  ) 
} 
 
export default Login;