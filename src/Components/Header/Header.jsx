import { UserOutlined } from "@ant-design/icons";
import { FaMapMarked } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import useAuthStore from "../../stores/auth";
import {
  BackButton,
  BackLink,
  ContainerDireita,
  ContainerEsquerda,
  ContainerDiv,
  ContainerHeader,
  LogoText,
  HeaderArea,
} from "./Styles";
import { redirecionamento } from "../../utils/redirecionamento";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Header() {
  const navigate = useNavigate();
  const isAdmin = useAuthStore((state) => state?.usuario?.admin);

  const logout = useAuthStore((state) => state.logout);

  async function handleLogout() {
    try {
      logout();
      toast.success("Usuario deslogado com sucesso");
      setTimeout(() => {
        redirecionamento("/login");
      }, 3000);
    } catch (error) {
      alert(error);
    }
  }
  return (
    <ContainerHeader>
      <ContainerDiv onClick={() => navigate("/home")}>
        <ContainerDireita>
          <LogoText>Logo</LogoText>
        </ContainerDireita>
      </ContainerDiv>
      <ContainerEsquerda>
        <BackLink>
          {isAdmin && (
            <HeaderArea>
              <BackButton to="/novolocal">Local</BackButton>
              <FaMapMarked style={{ fontSize: "17px", color: "#fff" }} />
            </HeaderArea>
          )}
          <HeaderArea>
            <BackButton to="/perfil">Perfil</BackButton>
            <UserOutlined style={{ fontSize: "20px", color: "#fff" }} />
          </HeaderArea>
          <HeaderArea>
            <BackButton onClick={handleLogout}>Logout</BackButton>
            <IoMdLogOut
              onClick={handleLogout}
              style={{ fontSize: "17px", color: "#fff" }}
            />
          </HeaderArea>
        </BackLink>
      </ContainerEsquerda>
    </ContainerHeader>
  );
}

export default Header;
