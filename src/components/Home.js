import styles from "styled-components";
import Cards from "./Cards";
import ImgSlider from "./ImgSlider";
import Recommend from "./Recommend";
import Disney from "./Disney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";
import { db } from "../firebase";
import { setMovies } from "../store/features/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.name);

  useEffect(() => {
    let disney = [],
      trending = [],
      recommend = [],
      originals = [];
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "disney":
            disney = [...disney, { id: doc.id, data: doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, data: doc.data() }];
            break;
          case "recommend":
            recommend = [...recommend, { id: doc.id, data: doc.data() }];
            break;
          case "originals":
            originals = [...originals, { id: doc.id, data: doc.data() }];
            break;
          default:
            break;
        }
      });
      dispatch(
        setMovies({
          recommend,
          trending,
          disney,
          originals,
        })
      );
    });
  }, [name]);

  return (
    <Container>
      <ImgSlider />
      <Cards />
      <Recommend />
      <Disney />
      <Originals />
      <Trending />
    </Container>
  );
};

export default Home;

const Container = styles.section`
margin-top: 72px;
position:relative;

&::after {
    content: "";
    background: url("/img/home-background.png") center center / cover no-repeat fixed;
    position:absolute;
    inset:0;
    z-index:-1;
}
`;
