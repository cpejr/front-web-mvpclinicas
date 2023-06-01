import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Titulo = styled.div`
  width: 40%;
  height: 20%;
  font-family: "Barlow";
  font-weight: 500;
  font-size: 1.6em;
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
  width: 40%;
  height: 70vh;
  flex-direction: column;
  align-items: center;
  padding: 2%;
  gap: 15px;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
  }

  @media (max-width: 900px) {
    width: 60%;
  }

  @media (max-width: 700px) {
    gap: 5px;
  }
`;

/* display: flex;
    align-items: center;
    flex-direction: column;
    width: 93%;
    height: 70vh;
    max-height: 512px;
    overflow: auto;
    padding: 8px;
    margin-top: 3%;
    box-shadow: 0 4px 2px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    border-width: 0.1em;
    border-radius: 3px; */

export const CaixaSalario = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 15px;
  height: 70%;
  width: 98%;
  border: 1px solid #570b87;
  border-radius: 18px;
  padding: 2%;
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

  justify-content: ${(props) => props.justifyContent};

  @media (max-width: 900px) {
    font-size: 1em;
  }
`;

export const CaixaAvaliacao = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 30%;
  padding: 2%;
`;

export const CaixaCheckbox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  padding: 1%;
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
