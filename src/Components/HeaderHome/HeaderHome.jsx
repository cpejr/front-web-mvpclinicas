import React from "react";
import { Link } from "react-router-dom";
import { ExportOutlined, HomeOutlined } from "@ant-design/icons";
import styled from "styled-components";
import useAuthStore from "../../stores/auth";
import { toast } from "react-toastify";
import { redirecionamento } from "../../utils/redirecionamento";

const ContainerHeader = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #8b00ff;
  height: 100px;
  color: white;
  padding: 0 20px;
  margin-top: -10px;
`;

const ContainerDireita = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-evenly;
  height: 100px;
  padding: 0 20px;
`;

const LogoText = styled.p`
  font-size: 1em;
  white-space: nowrap;
  width: 50%;
  align-self: center;
`;

const BackLink = styled.div`
  display: flex;
  align-items: center;
`;

const BackButton = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 10px;
`;

export const SairTexto = styled.div`
  width: 100%;
  height: 20px;
  font-family: "Roboto Condensed";
  font-weight: 400;
  font-size: 1em;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: darkpurple;

  @media (max-width: 900px) {
    font-size: 1em;
  }
`;

function HeaderHome() {
  const logout = useAuthStore((state) => state.logout);

  async function handleLogout() {
    try {
      logout();
      toast.success("Usuario deslogado com sucesso");
      setTimeout(() => {
        redirecionamento("/login");
      }, 3000);
    } catch (error) {
      alert(error);
    }
  }
  return (
    <ContainerHeader>
      <ContainerDireita>
        <LogoText>Logo</LogoText>
      </ContainerDireita>
      <ContainerDireita>
        <BackLink>
          <BackButton to="/home">Home</BackButton>
          <HomeOutlined style={{ fontSize: "25px", color: "#570B87" }} />
        </BackLink>
        <BackLink>
          <BackButton onClick={handleLogout}>Logout</BackButton>
          <ExportOutlined
            style={{ fontSize: "25px", color: "#570B87" }}
            onClick={handleLogout}
          />
        </BackLink>
      </ContainerDireita>
    </ContainerHeader>
  );
}

export default HeaderHome;
