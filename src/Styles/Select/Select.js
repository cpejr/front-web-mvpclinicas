import styled from "styled-components";
import { Cores } from "../../utils/variaveis";
const Select = styled.select`
	background-color: ${(props) => props.backgroundColor};
	text-align: left;
	border-color: ${(props) => {
		let cor;
		if (!props.borderColor) {
			if (props.erro || props.camposVazios) {
				cor = Cores.vermelho;
			} else {
				cor = Cores.azul;
			}
		} else {
			cor = props.borderColor;
		}
		return cor;
	}};
	color: ${(props) => props.color};
	border-radius: ${(props) => props.borderRadius ?? "3px"};
	font-size: ${(props) => props.fontSize ?? "1em"};
	margin-top: ${(props) => props.marginTop ?? "2%"};
	margin-bottom: ${(props) => props.marginBottom ?? "0px"};
	margin-left: ${(props) => props.marginLeft ?? "0px"};
	margin-right: ${(props) => props.marginRight ?? "0px"};
	border-style: solid;
	border-width: ${(props) => props.borderWidth};
	box-shadow: ${(props) => props.boxShadow};
	height: ${(props) => props.height ?? "50px"};
	padding-left: ${(props) => props.paddingLeft ?? "0.5%"};
	padding-right: ${(props) => props.paddingRight ?? "0.5%"};
	padding-top: ${(props) => props.paddingTop ?? "0px"};
	padding-bottom: ${(props) => props.paddingTop ?? "0px"};
	width: ${(props) => props.width ?? "65%"};
	@media (max-width: 700px) {
		font-size: ${(props) => props.fontSize750 ?? "0.9em"};
	}
	@media (max-width: 320px) {
		margin-bottom: ${(props) => props.marginBottomMedia320};
	}

	option {
		border-color: ${(props) => props.borderColor};
		color: ${(props) => props.color};
		border-radius: 3px;
		border-style: solid;
		border-width: 0.1em;
		height: 50px;
		padding-left: 2%;
	}

	option[value=""][disabled] {
		display: none;
	}
`;

export default Select;