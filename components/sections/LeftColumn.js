import { Column } from "../Layout";
import { ImgContainer, BigImage, Title, BreadCrumbList } from "../ui";
import { formatProductTitle } from "../../util/helpers";

const LeftColumn = ({ image, title, category }) => {
  const { brandName, productName } = formatProductTitle(title);
  return (
    <Column>
      <BreadCrumbList>
        <li style={{ marginRight: "0.5em" }}>
          <Title centered forceOneLine color="gray">
            Anasayfa
          </Title>
        </li>
        <li style={{ marginRight: "0.5em" }}>
          <Title centered forceOneLine color="gray">
            {category}
          </Title>
        </li>
        <li style={{ marginRight: "0.5em" }}>
          <Title centered forceOneLine color="gray">
            {`${brandName}-${productName}`}
          </Title>
        </li>
      </BreadCrumbList>
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
