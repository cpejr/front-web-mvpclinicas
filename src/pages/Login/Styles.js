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
