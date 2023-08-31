import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  Navigate,
  Outlet,
} from "react-router-dom";
import React from "react";

import Cadastro from "../src/pages/Cadastro";
import Home from "../src/pages/Home";
import Local from "../src/pages/Local";
import Login from "../src/pages/Login";
import NovoComentario from "../src/pages/NovoComentario";
import NovoLocal from "../src/pages/NovoLocal";
import Perfil from "../src/pages/Perfil";
import useAuthStore from "./stores/auth";

function RotasPrivadas() {
  const token = useAuthStore((state) => state.token)

  if (token) return (<Outlet/>)

  return <Navigate to="/" replace/>
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Login />}/>
      <Route path="/cadastro" element={<Cadastro />}/>
      <Route element={<RotasPrivadas />}>
        <Route path="/home" element={<Home />}/>
        <Route path="/local" element={<Local />}/>
        <Route path="/novocomentario/:id_local" element={<NovoComentario />}/>
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
