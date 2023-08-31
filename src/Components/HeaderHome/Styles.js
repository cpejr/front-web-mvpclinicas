import styled from "styled-components";
import { Cores } from "../../variaveis";
import { Link } from 'react-router-dom';


export const ContainerHeader = styled.header`
display: flex;
flex-direction: row;
align-items: center;
background-color: #8B00FF;
height: 100px;
color:${Cores.branco};
@media (max-width: 912px) {
  padding-right: 50%;
  padding-left: 50%;
}
@media (max-width: 820px) {
  padding-right: 50%;
  padding-left: 50%;
}
@media (max-width: 768px) {
  padding-right: 60%;
  padding-left: 60%;
}
@media (max-width: 540px) {
  padding-right: 60%;
  padding-left: 60%;
}
@media (max-width: 425px) {
  padding-right: 40%;
  padding-left: 40%;
  margin-top: -2%;
}
@media (max-width: 375px) {
  padding-right: 35%;
  padding-left: 35%;
  margin-top: -2%;
  margin-left: -1%;

}
`;
export const Texto = styled.p`
 color: white;
 font-size: 1em;
 white-space: nowrap;
 margin-right: 40%;
 width: 100%;
 @media (max-width: 768px) {
}
 @media (max-width: 425px) {
  color: transparent;
}
 @media (max-width: 375px) {
  color: transparent;
}
`;
export const Texto2 = styled.p`
 color: white;
 font-size: 1em;
 white-space: nowrap;
 margin-right: 40%;
 width: 100%;
`;
export const Icone = styled.div`
  margin-left: 10%;
  padding-right: 10%;
  
    @media (max-width: 820px) {
      margin-right: 10%;
  }
  
  @media (max-width: 425px) {
    margin-right: 300%;
    margin-top: 20%;
  }
  @media (max-width: 375px) {
    margin-right: 300%;
    margin-top: 20%;
  }
  @media (max-width: 280px) {
    margin-right: 360%;
    margin-top: 20%;
  }
`;
export const CaixaLink = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  justify-content: space-around;
  align-items: right;
  padding-right: 50%;
  padding-left: 50%;
  margin-left: 150%;
  background-color:#570B87;
  width: 200%;
   @media (max-width: 912px) {
    padding-right: 40%;
  }
  @media (max-width: 820px) {
    margin: 250%;
    padding-right: 50%;
    padding-left: 50%;
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    margin: 350%;
    width: 20%;
    padding-right: 60%;
    padding-left: 60%;
  }
  @media (max-width: 540px) {
    margin: 180%;
  }
  @media (max-width: 425px) {
    justify-content: center;
    margin: 50%;
    width: 20%;
    padding-right: 20%;
    padding-left: 20%;
  }
  @media (max-width: 375px) {
    justify-content: center;
    margin: 50%;
    width: 20%;
    padding-right: 20%;
    padding-left: 20%;
  }
`;
export const CaixaLink2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  justify-content: space-around;
  align-items: left;
  padding-right: 50%;
  padding-left: 50%;
  margin-right: 120%;
  margin-left: -250%;
  background-color:#570B87;
  width: 200%;
  @media (max-width: 912px) {
    margin-left: -220%;
  }
  @media (max-width: 820px) {
    margin: -150%;
  }
  @media (max-width: 768px) {
    justify-content: center;
    margin: -140%;
    padding-right: 20%;
    padding-left: 20%;
  }
   @media (max-width: 540px) {
    margin:-80%;
  }
  @media (max-width: 425px) {
    justify-content: center;
    margin: -25%;
    padding-right: 20%;
    padding-left: 20%;
  }
  @media (max-width: 375px) {
    justify-content: center;
    margin: -25%;
    padding-right: 20%;
    padding-left: 20%;
  }
`;
export const Logo = styled.div`
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
`;
export const MenuHeader = styled.div`
  display: none;

  @media (max-width: 780px) {
    display: flex;

  }
  @media (max-width: 600px) {
    width:20% ;
    display:flex;
    justify-content:center ;
  }
`;

export const CaixaFotoPerfil = styled.div`
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
`;