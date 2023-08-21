import { Link } from "react-router-dom";
import { ContainerHeader, Texto2, CaixaLink, Texto, CaixaLink2, Icone} from "./Styles";
import { HomeOutlined } from '@ant-design/icons';
function HeaderHome() {

  return (
    <ContainerHeader>
       <CaixaLink2> <Texto2>Logo</Texto2></CaixaLink2>
       <CaixaLink><Link to= "/"> <Texto>Voltar para Home</Texto></Link> 
       <Icone>
       <HomeOutlined  
       style={{
       fontSize: "25px", 
       position: "absolute",
       paddingBottom: "1.2%",
       paddingTop: "0.9%",
      }} 
       /></Icone>
       </CaixaLink>
    </ContainerHeader>
  );
}
export default HeaderHome;