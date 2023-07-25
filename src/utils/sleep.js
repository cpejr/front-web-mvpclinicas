export const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export async function redirecionamento(pagina) {
  window.location.href = pagina;
}
