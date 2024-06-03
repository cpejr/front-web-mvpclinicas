import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: 500;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.label`
  color: #570b87;
  font-weight: 550;
  font-size: 1rem;
  ::first-letter {
    text-transform: capitalize;
  }
`;

export const StyledInput = styled.input`
  padding: 0.5rem;
  border: 0;
  border-bottom: ${(props) =>
    props?.error ? "1px solid #ff0000" : "1px solid #570b87"} !important;

  color: ${(props) => (props?.error ? "#ff0000" : "black")};

  font-size: 1em;
  font-family: "Roboto Condensed";

  :focus,
  :active,
  :enabled {
    outline: none;
  }
  ::placeholder {
    color: ${(props) => (props?.error ? "#FF4040" : "#242424")};
  }
`;

// export const StyledInput = styled.input`
//   width: ${(props) => props?.width};
//   height: 3rem;
//   padding: 0.8rem 1.6rem;
//   border-radius: 0.4rem;
//   color: ${(props) => props?.color};
//   cursor: ${(props) => props?.cursor};
//   font-size: 20px;
//   background-color: inherit;
//   padding-right: 25px;
//   background: url(${(props) => props?.icon}) no-repeat;
//   background-size: 40px;
//   background-position: 95%;
//   outline: none;
//   border: ${(props) =>
//     props?.error ? "0.1rem red solid" : `0.1rem ${props?.color} solid`};
//   &::placeholder {
//     color: ${(props) => props?.color};
//   }
//   @media (max-width: 700px) {
//     font-size: 16px;
//   }
//   input:-webkit-autofill,
//   input:-webkit-autofill:hover,
//   input:-webkit-autofill:focus,
//   textarea:-webkit-autofill,
//   textarea:-webkit-autofill:hover,
//   textarea:-webkit-autofill:focus,
//   select:-webkit-autofill,
//   select:-webkit-autofill:hover,
//   select:-webkit-autofill:focus {
//     border: 1px solid green;
//     -webkit-text-fill-color: green;
//     -webkit-box-shadow: 0 0 0px 1000px #000 inset;
//     transition: background-color 5000s ease-in-out 0s;
//   }
//   &:hover {
//     border-color: #f19709;
//   }
// `;
