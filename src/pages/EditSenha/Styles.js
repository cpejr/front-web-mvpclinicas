import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 10% 0;
`;

// export const BotaoConfirme = styled.button`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   height: 50%;
//   width: 70%;
//   background-color: white;
//   border-radius: 3px;
//   border: 1px solid #570B87;
//   color: #570B87;

//   @media (max-width: 700px) {
//     flex-direction: column;
//     gap: 20px;
//     width: 100%;
//   }
// `;

export const CaixaBotao = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: 30%;
  width: 80%;
  padding: 2%;

  @media (max-width: 900px) {
    gap: 20px;
    padding: 5%;
    width: 90%;
  }
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

export const CaixaFoto = styled.div`
  display: flex;
  justify-content: center;
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
  flex-direction: column;
  justify-content: center;
  gap: 30px;
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

export const Form = styled.form`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const H1 = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
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
`;

export const TituloIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1%;
  width: 100%;
`;