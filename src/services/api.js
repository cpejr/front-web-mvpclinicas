import axios from "axios";

export const verificarPermissaoAdmin = async (id_usuario) => {
    try {
      const response = await axios.get(`/usuarios/${id_usuario}/admin`);
      return response.data.isAdmin;
    } catch (error) {
      console.error("Erro ao verificar permissão do usuário:", error);
      throw error;
    }
};

const api = axios.create({
    baseURL: "http://localhost:8000"
});

export default api;