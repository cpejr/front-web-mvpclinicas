import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerHeader = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #8b00ff;
  height: 100px;
  color: white;
  padding: 0 20px;
  margin-bottom: 1rem;
`;

export const ContainerDireita = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100px;
  padding: 0 20px;
  @media (max-width: 600px) {
    width: 100%;
    padding: 0;
  }
`;
export const ContainerEsquerda = styled.div`
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: space-evenly;
  height: 100px;
  padding: 0 20px;
  @media (max-width: 600px) {
    width: 50%;
  }
`;
export const ContainerDiv = styled.div`
  display: flex;
  border-radius: 18px;
  justify-content: space-around;
  align-items: center;
  background-color: #570b87;
  height: 10vh;
  width: 20%;
  text-align: center;
  margin-left: 10%;
  :hover {
    cursor: pointer;
  }
`;

export const LogoText = styled.p`
  font-size: 1em;
  white-space: nowrap;
  width: 50%;
  align-self: center;
  text-align: center;
  font-family: "Barlow", sans-serif;
`;

export const BackLink = styled.div`
  display: flex;
  align-items: center;
`;

export const BackButton = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 10px;

  font-family: "Roboto Condensed", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
