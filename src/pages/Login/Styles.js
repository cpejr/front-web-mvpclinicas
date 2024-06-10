import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  gap: 2rem;
`;

export const CaixaLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background-color: #8b00ff;

  /* @media (max-width: 900px) {
    width: 20px;
    height: 130px;
  }*/

  @media (max-width: 500px) {
    width: 100px;
    height: 100px;
  }
`;

export const Titulo = styled.div`
  font-weight: 400;
  font-size: 3rem;
  display: flex;
  color: #570b87;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1200px) {
    font-size: 2.5rem;
  }

  @media (max-width: 1000px) {
    font-size: 2rem;
  }

  @media (max-width: 520px) {
    font-size: 1.7rem;
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
  padding: 2%;
  gap: 200px;
  width: 60%;
  max-width: 500px;
  @media (max-width: 1450px) {
    gap: 100px;
  }

  @media (max-width: 1000px) {
    gap: 80px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1rem;
  }

  > img {
    width: 8rem;
    height: auto;
    background-color: #570c87;
    border-radius: 100%;
    @media (max-width: 700px) {
      width: 6rem;
    }
  }
`;
