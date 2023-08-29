import styled from "styled-components";
import { Cores } from "../../variaveis";
import { UserOutlined } from '@ant-design/icons';

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #8B00FF;
  height: 14vh;
  width: 100%;
  margin-top: -1%;
  margin-bottom: 1%;
  color:${Cores.branco};

`;

export const IconeUsuario = styled(UserOutlined)`
  font-size: 1.4em;

  @media (max-width : 744px){
    font-size: 1em;
    margin-right: 0.5em;
  }

  @media (max-width : 575px){
    font-size: 1em;
    margin-left: 5%;
  }

  @media (max-width: 460px){
    font-size: 1.4em;

  }

`;

export const Texto = styled.p`
 color: white;
 font-size: 1.4em;
 white-space: nowrap;
 margin-left: 15%;

 @media (max-width: 1075px) {
  font-size: 1.2em;
  margin-left: 5%;
}
 @media (max-width: 744px) {
  font-size: 1em;
}
 @media (max-width: 575px) {
  font-size: 0.8em;
}

  @media (max-width: 460px){
    display: none;
  }
`;
export const Texto2 = styled.p`
 color: white;
 font-size: 1em;
 white-space: nowrap;

 @media (max-width: 1075px) {
  font-size: 1.2em;
  margin-left: 5%;
}
 @media (max-width: 744px) {
  font-size: 0.9em;
}
 @media (max-width: 575px) {
  font-size: 0.7em;
}
`;
export const CaixaLink = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 18px;
  justify-content: space-around;
  align-items: center;
  background-color:#570B87;
  width: 22vw;
  height: 10vh;
  padding-left: 1em;
  margin-left: 45vw;
  margin-top: 0.3em;

  @media (max-width: 460px){
    justify-content: center;
    width: 10vw;
    margin-left: 52vw;
    border-radius: 35px;
  }

`;
export const CaixaLink2 = styled.div`
  background-color: red;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 15vw;
  width: 10%;
  height: 10vh;
  background-color:#570B87;

  @media (max-width: 744px){
    width: 15%;
    margin-left: 10vw;

  };

`;

export const Icone = styled.div`
margin-left: 10%;
padding-right: 10%;

@media (max-width: 460px){
  margin-left: 0%;
  padding-right: 15%;

}

`;



/*export const Logo = styled.div`
  display: flex;
  width: 35%;

  .logo1 {
    width: 15%;
  }
  .logo2 {
    width: 80%;
  }

  @media (max-width: 1080px) {
    display: flex;
    width: 15%;
    .logo1 {
      width: 55%;
    }
    .logo2 {
      display: none;
    }
  }
  @media (max-width: 780px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 50%;

    .logo1 {
      width: 20%;
    }
    .logo2 {
      display: flex;
      width: 100%;
    }
  }
  @media (max-width: 600px) {
    width: 80%;

    .logo1 {
      width: 15%;
    }
    .logo2 {
      display: flex;
      width: 75%;
    }
  }
  @media (max-width: 360px) {
    width: 80%;

    .logo1 {
      width: 30%;
    }
    .logo2 {
      display: none;
      width: 75%;
    }
  }
`;*/
/*export const MenuHeader = styled.div`
  display: none;

  @media (max-width: 780px) {
    display: flex;

  }
  @media (max-width: 600px) {
    width:20% ;
    display:flex;
    justify-content:center ;
  }
`;*/
/*export const CaixaFotoPerfil = styled.div`
display: flex;
justify-content: left;

align-items: center;
justify-content: center;
width: 25px;
height: 25px;
border-radius: 100%;
background-color: #570B87;

@media (max-width: 900px) {
  width: 200px;
  height: 200px;
}

@media (max-width: 500px) {
  width: 150px;
  height: 150px;
}
`;*/