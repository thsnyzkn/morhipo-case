import { GridContainer } from "../components";
import { LeftColumn, RightColumn } from "../components/sections";

export async function getServerSideProps() {
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

const App = ({ image, title, price, category, description }) => {
  return (
    <GridContainer>
      <LeftColumn image={image} title={title} category={category} />
      <RightColumn
        title={title}
        price={price}
        image={image}
        description={description}
      />
    </GridContainer>
  );
};

export default App;
