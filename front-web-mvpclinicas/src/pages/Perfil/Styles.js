import styled from "styled-components";

export const Body = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: green;
`

export const Conteudo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  height: 100%;
`;

export const CaixaFoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  width: 40%;
  padding: 2%;
  background-color: beige;
  margin-top: 5%;
`;

export const CaixaInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 65%;
  width: 70%;
  padding: 2%;
  background-color: brown;
  margin-top: 5%;
`;

export const InputDividido = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 70%;
  background-color: brown;
`;

export const TituloInput = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  color: black;
  font-weight: 600;
  font-size: 0.8em;
`;

export const CaixaBotoes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 15%;
  width: 70%;
  padding: 2%;
  background-color: grey;
  margin-top: 2%;
  margin-bottom: 5%;
`;

export const BotoesEdicao = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 50%;
  width: 70%;
  background-color: grey;
`;