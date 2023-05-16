import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Cadastro from "../src/pages/Cadastro";
import Home from "../src/pages/Home";
import Local from "../src/pages/Local";
import Login from "../src/pages/Login";
import NovoComentario from "../src/pages/NovoComentario";
import NovoLocal from "../src/pages/NovoLocal";
import Perfil from "../src/pages/Perfil";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cadastro" element={<Cadastro />}></Route>
      <Route path="/local" element={<Local />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/novocomentario" element={<NovoComentario />}></Route>
      <Route path="/novolocal" element={<NovoLocal />}></Route>
      <Route path="/perfil" element={<Perfil />}></Route>
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
