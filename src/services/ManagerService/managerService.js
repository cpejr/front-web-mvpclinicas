import * as requesterService from "../RequesterService/requesterSevice";

export const CadastroUsuario = async (usuario) => {
    const dados = await requesterService
    .criarUsuario(usuario)
    .then((res) => {
        return res;
    });
    return dados;
}

export const GetDadosPessoais = async () => {
    let dadosUsuario = {};
    await requesterService
      .requisicaoDadosPessoais()
      .then((res) => {
        // Filtrar apenas os e-mails dos dados retornados
        const emails = res.data.map((usuario) => usuario.email);
        dadosUsuario = emails;
      })
      .catch((error) => {
        alert(error.message);
      });
    return dadosUsuario;
  };