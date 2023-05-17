import styled from 'styled-components';

const Input = styled.input`
  /* Posição */
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: center;
  justify-content: center;
  /* Medidas */
  border-radius: 3px;
  margin-top: ${(props) => props.marginTop ?? '2%'};
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
  width: ${(props) => props.width};
  /* Cor e estilo */
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border-color: ${(props) => props.borderColor};
  border-style: solid;
  border-width: ${(props) => props.borderWidth};
  border-radius: ${(props) => props.borderRadius};
  box-shadow: ${(props) => props.boxShadow};
  /* Características de texto */
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.textAlign};
  font-weight: ${(props) => props.fontWeight};
  /* Margem */
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-top: ${(props) => props.marginTop ?? '2%'};
`;

export default Input;
