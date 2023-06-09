import { Link } from "react-router-dom";
import { ContainerHeader, Texto2, CaixaLink, Texto, CaixaLink2} from "./Styles";
import { HomeOutlined } from '@ant-design/icons';
function Header2() {

  return (
    <ContainerHeader>
       <CaixaLink2> <Texto2>Logo</Texto2></CaixaLink2>
       <CaixaLink><Link to= "/"> <Texto>Voltar para Home</Texto></Link> 
       <HomeOutlined  
       style={{
       fontSize: "25px", 
       position: "absolute",
       marginLeft: "12% ",
       paddingBottom: "1.2%",
       paddingTop: "0.9%",
      }} 
       />
       </CaixaLink>
    </ContainerHeader>
  );
}
export default Header2;