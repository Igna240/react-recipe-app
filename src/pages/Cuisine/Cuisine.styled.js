import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

export const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
      text-decoration: none;
  }
  h4{
      text-align: center;
      padding: 1rem;
  }
`;
