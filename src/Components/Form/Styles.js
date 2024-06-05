import styled from "styled-components";

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 600px !important;
  gap: 2rem !important;
  box-shadow: none;
  z-index: 0;
  @media (max-width: 700px) {
    align-items: center;
    flex-direction: column;
    width: 90%;
    gap: 0%;
  }

  @media (min-width: 1440px) {
    max-width: 144rem;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 0.9rem;
  margin: 0px;
  color: #ff0000;
  font-weight: 400;
  text-align: center;
  margin-top: 10px;
`;
export const InputKeep = styled.div`
  width: 100%;
`;
export const Selects = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  gap: 10rem;
  justify-content: space-around;

  @media (max-width: 850px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;
