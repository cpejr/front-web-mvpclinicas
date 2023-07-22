import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Conteudo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 100%;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Titulo = styled.div`
  width: 100%;
  height: 20px;
  font-family: "Roboto Condensed";
  font-size: 2.5em;
  display: flex;
  color: #570B87;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    font-size: 2.3em;
  }

  @media (max-width: 800px) {
    font-size: 2.1em;
  }

  @media (max-width: 650px) {
    font-size: 2em;
  }

  @media (max-width: 450px) {
    font-size: 1.7em;
  }

  @media (max-width: 350px) {
    font-size: 1.5em;
  }
`;

export const Subtitulo = styled.div`
  width: 70%;
  height: 20px;
  font-family: "Roboto Condensed";
  font-weight: 400;
  font-size: 1.3em;
  display: flex;
  color: #8B00FF;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    font-size: 1em;
  }

  @media (max-width: 650px) {
    font-size: 1em;
  }

  @media (max-width: 306px) {
    font-size: 0.8em;
  }
`;

export const CaixaTitulo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70%;
  width: 70%;
  padding: 2%;
  gap: 15px;
  justify-content: center;
  
  @media (max-width: 900px) {
    width: 90%;
  }

  @media (max-width: 700px) {
    gap: 5px;
  }
`;

export const CaixaInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
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
  width: 70%;

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
  color: #570B87;

  @media (max-width: 900px) {
    font-size: 1em;
  }

  @media (max-width: 500px) {
    font-size: 1em;
  }

  @media (max-width: 350px) {
    font-size: 0.8em;
  }
`;

export const SubtituloInput = styled.div`
  height: 30px;
  font-family: "Roboto Condensed";
  font-weight: 400;
  font-size: 1em;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #570B87;

  @media (max-width: 1000px) {
    font-size: 0.9em;
    align-items: center;
    justify-content: flex-start;
  }

  @media (max-width: 500px) {
    font-size: 0.8em;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10px;
  }

  @media (max-width: 326px) {
    font-size: 0.7em;
    align-items: center;
    justify-content: flex-start;
  }

  @media (max-width: 288px) {
    margin-top: 20px;
    margin-bottom: 15px;
  }
`;

export const CaixaBotoes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: 20%;
  width: 70%;
  padding: 2%;

  @media (max-width: 900px) {
    gap: 10px;
    padding: 5%;
    width: 85%;
  }

  @media (max-width: 500px) {
    gap: 10px;
    padding: 5%;
    width: 65%;
  }
`;

export const BotoesEdicao = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 50%;
  width: 100%;

  @media (max-width: 900px) {
    gap: 20px;
  }
`;
export const Rotulo = styled.div`
  font-size: 1em;
  color: #ff0000c5;
 // text-align: left;
  font-family: Roboto Condensed;

  @media (max-width: 900px) {
    font-size: 0.8em;
  }
`;