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

export const CaixaLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 150px;
  background-color: #8b00ff;
  margin: 2%;
  margin-left: 15%;

  @media (max-width: 900px) {
    width: 260px;
    height: 130px;
    margin-left: 5%;
  }

  @media (max-width: 650px) {
    width: 280px;
    height: 130px;
    margin-left: 5%;
  }

  @media (max-width: 500px) {
    width: 200px;
    height: 80px;
    margin-left: 5%;
  }
`;

export const Titulo = styled.div`
  width: 100%;
  height: 20px;
  font-family: "Courgette";
  font-weight: 400;
  font-size: 3.3rem;
  display: flex;
  color: #570b87;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1200px) {
    font-size: 3rem;
  }

  @media (max-width: 1000px) {
    font-size: 2.5rem;
  }

  @media (max-width: 520px) {
    font-size: 2rem;
  }

  @media (max-width: 299px) {
    font-size: 1.2rem;
  }
`;

export const CaixaTitulo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 70%;
  padding: 2%;
  gap: 200px;
  @media (max-width: 400px) {
    gap: 50px;
  }

  @media (max-width: 1450px) {
    gap: 100px;
  }

  @media (max-width: 1000px) {
    gap: 80px;
  }

  @media (max-width: 430px) {
    gap: 40px;
  }
`;
