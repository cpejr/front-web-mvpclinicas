import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  Navigate
} from "react-router-dom";

import Cadastro from "../src/pages/Cadastro";
import Home from "../src/pages/Home";
import Local from "../src/pages/Local";
import Login from "../src/pages/Login";
import NovoComentario from "../src/pages/NovoComentario";
import NovoLocal from "../src/pages/NovoLocal";
import Perfil from "../src/pages/Perfil";
import Edit from "../src/pages/Edit";
import EditSenha from "../src/pages/EditSenha";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}/>
      <Route path="/cadastro" element={<Cadastro />}/>
      <Route path="/local" element={<Local />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/novocomentario" element={<NovoComentario />}/>
      <Route path="/novolocal" element={<NovoLocal />}/>
      <Route path="/perfil" element={<Perfil />}/>
      <Route path="/edit" element={<Edit />}/>
      <Route path="/editsenha" element={<EditSenha />}/>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}