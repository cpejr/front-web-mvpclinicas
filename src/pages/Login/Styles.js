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

export const BotaoCadastro = styled.button`
  /* Posição */
  align-items: center;
  display: inline-block;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: center;
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
  width: ${(props) => props.width ?? "242px"};
  /* Cor e estilo do botão */
  background-color: ${(props) => props.backgroundColor ?? "white"};
  border-color: ${(props) => props.borderColor ?? "white"};
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
  color: ${(props) => props.color ?? "#8B00FF"};
  /* Margem */
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-top: ${(props) => props.marginTop};

  @media (max-width: 500px) {
    width: ${(props) => props.widthMedia500 ?? "180px"};
  }

  @media (max-width: 500px) {
    height: ${(props) => props.HeightMedia500 ?? "35px"};
  }
  @media (max-width: 280px) {
    height: ${(props) => props.heightMedia280 ?? "25px"};
  }
  @media (max-width: 280px) {
    width: ${(props) => props.widthMedia280 ?? "100px"};
  }
`;
export const Rotulo = styled.div`
  width: 100%;
  font-family: "Barlow", sans-serif;
  font-weight: 400;
  margin-left: 50%;
  margin-top: 2%;
  font-size: 1em;
  color: #e00000;
  @media (max-width: 1050px) {
    font-size: 0.9em;
  }
  @media (max-width: 900px) {
    font-size: 0.8em;
  }
  @media (max-width: 650px) {
    font-size: 0.7em;
  }
  @media (max-width: 550px) {
    font-size: 0.6em;
  }
`;
export const RotuloSenha = styled.div`
  width: 100%;
  font-family: "Barlow", sans-serif;
  font-weight: 400;
  margin-left: 51%;
  font-size: 1em;
  color: #e00000;
  @media (max-width: 1050px) {
    font-size: 0.9em;
  }
  @media (max-width: 900px) {
    font-size: 0.8em;
  }
  @media (max-width: 650px) {
    font-size: 0.7em;
  }
  @media (max-width: 550px) {
    font-size: 0.6em;
  }
`;
