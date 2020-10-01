import styled from "@emotion/styled";
const Container = styled.main`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "image detail";
  @media (max-width: 700px) {
    grid-template-columns: 100%;
    grid-template-areas:
      "image"
      "detail";
  }
`;
const BigImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

const ImgContainer = styled.div`
  position: relative;
  padding-bottom: 115.25%;
  height: 0;
  overflow: hidden;
  border-radius: 4px;
`;

const DetailContainer = styled.section`
  background: ${(props) => props.theme.colors.contentBg};
  padding: 0 1em;
`;

const H2 = styled.h1``;

const App = ({ image, title, price }) => {
  return (
    <Container>
      <ImgContainer>
        {" "}
        <BigImg src={image} />
      </ImgContainer>

      <DetailContainer>
        <H2>{title.split(" ").slice(0, 3).join(" ").toUpperCase()} </H2>
        <p>{title.split(" ").slice(-3).join(" ")}</p>
        <span>{price} TL</span>
        <span>{price} TL</span>
        <p>Renk:</p>
        <img src={image} width="50px" />
        <br />
        <span>Beden:</span>
        <br />
        {[1, 2, 3, 4, 5].map((_, i) => {
          return <button>{i + 1}</button>;
        })}
      </DetailContainer>
    </Container>
  );
};

export async function getStaticProps() {
  const randomProductId = Math.floor(Math.random() * 20) + 1;
  const res = await fetch(
    `https://fakestoreapi.com/products/${randomProductId}`
  );
  const json = await res.json();

  return {
    props: {
      id: json.id,
      title: json.title,
      price: json.price,
      category: json.category,
      description: json.description,
      image: json.image,
    },
  };
}

export default App;
