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

export const StyledInput = styled.input`
  padding: 0.5rem;
  padding-left: 0;
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
    color: ${(props) => (props?.error ? "#FF4040" : "#424242")};
  }
`;

export const Map = styled.iframe`
  width: 600px;
  height: 450px;
  margin: 1rem auto 0 auto;

  @media (max-width: 1100px) {
    width: 70%;
    height: 300px;
  }
  @media (max-width: 700px) {
    width: 80%;
    height: auto;
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
