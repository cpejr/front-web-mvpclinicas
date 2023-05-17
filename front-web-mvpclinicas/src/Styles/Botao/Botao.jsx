import styled from "styled-components";

const Botao = styled.button`
  /*Posição */
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: center;
  justify-content: center;
  /*Medidas*/
  border-radius: 3px;
  margin-top: ${(props) => props.marginTop?? "2%"};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  padding-top: ${(props) => props.paddingTop};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};
  padding-bottom: ${(props) => props.paddingBottom};
  height: ${(props) => props.height};
  gap: ${(props) => props.gap};
  width: ${(props) => props.width};
  /*cor e estilo do botão*/
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border-color: ${(props) => props.borderColor};
  border-style: solid;
  border-width: ${(props) => props.borderWidth};
  border-radius: ${(props) => props.borderRadius};
  box-shadow: ${(props) => props.boxShadow};
  cursor: pointer;
  /*características do texto*/
  font-size: ${(props) => props.fontSize};
  text-decoration: ${(props) => props.textDecoration};
  text-align: center;
  font-weight: ${(props) => props.fontWeight};

  @media (max-width: 560px) {
    width: 100%;
    height: ${(props) => props.heightMedia560};
  }

  @media (max-width: 560px) {
    width: ${(props) => props.widthMedia560};
  }

  @media (max-width: 920px) and (min-width: 560px){
    width: ${(props) => props.widthMedia ?? props.width};
  }

  @media (max-width: 600px) {
    width: ${(props) => props.widthMedia600};
  }

  @media (max-width: 560px){ 
    width: ${(props) => props.widthMedia560};
  }

  @media (max-width: 920px){ 
    height: ${(props) => props.heightMedia920};
  }

  @media (max-width: 670px) {
    width: ${(props) => props.widthMedia670};
  }

  @media (max-width: 280px){ 
    width: ${(props) => props.widthMedia280};
  }

  @media (max-width: 640px){ 
    height: ${(props) => props.heightMedia640};
  }

  @media (max-width: 800px) {
    margin-top: ${(props) =>
      props.marginTopMedia ?? ((props) => props.marginTop ?? "2%")};
  }

  @media (max-width: 400px)
  {
    margin-top: ${(props) => props.marginTopMedia400 ?? ((props) => props.marginTop?? "2%")};
  }

  @media (max-width: 1080px) {
    font-size: ${(props) => props.fontSizeMedia1080};
  }

  @media (max-width: 950px) and (min-width: 480px) {
    font-size: ${(props) => props.fontSizeMedia950};
  }

  @media (max-width: 350px){
    font-size: ${(props) => props.fontSizeMedia350};
  }

  @media (max-width: 480px) {
    font-size: ${(props) => props.fontSizeMedia480};
  }
  @media (max-width: 400px) {
    font-size: ${(props) => props.fontSizeMedia400};
  }
  @media (max-width: 376px) {
    width: ${(props) => props.widthres};
  }
  @media (max-width: 571px) {
    width: ${(props) => props.widthres};
  }
   @media (min-width: 361px) {
    font-size: ${(props) => props.fontSizeMedia361};
  }
`;
export default Botao;
