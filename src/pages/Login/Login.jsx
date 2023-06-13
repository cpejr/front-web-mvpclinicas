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
  Rotulo,
} from "./Styles";
import Botao from "../../Styles/Botao/Botao";
import Input from "../../Styles/Input/Input";
import * as managerService from "../../services/ManagerService/managerService";
import { LoadingOutlined } from "@ant-design/icons";
import AddToast from "../../components/AddToast/AddToast";
import { toast } from "react-toastify";
import _ from "lodash";


function Login(){ 
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
const [erro, setErro] = useState(false);
const [camposVazios, setCamposVazios] = useState(false);
const [carregando, setCarregando] = useState(false);

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const errors = {};
  const referenciaCamposNulos = {
    email: false,
    senha: false,
  };

  async function validacaoEmail(e) {
    const { value, name } = e.target;

    if (value) {
      setCamposVazios({ ...camposVazios, [name]: false });
    } else {
      setCamposVazios({ ...camposVazios, [name]: true });
    }

    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (!regEx.test(value)) {
      setErro({ ...erro, [name]: true });
    } else {
      setErro({ ...erro, [name]: false });
    }

    setEmail(value);
  }

  async function validacaoSenha(e) {
    const { value, name } = e.target;

    if (value) {
      setCamposVazios({ ...camposVazios, [name]: false });
    } else {
      setCamposVazios({ ...camposVazios, [name]: true });
    }

    if (name === "senha" && value.length < 8) {
      setErro({ ...erro, [name]: true });
    } else {
      setErro({ ...erro, [name]: false });
    }

    setSenha(value);
  }

const logar = async (e) => {
 const resposta = await managerService.requisicaoLogin(email.trim(), senha);
  /*if (!email.trim()) errors.email = true;
  if (!senha) errors.senha = true;
  setCamposVazios({ ...camposVazios, ...errors });

  if (_.isEqual(camposVazios, referenciaCamposNulos)) {
    setCarregando(true);
    const resposta = await managerService.GetDadosPessoais();
    console.log(resposta);
    let procurandoEmail = 0;
    let contandoForEach = 0;
    let quantidadeUsuarios = resposta.length;
    resposta.forEach((usuario) => {
      contandoForEach++;
      if (usuario.email === email.trim()) {
        procurandoEmail++;
      }
      if (quantidadeUsuarios === contandoForEach) {
        if (procurandoEmail === 0)
          toast.error("Esse email não está cadastrado.");
        else managerService.ConferirSenha(email.trim(), senha);
      }
    });

    await managerService.requisicaoLogin(email.trim(), senha);
    setCarregando(false);
  } else {
    setCarregando(true);
    toast.warn("Preencha todos os campos");
    setCarregando(false);
  }*/

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
        <Input
          placeholder="Digite seu e-mail"
          color="#8B00FF"
          backgroundColor="white"
          type="email"
          width="50%"
          height="100%"
          minHeight="45px"
          maxHeight="40px"
          paddingRight="2%"
          marginBottom="0%"
          value={email}
          onChange={validacaoEmail}
          camposVazios={camposVazios.email}
          erro={erro.email}
        >
        </Input>
        </InputNovo>
        {erro.email && (
            <Rotulo>Digite um email no formato email@email.com</Rotulo>
          )}
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
          value={senha}
          onChange={validacaoSenha}
          camposVazios={camposVazios.senha}
          erro={erro.senha}
        >
        </Input>
        {erro.senha && (
            <Rotulo>Digite uma senha com no minimo 8 digitos</Rotulo>
          )}
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
          window.location.href="/Cadastro"
        }}
        >Cadastre-se
        </BotaoCadastro>
      </CaixaBotoes>
    </Conteudo>
  </Body>
  ) 
} 
 
export default Login;