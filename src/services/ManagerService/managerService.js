import * as requesterService from "../RequesterService/requesterSevice";


export const CadastroUsuario = async (usuario) => {
    const dados = await requesterService
    .criarUsuario(usuario)
    .then((res) => {
        console.log('Usuário cadastrado com sucesso.');
        return res;
       
    });
    return dados;
}