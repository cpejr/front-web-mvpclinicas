import styled from "styled-components";
import { Cores, Fontes } from "../../variaveis";

export const ContainerModalExcluir = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 5% 2% 2% 1%;

  @media (max-width: 850px) and (min-width: 560px) {
    padding: 8% 0.5% 0.5% 0.5%;
  }

  @media (max-width: 560px) {
    padding: 8% 0.5% 0% 0.5%;
  }
`;


export const Titulo = styled.h3`
  font-family: ${Fontes.barlow};
  font-weight: 500;
  font-size: 1.2em;
  color: ${Cores.azulEscuro};
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 850px) and (min-width: 560px) {
    font-size: 1.1em;
  }

  @media (max-width: 560px) {
    font-size: 1em;
  }
`;

export const CaixaBotaoUpload = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
`;



export const ConteudoModalExcluir = styled.h3`
  font-family: ${Fontes.barlow};
  font-weight: 500;
  font-size: 1.2em;
  color: ${Cores.azulEscuro};
  text-align: center;

  @media (max-width: 850px) and (min-width: 560px) {
    font-size: 1.1em;
  }

  @media (max-width: 560px) {
    font-size: 1em;
  }
`;

export const ContainerFooterModalExcluir = styled.h3`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15%;
  width:100%;
  margin-top: 5%;
`

export const CaixaLoader = styled.div`
  padding-bottom: 4%;
  display: flex;
  align-items: center;
`;