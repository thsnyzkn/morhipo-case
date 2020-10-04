import { Column } from "../layout";
import { ImgContainer, BigImage } from "../ui";

const LeftColumn = ({ image }) => (
  <Column>
    {" "}
    <ImgContainer>
      {" "}
      <BigImage src={image} />
    </ImgContainer>
  </Column>
);

export default LeftColumn;
