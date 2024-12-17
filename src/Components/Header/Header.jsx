import { UserOutlined } from "@ant-design/icons";
import { FaMapMarked } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import useAuthStore from "../../stores/auth";
import {
  BackButton,
  BackLink,
  ContainerEsquerda,
  ContainerHeader,
  HeaderArea,
} from "./Styles";
import { redirecionamento } from "../../utils/redirecionamento";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Logo from "../../assets/logo-no-background.svg";

function Header() {
  const navigate = useNavigate();
  const isAdmin = useAuthStore((state) => state?.usuario?.admin);

  const logout = useAuthStore((state) => state.logout);
  const token = useAuthStore((state) => state.token);
  async function handleLogout() {
    try {
      logout();
      toast.success("Usuario deslogado com sucesso");
      redirecionamento("/login");
      
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <ContainerHeader>
      <img src={Logo} alt="logo" onClick={() => navigate("/home")} />

      <ContainerEsquerda>
        <BackLink>
          {isAdmin && (
            <HeaderArea>
              <BackButton to="/novolocal">Local</BackButton>
              <FaMapMarked style={{ fontSize: "17px", color: "#fff" }} />
            </HeaderArea>
          )}
          {token &&(
          <div>
            <HeaderArea onClick={() => navigate("/perfil")}>
              <BackButton>Perfil</BackButton>
            <UserOutlined style={{ fontSize: "20px", color: "#fff" }} />
            </HeaderArea>
            <HeaderArea onClick={handleLogout}>
              <BackButton>Logout</BackButton>
              <IoMdLogOut style={{ fontSize: "20px", color: "#fff" }} />
          </HeaderArea></div>)}
          
        </BackLink>
      </ContainerEsquerda>
    </ContainerHeader>
  );
}

export default Header;
