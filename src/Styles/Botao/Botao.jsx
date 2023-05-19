import styled from "styled-components";

const Botao = styled.button`
  /* Posição */
  align-items: center;
  display: ${(props) => props.display ?? "inline-block"};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent ?? "center"};
  align-self:  ${(props) => props.alignSelf};

  /* Medidas */
  gap: ${(props) => props.gap};
  height: ${(props) => props.height ?? "40px"};
  max-height: ${(props) => props.maxHeight};
  max-width: ${(props) => props.maxWidth};
  min-height: ${(props) => props.minHeight};
  min-width: ${(props) => props.minWidth};
  padding-bottom: ${(props) => props.paddingBottom};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};
  padding-top: ${(props) => props.paddingTop};
  width: ${(props) => props.width ?? "30%"};

  @media (max-width: 700px) {
    width: ${(props) => props.widthMedia700};
  }

  @media (max-width: 500px) {
    width: ${(props) => props.widthMedia500 ?? "180px"};
  }

  @media (max-width: 500px) {
    height: ${(props) => props.HeightMedia500 ?? "35px"};
  }

  /* Cor e estilo do botão */
  background-color: ${(props) => props.backgroundColor ?? "#8B00FF"};
  border-color: ${(props) => props.borderColor ?? "#570B87"};
  border-radius: ${(props) => props.borderRadius ?? "18px"};
  border-style: solid;
  border-width: ${(props) => props.borderWidth ?? "1px"};
  box-shadow: ${(props) => props.boxShadow};
  cursor: pointer;

  /* Características do texto */
  font-size: ${(props) => props.fontSize ?? "18px"};
  font-family: ${(props) => props.fontFamily ?? "Roboto Condensed"};
  font-weight: ${(props) => props.fontWeight ?? "400px"};
  line-height: ${(props) => props.lineHeight ?? "21.6px"};
  text-align: center;
  text-decoration: ${(props) => props.textDecoration};
  color: ${(props) => props.color ?? "#FFFFFF"};

  /* Margem */
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-top: ${(props) => props.marginTop};
`;

export default Botao;
