import styled from "styled-components";

export const AvaliacaoEstrelas = styled.div`
  align-items: baseline;
  color: #570b87;
  font-size: 15px;
  width: 100%;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 100%;
`;

export const EstrelasLocal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 20%;
  margin-bottom: 1%;
  width: 100%;
  padding: 0%;
  color: #570b87;
  font-size: 32px;
  @media (max-width: 900px) {
    font-size: 20px;
  }
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

export const FotoNome = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70%;
  width: 50%;
  padding: 1%;

  @media (max-width: 820px) {
    width: 80%;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }

  @media (max-width: 400px) {
    width: 80%;
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
  width: 40%;
  height: 40%;
  border-radius: 50%;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.2);
  background-color: grey;

  img {
    width: 100%;
    height: 100%;
    border-radius: 2%;
    background-size: cover;
    background-position: center center;
  }
  @media (max-width: 700px) {
    width: 70%;
    height: 70%;
    margin-bottom: 10%;
  }

  @media (max-width: 400px) {
    width: 100;
    height: 100%;
    margin-bottom: 10%;
  }
`;

export const CaixaInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  align-items: center;
  height: 70%;
  width: 50%;
  padding: 1%;

  @media (max-width: 820px) {
    width: 80%;
  }

  @media (max-width: 700px) {
    gap: 5px;
  }

  @media (max-width: 400px) {
    width: 80%;
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
  width: 100%;

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
  color: #570b87;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  justify-content: ${(props) => props.justifyContent};
  color: ${(props) => props.color};

  @media (max-width: 900px) {
    font-size: 1em;
  }
`;

export const TituloIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ConteudoAvaliacao = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  align-items: center;
  height: 70%;
  width: 60%;
  padding: 1%;
  margin-top: 2%;

  @media (max-width: 820px) {
    width: 90%;
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
  height: 60%;
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
  width: 80%;
  height: auto;
  align-items: center;
  justify-content: space-around;
  padding: 2%;
  background-color: #d580ff;
  border-radius: 1rem;
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
  width: 120px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.2);
  background-color: grey;
  margin: 2%;

  @media (max-width: 700px) {
    height: 80px;
    width: 80px;
  }
`;

export const NomeUsuario = styled.div`
  width: 100%;
  font-family: "Roboto Condensed";
  font-weight: 500;
  font-size: 1.4em;
  line-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;

  @media (max-width: 500px) {
    font-size: 1.2em;
  }
`;

export const Comentario = styled.div`
  width: 80%;
  height: 60%;
  padding: 3%;

  font-size: 1.2em;
  overflow-y: auto;
  overflow-x: hidden;
  white-space: pre-wrap;
  word-wrap: normal;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.6rem;

  font-family: "Barlow";
  ::-webkit-scrollbar {
    width: 0px;
  }

  @media (max-width: 500px) {
    font-size: 1em;
  }
`;

export const CaixaBotoes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: 20%;
  width: 80%;
  padding: 2%;

  @media (max-width: 900px) {
    gap: 20px;
    padding: 5%;
  }
`;

export const ItemComentario = styled.div`
  font-size: 1rem;
  gap: 1rem;
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const Pergunta = styled.div`
  font-size: 1.1rem;
  font-style: italic;
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

export const TextoBotao = styled.div`
  font-size: 1rem;
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
`;
export const CaixaLoader = styled.div`
  padding-bottom: 4%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
