import styled from "styled-components";

const Input = styled.input`
  /* Posição */
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: center;
  justify-content: ${(props) => props.justifyContent ?? "center"};
  align-self: ${(props) => props.alignSelf ?? "center"};

  /* Medidas */
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};
  padding-top: ${(props) => props.paddingTop};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};
  padding-bottom: ${(props) => props.paddingBottom};
  padding: ${(props) => props.padding};
  height: ${(props) => props.height ?? "20px"};
  width: ${(props) => props.width ?? "100%"};

  @media (max-width: 700px) {
    height: ${(props) => props.heightMedia700};
  }

  /* Cor e estilo */
  background-color: ${(props) => props.backgroundColor};
  border-color: ${(props) => props.borderColor ?? "#FFFFFF"};
  border-style: solid;
  border-width: ${(props) => props.borderWidth};
  border-radius: ${(props) => props.borderRadius};
  box-shadow: ${(props) => props.boxShadow};
  border-bottom: ${(props) => {
    let cor;
    if (!props.color) {
      if (props.erro) {
        cor = " 1px solid #ff0000c5";
      } else {
        cor = "1px solid #570B87";
      }
    } else {
      cor = props.color;
    }
    return cor;
  }};
  color: ${(props) => props.color};

  &:focus {
    outline: none;
  }

  /* Características de texto */
  font-size: ${(props) => props.fontSize ?? "1em"};
  font-family: ${(props) => props.fontFamily ?? "Roboto Condensed"};
  text-align: ${(props) => props.textAlign};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight ?? "50px"};

  ::placeholder {
    color: ${(props) => {
      let cor;
      if (!props.color) {
        if (props.erro) {
          cor = " #ff0000c5";
        } else {
          cor = " #570B87";
        }
      } else {
        cor = props.color;
      }
      return cor;
    }};
  }

  /* Margem */
  margin-bottom: ${(props) => props.marginBottom ?? "2%"};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-top: ${(props) => props.marginTop};

  @media (max-width: 700px) {
    margin-bottom: ${(props) => props.marginBottomMedia700};
  }
`;

export default Input;
