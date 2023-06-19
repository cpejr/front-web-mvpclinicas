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

export const ConjuntoTituloInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 7px;
  align-items: center;
  height: 100%;
  width: 70%;
`;

export const TituloInput = styled.div`
  width: 100%;
  height: 20px;
  font-family: "Roboto Condensed";
  font-weight: 400;
  font-size: 1.2em;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: darkpurple;

  @media (max-width: 900px) {
    font-size: 1em;
  }
`;

export const CaixaBotoes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: 20%;
  width: 70%;
  padding: 2%;

  @media (max-width: 900px) {
    gap: 20px;
    padding: 5%;
    width: 80%;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const CaixaInputRotulo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
`;

export const Rotulo = styled.div`
  font-size: 1em;
  color: #ff0000c5;
  text-align: flex-start;
  font-family: Roboto Condensed;
`;
