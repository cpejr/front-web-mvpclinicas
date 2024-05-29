import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const InputNovo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Conteudo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  height: 100%;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const CaixaFoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  width: 10%;
  padding: 10%;
  background-color: #8b00ff;
  margin-top: 2%;
  margin-bottom: -5%;

  @media (max-width: 800px) {
    width: 20%;
    height: 50px;
  }
`;
export const Form = styled.form``;

export const CaixaInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 65%;
  width: 70%;
  margin-bottom: 30px;
  background-color: white;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const InputDividido = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 70%;
  background-color: brown;
`;

export const TituloInput = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Roboto Condensed";
  width: 52%;
  color: #570b87;
  font-weight: 600;
  font-size: 1em;
  margin-top: 9%;

  @media (max-width: 600px) {
    font-size: 0.8em;
  }
`;
export const TituloIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1%;
  width: 96%;
`;

export const CaixaBotoes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 15%;
  width: 70%;
  padding: 2%;
  background-color: white;
  margin-top: 2%;
  margin-bottom: 5%;
`;

export const BotoesEdicao = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 3%;
  height: 50%;
  width: 70%;
  background-color: white;

  @media (max-width: 500px) {
    height: 30%;
    width: 50%;
  }
`;
export const CaixaTitulo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 70%;
  padding-top: 2%;
  gap: 100px;
  @media (max-width: 400px) {
    gap: 50px;
  }

  @media (max-width: 1450px) {
    gap: 100px;
  }

  @media (max-width: 1000px) {
    gap: 80px;
  }

  @media (max-width: 430px) {
    gap: 40px;
  }
`;
export const CaixaLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 150px;
  background-color: #8b00ff;
  margin: 2%;
  margin-left: 25%;

  @media (max-width: 900px) {
    width: 260px;
    height: 130px;
    margin-left: 5%;
  }

  @media (max-width: 650px) {
    width: 280px;
    height: 130px;
    margin-left: 5%;
  }

  @media (max-width: 500px) {
    width: 200px;
    height: 80px;
    margin-left: 5%;
  }
`;
export const Titulo = styled.div`
  width: 100%;
  height: 20px;
  font-family: "Courgette";
  font-weight: 400;
  font-size: 3.3rem;
  display: flex;
  color: #570b87;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1200px) {
    font-size: 3rem;
  }

  @media (max-width: 1000px) {
    font-size: 2.5rem;
  }

  @media (max-width: 520px) {
    font-size: 2rem;
  }

  @media (max-width: 299px) {
    font-size: 1.2rem;
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
