import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  gap: 2rem;
  height: 100vh;
`;

export const CaixaFoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  width: 10%;
  padding: 10%;
  background-color: #8b00ff;
  @media (max-width: 800px) {
    width: 20%;
    height: 50px;
  }
`;

export const CaixaTitulo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  padding-top: 2%;
  gap: 100px;
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
export const CaixaLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 150px;
  background-color: #8b00ff;
  margin: 2%;
  margin-left: 25%;
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