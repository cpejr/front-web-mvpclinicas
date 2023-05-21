import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const FotoNome = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 70%;
  width: 70%;
  padding: 1%;

  @media (max-width: 700px) {
    flex-direction: column;
    width: 70%;
  }
`;

export const NomeTelefone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  align-items: center;
  height: 100%;
  width: 50%;

  @media (max-width: 900px) {
    width: 60%;
  }

  @media (max-width: 700px) {
    gap: 5px;
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
  border-radius: 50%;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.2);
  background-color: grey;
  margin: 2%;

  @media (max-width: 900px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 700px) {
    width: 160px;
    height: 160px;
  }

  @media (max-width: 450px) {
    width: 130px;
    height: 130px;
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
  padding: 1%;

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
  width: 80%;

  width: ${(props) => props.width};

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
  width: 80%;

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
  height: 30px;
  font-family: "Roboto Condensed";
  font-weight: 400;
  font-size: 1.2em;
  line-height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #570B87;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  justify-content: ${(props) => props.justifyContent};
  color: ${(props) => props.color};

  @media (max-width: 900px) {
    font-size: 1em;
  }

  @media (max-width: 900px) {
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

export const ConteudoAvaliacao = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  align-items: center;
  height: 70%;
  width: 70%;
  padding: 1%;
  margin-top: 2%;

  @media (max-width: 900px) {
    width: 60%;
    padding: 2%;
  }

  @media (max-width: 700px) {
    padding: 1%;
    width: 80%;
  }
`;

export const TituloAvaliacao = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  font-family: "Roboto Condensed";
  font-weight: 500;
  font-size: 1.6em;
  line-height: 20px;
  align-items: center;
  justify-content: center;
  color: #570b87;

  @media (max-width: 900px) {
    font-size: 1.4em;
  }

  @media (max-width: 500px) {
    font-size: 1.2em;
  }
`;

export const BoxCarrossel = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  align-items: center;
  justify-content: center;
`;

export const Esquerda = styled.div`
  width: 10%;
  height: 100%;
  display: grid;
  place-items: center;
  cursor: pointer;
  @media (max-width: 460px) {
    width: 20%;
  }
 
`;

export const UsuarioComentario = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 400px;
  align-items: center;
  justify-content: space-around;
  padding: 2%;
  background-color: #d580ff;
  border-radius: 2%;
`;

export const Direita = styled.div`
  width: 10%;
  height: 100%;
  display: grid;
  place-items: center;
  cursor: pointer;
  @media (max-width: 460px) {
    width: 20%;
  }
`;

export const Usuario = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40%;
  width: 80%;
  padding: 2%;

  @media (max-width: 700px) {
    flex-direction: column;
    height: 60%;
    width: 60%;
    justify-content: space-around;
  }
`;

export const FotoUsuario = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 120px;
  border-radius: 50%;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.2);
  background-color: grey;
  margin: 2%;

  @media (max-width: 500px) {
    width: 120px;
    height: 120px;
  }
`;

export const NomeUsuario = styled.div`
  width: 100%;
  height: 30px;
  font-family: "Roboto Condensed";
  font-weight: 500;
  font-size: 1.4em;
  line-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
`;

export const Comentario = styled.div`
  width: 80%;
  height: 60%;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 3%;
  font-size: 1.2em;
  overflow-y: auto;
  overflow-x: hidden;
  white-space: pre-wrap;
  word-wrap: break-word;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export const CaixaBotoes = styled.div`
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
