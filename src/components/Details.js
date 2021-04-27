import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles, { css } from "styled-components";
import { db } from "../firebase";

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setMovie(doc.data());
        }
      });
  }, [id]);

  return (
    <Container>
      <BackgroundImg>
        <img src={movie?.backgroundImg} alt="" />
      </BackgroundImg>
      <Content>
        <TitleImg src={movie?.titleImg} alt="" />
        <Buttons>
          <PlayBtn white>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-play-fill"
              viewBox="0 0 16 16"
            >
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
            </svg>
            <span>Play</span>
          </PlayBtn>
          <PlayBtn black>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-play-fill"
              viewBox="0 0 16 16"
            >
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
            </svg>
            <span>Trailer</span>
          </PlayBtn>
          <RoundIcon plus>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </RoundIcon>
          <RoundIcon group>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-people-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path
                fillRule="evenodd"
                d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
              />
              <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
            </svg>
          </RoundIcon>
        </Buttons>
        <SubTitle>{movie?.subtitle}</SubTitle>
        <Description>{movie?.description}</Description>
      </Content>
    </Container>
  );
};

export default Details;

const Container = styles.section`
min-height:100vh;
position:relative;
display:flex;
align-items:center;
overflow-x:hidden;
`;
const BackgroundImg = styles.div`
position:fixed;
top:0;
left:0;
bottom:0;
z-index:-1;

img {
  width:100vw;
  height:100%;

  @media screen and (max-width: 768px) {
    width: initial;
  }
}
`;
const Content = styles.div`
padding: 0 2.5rem;
`;
const TitleImg = styles.img`
width:100%;
max-width: 440px;
`;
const Buttons = styles.div`
display:flex;
margin: 2rem 0;
align-items:center;
a{
  display:flex;
  cursor:pointer;
  align-items:center;
  justify-content:center;
  padding: 10px 20px;
  border:none;
  outline: none;
  border-radius: 5px;
  margin-right: 1rem;
  transition: 0.2s ease-in;
  img {
    width: 30px;
  }
  span {
    font-size: 1.1rem;
    letter-spacing: 2px;
    text-transform:uppercase;
  }
}
`;
const PlayBtn = styles.a`
svg {
  width: 30px;
  height: 30px;
}
${(props) =>
  props.black &&
  css`
    background: rgba(9, 9, 9, 0.5);
    color: #f9f9f9;

    &:hover {
      background: rgba(9, 9, 9, 0.9);
    }
  `}
${(props) =>
  props.white &&
  css`
    background: rgba(255, 255, 255, 1);
    color: black;
    &:hover {
      background: rgba(255, 255, 255, 0.5);
    }
  `}
`;
const RoundIcon = styles.i`
background:rgba(0,0,0,0.5);
border: 2px solid white;
width: 50px;
heigth:50px;
border-radius: 50%;
display:flex;
justify-content: center;
align-items:center;
cursor:pointer;
width: 50px;
height: 50px;

${(props) =>
  props.plus &&
  css`
    margin-right: 1rem;
  `}
${(props) => props.group && css``}

&:hover {
  background: rgba(0,0,0,0.9)
}
`;
const SubTitle = styles.p`
text-shadow: 1px 1px 2px #000;
margin-bottom: 1rem;
`;
const Description = styles.p`
font-size: 1.2rem;
line-height:1.2;
letter-spacing: 1px;
max-width: 800px;
text-shadow: 1px 1px 2px #000;
`;
