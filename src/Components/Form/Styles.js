import styled from "styled-components";
import { MultiSelect } from "primereact/multiselect";

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 500px !important;
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

export const Select = styled(MultiSelect)`
  font-size: 1.3rem;
  width: 70%;
  background-color: inherit;
  color: ${(props) => props?.selectColor};
  border-radius: 4px;
  height: 6.5vh;
  text-align: left;
  border: ${(props) =>
    props?.error ? "0.1rem red solid" : `0.1rem ${props?.selectColor} solid`};

  .p-multiselect-label {
    width: 215px;
    overflow-x: hidden;
  }
  .p-placeholder {
    color: ${(props) => props?.selectColor};
  }
  @media (max-width: 500px) {
    font-size: 1rem;
  }
  &:hover {
    border-color: #f19709;
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
