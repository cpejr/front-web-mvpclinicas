import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
`;


export const Conteudo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 100%;
  padding-top: 2%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const CaixaBotoes = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 20%;
  position: relative;
  left: 80%;
  &.botoes-direita {
    justify-content: flex-end;
  }
  @media (max-width: 900px) {
    width: 50%;
    left: 25%;
  }
`;


export const CaixaFoto = styled.div`
  display: flex;
  justify-content: center;
  font-size: 12em;
  font-size: 12em;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  border-radius: 100%;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.2);
  background-color: grey;
  margin: 2%;

  @media (max-width: 900px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 500px) {
    width: 150px;
    height: 150px;
  }
`;

export const CaixaInputs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  @media (max-width: 700px) {
    gap: 0px;
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

export const InputDividido = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 50px;
  height: 100%;
  width: 70%;

  @media (max-width: 700px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    gap: 5px;
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
  color: darkpurple;

  @media (max-width: 900px) {
    font-size: 1em;
  }

  @media (max-width: 500px) {
    font-size: 0.8em;
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

export const CaixaLocais = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: 20%;
  width: 100%;
  padding: 2%;

  @media (max-width: 900px) {
    gap: 20px;
    padding: 5%;
  }
`;

export const Local = styled.div`
  background-color: #f2f2f2;
  border: 2px solid #570B87;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
  height: 10%;
  width: 60%;
`;

export const NomeLocal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: 20%;
  width: 100%;
  padding-bottom: 2%;
  color: #570B87;
  font-size: 32px;

  @media (max-width: 900px) {
    font-size: 20px;
  }
`;

export const EnderecoLocal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: 20%;
  width: 100%;
  padding-bottom: 2%;
  color: #570B87;
  font-size: 32px;
  @media (max-width: 900px) {
    font-size: 20px;
  }
`;

export const EstrelasLocal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: 20%;
  width: 100%;
  padding: 0%;
  color: #570B87;
  font-size: 32px;
  @media (max-width: 900px) {
    font-size: 20px;
  }
`;


export const BotoesEdicao = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 50%;
  width: 65%;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }
`;