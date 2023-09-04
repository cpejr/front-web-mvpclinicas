import React from "react";
import { UserOutlined } from "@ant-design/icons";
import {
  BackButton,
  BackLink,
  ContainerDireita,
  ContainerEsquerda,
  ContainerDiv,
  ContainerHeader,
  LogoText,
} from "./Styles";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <ContainerHeader>
      <ContainerDiv onClick={() => navigate("/home")}>
        <ContainerDireita>
          <LogoText>Logo</LogoText>
        </ContainerDireita>
      </ContainerDiv>
      <ContainerEsquerda>
        <BackLink>
          <BackButton to="/perfil">
            Perfil
            <UserOutlined
              style={{ padding: "0.5rem", fontSize: "25px", color: "#fff" }}
            />
          </BackButton>
        </BackLink>
      </ContainerEsquerda>
    </ContainerHeader>
  );
}

export default Header;
