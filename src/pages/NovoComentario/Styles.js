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
  text-align: center;
  color: #570b87;
  padding: 2%;

  @media (max-width: 900px) {
    font-size: 1.4em;
  }
`;

export const CaixaPerguntas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  width: 40%;
  padding: 2%;
  white-space: pre-wrap;
  word-wrap: break-word;
  height: auto; 
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0px;
  }

  @media (max-width: 900px) {
    width: 60%;
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
  gap: 10px;
  height: 70%;
  width: 100%;
  padding: 2%;
  border: 1px solid #570B87;
  border-radius: 18px;
`;

export const ConjuntoTituloInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 10px;
  align-items: center;
  height: 100%;
  width: 100%;

  @media (max-width: 700px) {
    gap: 0px;
  }
`;

export const TituloInput = styled.div`
  width: 100%;
  height: 30%;
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

export const CaixaAvaliacao = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;

  @media (max-width: 900px) {
    width: 60%;
  }

  @media (max-width: 700px) {
    gap: 5px;
  }
`;

export const TituloAvaliacao = styled.div`
  display: flex;
  width: 60%;
  height: 50%;
  font-family: "Roboto Condensed";
  font-weight: 500;
  font-size: 1.4em;
  line-height: 20px;
  color: #570b87;

  @media (max-width: 900px) {
    font-size: 1.2em;
  }

  @media (max-width: 500px) {
    font-size: 1em;
  }
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
