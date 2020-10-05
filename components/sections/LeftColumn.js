import { Column } from "../Layout";
import { ImgContainer, BigImage } from "../ui";
import { formatProductTitle } from "../../util/helpers";

const LeftColumn = ({ image, title, category }) => {
  const { brandName, productName } = formatProductTitle(title);
  return (
    <Column>
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "480px",
          margin: 0,
          padding: 0,
          marginBottom: "0.5em",
          listStyleType: "none",
        }}
      >
        <li>Anasayfa</li>
        <li>{category}</li>
        <li>{`${brandName}-${productName}`}</li>
      </ul>
      <label>
        <ImgContainer>
          <input type="checkbox" />
          <BigImage src={image} />
        </ImgContainer>
      </label>
    </Column>
  );
};

export default LeftColumn;
