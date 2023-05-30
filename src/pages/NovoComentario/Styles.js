import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Titulo = styled.div`
  width: 100%;
  height: 10%;
  font-family: "Barlow";
  font-weight: 400;
  font-size: 1.4em;
  line-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #570b87;
  padding: 2%;

  @media (max-width: 900px) {
    font-size: 1.4em;
  }
`;

export const CaixaPerguntas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 300px;
  width: 40%;
  padding: 2%;
  overflow-y: auto;
  overflow-x: hidden;
  white-space: pre-wrap;
  word-wrap: break-word;

  ::-webkit-scrollbar {
    width: 0px;
  }

  @media (max-width: 900px) {
    width: 90%;
  }

  @media (max-width: 700px) {
    gap: 5px;
  }
`;

export const CaixaSalario = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 70%;
  width: 70%;
  padding: 2%;

  @media (max-width: 900px) {
    width: 90%;
  }

  @media (max-width: 700px) {
    gap: 5px;
  }
`;

export const ConjuntoTituloInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 7px;
  align-items: center;
  height: 100%;
  width: 100%;

  @media (max-width: 700px) {
    gap: 0px;
  }
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
  color: #570b87;

  @media (max-width: 900px) {
    font-size: 1em;
  }
`;

export const TituloIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1%;
  width: 100%;
`;

export const CaixaBotoes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  height: 20%;
  width: 40%;
  padding: 2%;

  @media (max-width: 900px) {
    gap: 20px;
    padding: 5%;
    width: 90%;
  }
`;
