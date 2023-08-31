import React from "react";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import styled from "styled-components";

const ContainerHeader = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  background-color: #8b00ff;
  height: 100px;
  color: white;
  padding: 0 20px;
  margin-top: -10px;
  margin-bottom: 20px;
`;

const ContainerDireita = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: space-evenly;
  height: 100px;
  padding: 0 20px;
`;

const ContainerDiv = styled.div`
  display: flex;
  border-radius: 18px;
  justify-content: space-around;
  align-items: center;
  background-color: #570b87;
  height: 10vh;
  width: 20%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 20px;
`;

const LogoText = styled.p`
  font-size: 1.2em;
  white-space: nowrap;
  width: 50%;
  align-self: center;
  text-align: center;
`;

const BackLink = styled.div`
  display: flex;
  align-items: center;
`;

const BackButton = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 10px;
  font-size: 1.2em;
`;

export const SairTexto = styled.div`
  width: 100%;
  height: 20px;
  font-family: "Roboto Condensed";
  font-weight: 400;
  font-size: 1.6em;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: darkpurple;

  @media (max-width: 900px) {
    font-size: 1em;
  }
`;

function Header() {
  return (
    <ContainerHeader>
      <ContainerDiv>
        <ContainerDireita>
          <LogoText>Logo</LogoText>
        </ContainerDireita>
      </ContainerDiv>
      <ContainerDireita>
        <BackLink>
          <BackButton to="/perfil">Acesse o seu Perfil</BackButton>
          <UserOutlined style={{ fontSize: "25px", color: "#570B87" }} />
        </BackLink>
      </ContainerDireita>
    </ContainerHeader>
  );
}

export default Header;
