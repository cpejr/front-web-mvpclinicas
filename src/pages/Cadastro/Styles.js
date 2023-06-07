import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const EstiloData = styled.div`
  display: flex;
  font-family: 'Roboto Condensed';
  color: black;
  border-bottom: 1px solid #570B87;
   width: 100%;
   padding: 0px 0px 0px;
   margin-bottom: 4px;
   
   .ant-picker-input input::placeholder {
    color: #8B00FF;
    font-family: 'Roboto Condensed';
    font-size: 1.1em;
    padding: 0px 0px 0px;
   } 

   .ant-picker {
    padding: 0px 0px 0px;
  }

   @media (max-width: 1300px) {
    margin-bottom: 3px;
  }
`;


export const Conteudo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 100%;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const CaixaLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 150px;
  background-color: #8B00FF;
  margin: 2%;
  margin-left: 15%;

  @media (max-width: 900px) {
    width: 260px;
    height: 130px;
    margin-left: 5%;
  }

  @media (max-width: 650px) {
    width: 280px;
    height: 130px;
    margin-left: 5%;
  }

   @media (max-width: 500px) {
    width: 200px;
    height: 80px;
    margin-left: 5%;
  }
`;

export const Titulo = styled.div`
  width: 100%;
  height: 20px;
  font-family: "Courgette";
  font-weight: 400;
  font-size: 4em;
  display: flex;
  color: #570B87;
  justify-content: flex-start;
  align-items: center;
  
  @media (max-width: 1200px) {
    font-size: 3.3em;
  }

  @media (max-width: 1000px) {
    font-size: 3em;
  }

  @media (max-width: 578px) {
    font-size: 2.5em;
  }

  @media (max-width: 520px) {
    font-size: 2.3em;
  }

  @media (max-width: 460px) {
    font-size: 2.0em;
  }

  @media (max-width: 381px) {
    font-size: 1.8em;
  }

  @media (max-width: 358px) {
    font-size: 1.6em;
  }

  @media (max-width: 335px) {
    font-size: 1.4em;
  }

  @media (max-width: 335px) {
    font-size: 1.3em;
  }

  @media (max-width: 299px) {
    font-size: 1.2em;
  }
`;

export const CaixaTitulo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 70%;
  padding: 2%;
  gap: 200px;
  
  @media (max-width: 400px) {
    gap:50px;
    
  }

  @media (max-width: 1450px) {
    gap:100px;
  }

  @media (max-width: 1450px) {
    gap:100px;
  }

  @media (max-width: 1000px) {
    gap:80px;
  }

  @media (max-width: 430px) {
    gap:40px;
  }
`;

export const CaixaInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  align-items: center;
  height: 70%;
  width: 70%;
  padding: 2%;

  @media (max-width: 900px) {
    width: 90%;
  }

  @media (max-width: 700px) {
    gap: 5px;
  }

  
`;

export const ConjuntoTituloInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 7px;
  align-items: center;
  width: 70%;

  @media (max-width: 700px) {
    gap: 0px;
  }
`;

export const InputDividido = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 50px;
  height: 100%;
  width: 70%;

  @media (max-width: 700px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    gap: 5px;
  }
`;

export const TituloInput = styled.div`
  width: 100%;
  height: 20px;
  font-family: "Roboto Condensed";
  font-weight: 400;
  font-size: 1.2em;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #570B87;

  @media (max-width: 900px) {
    font-size: 1.1em;
  }

  @media (max-width: 500px) {
    font-size: 1em;
  }

  @media (max-width: 306px) {
    font-size: 0.9em;
  }
`;

export const SubtituloInput = styled.div`
  height: 30px;
  font-family: "Roboto Condensed";
  font-weight: 400;
  font-size: 1em;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #570B87;

  @media (max-width: 1000px) {
    font-size: 1.2em;
    align-items: center;
    justify-content: flex-start;
  }

  @media (max-width: 800px) {
    font-size: 1.1em;
    align-items: center;
    justify-content: flex-start;
  }

  @media (max-width: 500px) {
    font-size: 1em;
    align-items: center;
    justify-content: flex-start;
    margin-top: 25px;
    margin-bottom: 25px;
  }

  @media (max-width: 326px) {
    font-size: 0.9em;
    align-items: center;
    justify-content: flex-start;
  }

  @media (max-width: 288px) {
    margin-top: 20px;
    margin-bottom: 15px;
  }
`;

export const TituloIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1%;
  width: 100%;
`;

export const CaixaBotoes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: 20%;
  width: 70%;
  padding: 2%;

  @media (max-width: 900px) {
    gap: 20px;
    padding: 5%;
  }
`;

export const BotoesEdicao = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 50%;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
  }




`;

