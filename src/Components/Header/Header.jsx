import { Link } from "react-router-dom";
import { ContainerHeader, Texto2, CaixaLink, Texto, CaixaLink2, Icone, IconeUsuario} from "./Styles";
function Header() {

  return (
    <ContainerHeader>
       <CaixaLink2> <Texto2>Logo</Texto2></CaixaLink2>
       <CaixaLink><Link to= "/perfil"> <Texto>Acesse seu perfil </Texto></Link>
       <Icone>
        <IconeUsuario/>
           </Icone>
           </CaixaLink>
    </ContainerHeader>
  );
}
export default Header;