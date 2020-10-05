import { Column } from "../Layout";
import { ImgContainer, BigImage } from "../ui";
import BreadCrumb from "./BreadCrumb";

const LeftColumn = ({ title, category, image }) => {
  return (
    <Column>
      <BreadCrumb category={category} title={title} />
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
