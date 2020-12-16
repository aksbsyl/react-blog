import styled from "styled-components";
// import img from "./neutrolinelogo.png";
import img from "./counselling.jpg";

export const Container = styled.div`
  padding: 50px 80px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 100%,
    rgba(0, 0, 0, 1) 100%
  );
  // rgba(92, 39, 251, 1) 0%,
  // rgba(112, 71, 247, 1) 100%
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  max-width: 3000px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 10px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
  @media (max-width: 3000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Title = styled.a`
  font-size: 24px;
  font-family: "Algerian" !important;
  color: #3370ff;
  margin-bottom: 15px;
  margin-left: 60px;
  font-weight: bold;
  &:hover {
    color: #ff3508;
    transition: 200ms ease-in;
  }
`;

export const Link = styled.p`
  color: #000;
  margin-bottom: 20px;
  font-size: 17px;
  font-family: "Bodoni MT" !important;
  text-align: justify;
  text-decoration: none;
  &:hover {
    transition: 200ms ease-in;
    background-color: hsla(0, 70%, 100%, 0.8);
  }
`;
export const Header = styled.div`
  border: 1px solid white;
  background-image: url(${img});
  width: 900px;
  height: 500px;
  margin-block-start: 0em;
  margin-left: 0em;
  &:hover {
    border: 0.5px solid #87ceeb;
  }
`;
