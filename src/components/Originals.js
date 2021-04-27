import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "styled-components";

const Originals = () => {
  const originals = useSelector((state) => state.movies.originals);

  return (
    <Container>
      <Heading>Originals</Heading>
      <Row>
        {originals &&
          originals.map((item) => (
            <Card key={item.id}>
              <Link to={`/details/${item.id}`}>
                <img src={item.data.cardImg} alt="" />
              </Link>
            </Card>
          ))}
      </Row>
    </Container>
  );
};

export default Originals;

const Container = styles.section`
padding: 2rem;
`;
const Heading = styles.h2``;
const Card = styles.li``;
const Row = styles.ul`
margin: 1rem 0;
display:grid;
grid-template-columns: repeat(4, minmax(0, 1fr));
grid-gap: 1.3rem;
@media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
}

li {
    cursor:pointer;
    border: 3px solid rgba(255,255,255,0.3);
    border-radius: 10px;
    transition: 0.2s ease;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    position:relative;
    overflow: hidden;
    img {
        height:100%;
        width: 100%;
    }
    &:hover {
        border-color: #f9f9f9;
        transform: scale(1.06);
    }
}
`;
