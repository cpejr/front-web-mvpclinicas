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
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const isAdmin = useAuthStore((state) => state?.usuario?.admin);
  console.log(isAdmin);

  return (
    <ContainerHeader>
      <ContainerDiv onClick={() => navigate("/home")}>
        <ContainerDireita>
          <LogoText>Logo</LogoText>
        </ContainerDireita>
      </ContainerDiv>
      <ContainerEsquerda>
        <BackLink>
          {!isAdmin && (
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
            <BackButton to="/login">Logout</BackButton>
            <IoMdLogOut style={{ fontSize: "17px", color: "#fff" }} />
          </HeaderArea>
        </BackLink>
      </ContainerEsquerda>
    </ContainerHeader>
  );
}

export default Header;
