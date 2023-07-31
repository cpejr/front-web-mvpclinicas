import { toast } from "react-toastify";

function traducaoErro(erroCodigo) {
	const erroPadrao = "Erro inesperado";
	const erros = {
		400: "Erro na requisição",
		401: "Não autorizado",
		403: "Credenciais inválidas",
		404: "Recurso não encontrado",
		500: erroPadrao,
	};

	const mensagemErro = erros[erroCodigo] || erroPadrao;
	return mensagemErro;
}

export default function requisicaoErro(error, retorno = () => {}) {
	const resposta = error.response;
	const statusCodigo = resposta.status;

	if (statusCodigo > 199 && statusCodigo < 399) {
		// not an error
		return;
	}

	retorno(error);

	const mensagemErro = traducaoErro(statusCodigo);
	return toast.error(mensagemErro);
}
