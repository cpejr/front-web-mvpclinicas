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

// export const Select = styled(MultiSelect)`
//   font-size: 1.3rem;
//   width: 70%;
//   background-color: inherit;
//   color: ${(props) => props?.selectColor};
//   border-radius: 4px;
//   height: 6.5vh;
//   text-align: left;
//   border: ${(props) =>
//     props?.error ? "0.1rem red solid" : `0.1rem ${props?.selectColor} solid`};

//   .p-multiselect-label {
//     width: 215px;
//     overflow-x: hidden;
//   }
//   .p-placeholder {
//     color: ${(props) => props?.selectColor};
//   }
//   @media (max-width: 500px) {
//     font-size: 1rem;
//   }
//   &:hover {
//     border-color: #f19709;
//   }
// `;

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;

  padding: 0.5rem;
  padding-left: 0;
  border: 0;
  width: 100%;
  border-bottom: ${(props) =>
    props?.error ? "1px solid #ff0000" : "1px solid #570b87"} !important;
  border-radius: 0;
  color: ${(props) => (props?.error ? "#ff0000" : "black")};
  background-color: white !important;
  font-size: 1em;
  font-family: "Roboto Condensed";

  :focus,
  :active,
  :enabled {
    outline: none;
  }
  ::placeholder {
    color: ${(props) => (props?.error ? "#FF4040" : "#424242")};
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
