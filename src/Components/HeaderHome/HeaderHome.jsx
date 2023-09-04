import React from "react";
import { ExportOutlined, HomeOutlined } from "@ant-design/icons";
import useAuthStore from "../../stores/auth";
import { toast } from "react-toastify";
import { redirecionamento } from "../../utils/redirecionamento";
import PropTypes from "prop-types";
import {
  BackButton,
  BackLink,
  ContainerDireita,
  ContainerDiv,
  ContainerHeader,
  LogoText,
} from "./Styles";

function HeaderHome(props) {
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
      <ContainerDiv>
        <ContainerDireita>
          <LogoText>Logo</LogoText>
        </ContainerDireita>
      </ContainerDiv>
      <ContainerDireita>
        <BackLink>
          <BackButton to="/home">
            Home
            <HomeOutlined
              style={{ padding: "0.5rem", fontSize: "25px", color: "#fff" }}
            />
          </BackButton>
        </BackLink>
        {props.local ? (
          <></>
        ) : (
          <BackLink>
            <BackButton onClick={handleLogout}>Logout</BackButton>
            <ExportOutlined
              style={{ fontSize: "25px", color: "#570B87" }}
              onClick={handleLogout}
            />
          </BackLink>
        )}
      </ContainerDireita>
    </ContainerHeader>
  );
}

HeaderHome.propTypes = {
  local: PropTypes.bool.isRequired,
};

export default HeaderHome;
