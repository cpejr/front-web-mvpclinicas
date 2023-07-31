import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";

import Cadastro from "../src/pages/Cadastro";
import Home from "../src/pages/Home";
import Local from "../src/pages/Local";
import Login from "../src/pages/Login";
import NovoComentario from "../src/pages/NovoComentario";
import NovoLocal from "../src/pages/NovoLocal";
import Perfil from "../src/pages/Perfil";
import { RotasPrivadas } from "./utils/RotasPrivadas";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Login />}/>
      <Route path="/cadastro" element={<Cadastro />}/>
      <Route element={<RotasPrivadas />}>
        <Route path="/home" element={<Home />}/>
        <Route path="/local" element={<Local />}/>
        <Route path="/novocomentario" element={<NovoComentario />}/>
        <Route path="/novolocal" element={<NovoLocal />}/>
        <Route path="/perfil" element={<Perfil />}/>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
