export const telefone = (valor) => {
  const valorLimpo = (valor || "").replace(/\D/g, "");
  const parteCodigoArea = valorLimpo.slice(0, 2);
  const partePrimeirosDigitos = valorLimpo.slice(2, 7);
  const parteUltimosDigitos = valorLimpo.slice(7, 11);

  return `${parteCodigoArea ? `(${parteCodigoArea}) ` : ""}${partePrimeirosDigitos ? `${partePrimeirosDigitos}-` : ""}${parteUltimosDigitos || ""}`;
};

export const data = (value) => {
  if (value) {
    const data = new Date(value);
    const dia = String(data.getUTCDate()).padStart(2, '0');
    const mes = String(data.getUTCMonth() + 1).padStart(2, '0');
    const ano = data.getUTCFullYear();
    return `${dia}/${mes}/${ano}`;
  }
  return value;
};

export const senha = (value) => {
  return value ? value.replace(/./g, "*") : value;
};


