import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerHeader = styled.header`
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

export const ContainerDireita = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: space-evenly;
  height: 100px;
  padding: 0 20px;
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
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 20px;
`;

export const LogoText = styled.p`
  font-size: 1.2em;
  white-space: nowrap;
  width: 50%;
  align-self: center;
  text-align: center;
`;

export const BackLink = styled.div`
  display: flex;
  align-items: center;
  font-family: "Roboto Condensed", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const BackButton = styled(Link)`
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
