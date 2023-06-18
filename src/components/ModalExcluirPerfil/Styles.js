import styled from "styled-components";

export const ConteudoModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CaixaInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  align-items: center;
  height: 70%;
  width: 90%;
  padding: 2%;

  @media (max-width: 900px) {
    width: 90%;
  }
`;

export const Titulo = styled.div`
  width: 100%;
  height: 45%;
  font-family: "Roboto Condensed";
  font-weight: 400;
  font-size: 1.4em;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: darkpurple;
`;

export const SubTitulo = styled.div`
  width: 100%;
  height: 45%;
  font-family: "Roboto Condensed";
  font-weight: 400;
  font-size: 1.2em;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const CaixaBotoes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: 10%;
  width: 70%;
  padding: 2%;

  @media (max-width: 900px) {
    gap: 20px;
    padding: 5%;
    width: 80%;
  }

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;
