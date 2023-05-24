import * as requesterService from "../RequesterService/requesterSevice";


export const CadastroUsuario = async (usuario) => {
    console.log("teste1")
    const dados = await requesterService
    .criarUsuario(usuario)
    console.log("teste2")
    .then((res) => {
        console.log('Usuário cadastrado com sucesso.');
        return res;
       
    });
    console.log(usuario)
    return dados;
}