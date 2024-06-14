import styled from "styled-components";

export const Container = styled.footer`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  background-color: #8b00ff;

  > img {
    width: 50px;
    height: auto;
    cursor: pointer;
    @media (max-width: 600px) {
      width: 60px;
    }
  }
  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;

export const Text = styled.div``;
