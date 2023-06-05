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
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2);

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

export const InputComentario = styled.input`
  display: flex;
  height: 30px;
  width: 100%;
  justify-content: center;
  align-self: center;
  border: 1px solid #570b87;
  border-radius: 18px;
  padding-left: 2%;
  border-color: ${(props) => {
    let cor;
    if (!props.color) {
      if (props.checkPreenchido) {
        cor = "gray";
      } else if (props.erro) {
        cor = "#ff0000c5";
      } else {
        cor = "#570B87";
      }
    } else {
      cor = props.color;
    }
    return cor;
  }};
  font-size: 1em;
  font-family: "Roboto Condensed";
  line-height: 50px;
  color: #8B00FF;

  &:focus {
    outline: none;
  }
`;

export const CaixaAvaliacao = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 30%;
  padding: 2%;
  align-items: center;
  text-align: center;

  @media (max-width: 900px) {
    flex-direction: column;
    width: 60%;
    padding-top: 5%;
  }
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
  justify-content: center;

  @media (max-width: 900px) {
    width: 80%;
    font-size: 1.2em;
    text-align: center;
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

export const CaixaInputRotulo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 30%;
  gap: 10px;
`;

export const Rotulo = styled.div`
  font-size: 1em;
  color: #ff0000c5;
  text-align: center;
  font-family: Roboto Condensed;

  @media (max-width: 900px) {
    font-size: 0.8em;
  }
`;
