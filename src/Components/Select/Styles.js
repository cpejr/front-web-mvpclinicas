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
  font-size: 1.1rem;
`;

export const StyledSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  padding: 0.5rem;
  padding-left: 0;
  border: 0;
  width: 100%;
  border-bottom: ${(props) =>
    props?.error ? "1px solid #ff0000" : "1px solid #570b87"} !important;
  border-radius: 0;
  color: ${(props) =>
    props?.error ? "#ff0000" : props?.value === "" ? "#424242" : "black"};
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
