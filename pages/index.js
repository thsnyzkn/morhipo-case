import { GridContainer } from "../components";

import { LeftColumn, RightColumn } from "../components/sections";

export async function getStaticProps() {
  const randomProductId = Math.floor(Math.random() * 20) + 1;
  const response = await fetch(
    `https://fakestoreapi.com/products/${randomProductId}`
  );
  const productDetails = await response.json();

  return {
    props: {
      id: productDetails.id,
      title: productDetails.title,
      price: productDetails.price,
      category: productDetails.category,
      description: productDetails.description,
      image: productDetails.image,
    },
  };
}

const App = ({ image, title, price }) => {
  const [isOpened, toggleOpen] = React.useState(false);
  return (
    <GridContainer>
      <LeftColumn image={image} />
      <RightColumn
        title={title}
        price={price}
        image={image}
        isOpened={isOpened}
        toggleOpen={toggleOpen}
      />
    </GridContainer>
  );
};

export default App;
