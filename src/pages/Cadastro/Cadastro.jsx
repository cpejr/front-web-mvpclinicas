import {
  Body,
  BotoesEdicao,
  CaixaBotoes,
  CaixaLogo,
  CaixaInputs,
  ConjuntoTituloInput,
  Conteudo,
  InputDividido,
  TituloIcon,
  TituloInput,
  SubtituloInput,
  CaixaTitulo,
  Titulo,
} from "./Styles";

import {
  IdcardOutlined,
  PhoneOutlined,
  CalendarOutlined,
  MailOutlined,
  CopyOutlined,
  GlobalOutlined,
  LockOutlined,
} from "@ant-design/icons";

import Botao from "../../Styles/Botao";
import Input from "../../Styles/Input";


function Cadastro() {
  return (
    <Body>
      <Conteudo>
        <CaixaTitulo>
        <CaixaLogo>
          <img></img>
      </CaixaLogo>
      <Titulo>Faça seu cadastro</Titulo>
      </CaixaTitulo>
        <CaixaInputs>
          <ConjuntoTituloInput>
            <TituloIcon>
              <TituloInput>NOME COMPLETO:</TituloInput>
              <IdcardOutlined style={{ fontSize: "18px", color: "#570B87" }} />
            </TituloIcon>
            <Input
              placeholder="Digite seu nome completo"
              backgroundColor="white"
              heightMedia700="20px"
              marginBottomMedia700="8%"
            ></Input>
          </ConjuntoTituloInput>
          <InputDividido>
            <ConjuntoTituloInput>
              <TituloIcon>
                <TituloInput>TELEFONE:</TituloInput>
                <PhoneOutlined style={{ fontSize: "18px", color: "#570B87" }} />
              </TituloIcon>
              <Input
                placeholder="Digite seu número de telefone"
                backgroundColor="white"
                width="100%"
                heightMedia700="20px"
                alignSelf="flex-start"
                marginBottomMedia700="8%"
              ></Input>
            </ConjuntoTituloInput>
            <ConjuntoTituloInput>
              <TituloIcon>
                <TituloInput>DATA DE NASCIMENTO:</TituloInput>
                <CalendarOutlined
                  style={{ fontSize: "18px", color: "#570B87" }}
                />
              </TituloIcon>
              <Input
                placeholder="Digite sua data de nascimento:"
                backgroundColor="white"
                width="100%"
                heightMedia700="20px"
                alignSelf="flex-start"
                marginBottomMedia700="8%"
              ></Input>
            </ConjuntoTituloInput>
          </InputDividido>
          <ConjuntoTituloInput>
            <TituloIcon>
              <TituloInput>EMAIL:</TituloInput>
              <MailOutlined style={{ fontSize: "18px", color: "#570B87" }} />
            </TituloIcon>
            <Input
              placeholder="Digite seu endereço de e-mail"
              backgroundColor="white"
              heightMedia700="20px"
              marginBottomMedia700="8%"
            ></Input>
          </ConjuntoTituloInput>
          <InputDividido>
            <ConjuntoTituloInput>
              <TituloIcon>
                <TituloInput>CRM:</TituloInput>
                <CopyOutlined style={{ fontSize: "18px", color: "#570B87" }} />
              </TituloIcon>
              <Input
                placeholder="Digite seu CRM"
                backgroundColor="white"
                width="100%"
                heightMedia700="20px"
                alignSelf="flex-start"
                marginBottomMedia700="8%"
              ></Input>
            </ConjuntoTituloInput>
            <ConjuntoTituloInput>
              <TituloIcon>
                <TituloInput>UNIDADE FEDERATIVA</TituloInput>
                <GlobalOutlined
                  style={{ fontSize: "18px", color: "#570B87" }}
                />
              </TituloIcon>
              <Input
                placeholder="Digite a Unidade Federativa do CRM"
                backgroundColor="white"
                width="100%"
                heightMedia700="20px"
                justifyContent="flex-start"
                alignSelf="flex-start"
                marginBottomMedia700="8%"
              ></Input>
            </ConjuntoTituloInput>
          </InputDividido>
          <ConjuntoTituloInput>
            <TituloIcon>
              <TituloInput>SENHA:</TituloInput>
              <LockOutlined style={{ fontSize: "18px", color: "#570B87" }} />
            </TituloIcon>
            <Input
              placeholder="Digite sua senha"
              backgroundColor="white"
              heightMedia700="20px"
              marginBottomMedia700="8%"
            ></Input>
          </ConjuntoTituloInput>
          <ConjuntoTituloInput>
            <TituloIcon>
              <TituloInput>CONFIRMAÇÃO DE SENHA:</TituloInput>
              <LockOutlined style={{ fontSize: "18px", color: "#570B87" }} />
            </TituloIcon>
            <Input
              placeholder="Digite sua senha novamente"
              backgroundColor="white"
              heightMedia700="20px"
              marginBottomMedia700="8%"
            ></Input>
             <SubtituloInput>Informamos que nenhuma informação aqui preenchida além de seu nome será exibida para outros usuários!</SubtituloInput>
          </ConjuntoTituloInput>
         
        </CaixaInputs>
        <CaixaBotoes>
          <BotoesEdicao>
            <Botao
            backgroundColor="transparent"
            borderColor="transparent"
            color="#570B87" 
            textDecoration="underline"
            >Já possui uma conta?</Botao>
            <Botao>Confirmar</Botao>
          </BotoesEdicao>
        </CaixaBotoes>
      </Conteudo>
    </Body>
  );
}

export default Cadastro;
