import { Link } from "react-router-dom";
import { ContainerHeader, Texto2, CaixaLink, Texto, CaixaLink2} from "./Styles";
import { UserOutlined } from '@ant-design/icons';
function Header() {

  return (
    <ContainerHeader>
       <CaixaLink2> <Texto2>Logo</Texto2></CaixaLink2>
       <CaixaLink><Link to= "/perfil"> <Texto>Acesse seu perfil </Texto></Link>
        <UserOutlined
         style={{fontSize: "25px",
          position: "absolute", 
          marginLeft: "12% ",
          paddingBottom: "1.2%",
           paddingTop: "0.9%", 
           }} />
           </CaixaLink>
    </ContainerHeader>
  );
}
export default Header;