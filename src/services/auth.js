export const CHAVE_USUARIO_ID = "@clinicas-UsuarioId";
export const CHAVE_EMAIL = "@clinicas-Email";
export const CHAVE_TOKEN = "@clinicas-Token";
export const CHAVE_TIPO = "@clinicas-Tipo";
export const USUARIO = "@clinicas-Usuario";

export const usuarioAutenticado = () =>
  sessionStorage.getItem(CHAVE_TOKEN) !== null;
export const recebeToken = () => sessionStorage.getItem(CHAVE_TOKEN);
export const recebeEmail = () => sessionStorage.getItem(CHAVE_EMAIL);
export const recebeTipo = () => sessionStorage.getItem(CHAVE_TIPO);
export const recebeUsuario = () => sessionStorage.getItem(USUARIO);

export const login = (token, email, tipo, usuario) => {
  sessionStorage.setItem(CHAVE_TOKEN, token);
  sessionStorage.setItem(CHAVE_EMAIL, email);
  sessionStorage.setItem(CHAVE_TIPO, tipo);
  sessionStorage.setItem(USUARIO, usuario);
};
export const logout = () => {
  sessionStorage.removeItem(CHAVE_TOKEN);
  sessionStorage.removeItem(CHAVE_EMAIL);
  sessionStorage.removeItem(CHAVE_TIPO);
  sessionStorage.removeItem(USUARIO);
};
