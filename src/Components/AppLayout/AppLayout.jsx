import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Container } from "./Styles";

export default function AppLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}
