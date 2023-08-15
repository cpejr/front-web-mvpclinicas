import styled from "styled-components";

export const AvaliacaoEstrelas = styled.div`
  color: #570b87;
`;

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
  width: 95%;
  height: 100%;
  
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const CaixaBotoes = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 43%;
  position: relative;
  left: 4%;
  @media (max-width: 500px){
    width: 70%;
    
  }
  

  
`;

export const CaixaConteudo = styled.div`
  width: 70%;
  height: 100%;
  min-height: 600px;
  max-height: 600px;
  overflow-y: scroll;
  overflow-x: hidden;
  justify-content: center;
  display: flex;
  scrollbar-width: none;
  scroll-padding: 0;
  margin-bottom: 3%;
  margin-top: 2%;
`;

export const CaixaFoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3%;
  margin-top: 3%;
  width: 140px;
  height: 100px;
  border-radius: 10px;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.2);
  background-color: grey;

  @media (max-width: 900px) {
    width: 120px;
    height: 85px;
  }

  @media (max-width: 500px) {
    width: 100px;
    height: 70px;
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

export const CaixaDados = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 5%;
  width: 75%;
  margin-left: 2%;
  

`;

export const CaixaSelect = styled.div`
  display: flex;
  width: 40%;
  justify-content: flex-end;
  margin-left: 30%;

  @media (max-width: 700px){
    font-size: 14px;
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
  width: 97%;
  padding: 2%;

 /* @media (max-width: 900px) {
    gap: 20px;
    padding: 5%;
  }*/
`;

export const Local = styled.div`
  display: flex;
  align-items: stretch;
  border: 2.5px solid #570b87;
  padding: 10px;
  margin: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
  height: 10%;
  width: 100%;
`;

export const NomeLocal = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20%;
  width: 100%;
  color: #570b87;
  background-color: white;
  font-size: 25px;
  border: none;
  cursor: pointer;

  @media (max-width: 744px) {
    font-size: 21px;
    height: 25%;
    
  }

  @media (max-width: 500px) {
    font-size : 14px;
    height: 30%;
    margin-bottom: 5%;
  }
`;

export const TextoPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: 20%;
  width: 100%;
  padding-bottom: 5%;
  padding-top: 5%;
  color: #570b87;
  font-size: 32px;

  @media (max-width: 900px) {
    font-size: 20px;
  }
`;

export const CaixaPlaceholder = styled.div`
  background-color: #f2f2f2;
  border: 2px solid #570b87;
  margin-bottom: 5%;
  margin-top: 5%;
  border-radius: 10px;
  height: 100%;
  width: 90%;
  justify-content: center;
`;

export const EnderecoLocal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10%;
  height: 20%;
  padding-bottom: 5%;
  width: 80%;
  color: #570b87;
  font-size: 20px;
  
  @media (max-width: 744px) {
    font-size: 17px;
  }

  @media (max-width: 500px) {
    font-size : 11px
  }
  
`;

export const EstrelasLocal = styled.div`
  display: flex;
  justify-content: center;

  height: 20%;
  width: 100%;
  color: #570b87;
  font-size: 32px;
  @media (max-width: 744px) {
    font-size: 15px;
  }
  @media (max-width: 500px) {
    font-size: 10px;
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
