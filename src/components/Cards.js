import React from "react";
import styles from "styled-components";

const Cards = () => {
  return (
    <Container>
      <Card>
        <img src="/img/viewers-disney.png" alt="" />
        <video autoPlay loop muted>
          <source src="/video/disney.mp4" />
        </video>
      </Card>
      <Card>
        <img src="/img/viewers-marvel.png" alt="" />
        <video autoPlay loop muted>
          <source src="/video/marvel.mp4" />
        </video>
      </Card>
      <Card>
        <img src="/img/viewers-national.png" alt="" />
        <video autoPlay loop muted>
          <source src="/video/national-geographic.mp4" />
        </video>
      </Card>
      <Card>
        <img src="/img/viewers-pixar.png" alt="" />
        <video autoPlay loop muted>
          <source src="/video/pixar.mp4" />
        </video>
      </Card>
      <Card>
        <img src="/img/viewers-starwars.png" alt="" />
        <video autoPlay loop muted>
          <source src="/video/star-wars.mp4" />
        </video>
      </Card>
    </Container>
  );
};

export default Cards;

const Card = styles.div``;
const Container = styles.section`
display:grid;
grid-template-columns: repeat(5, minmax(0, 1fr));
grid-gap: 1.3rem;
padding: 3rem 2rem;


@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
}
div {
    cursor:pointer;
    border: 3px solid rgba(255,255,255,0.3);
    border-radius: 10px;
    transition: 0.2s ease;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    position:relative;
    overflow: hidden;
    img {
        width: 100%;
    }
    video {
        visibility: hidden;
        display:none;
        position: absolute;
        inset:0;
        width: 100%;
        height:100%;
        z-index:-1;
    }
    &:hover {
        border-color: #f9f9f9;
        transform: scale(1.06);
        video {
            visibility: visible;
            display:block;
        }
    }
}
`;
