import { InnerContainer, FullRow, OneThirdRow } from "../Layout";
import { ButtonGroup } from "../sections";
import { Heading, Icon, Title, SmallImage } from "../ui";

const ProductDetail = ({ brandName, productName, price, image }) => {
  return (
    <InnerContainer>
      <FullRow spaceBetween>
        <Heading>{brandName}</Heading>
        <Icon mobileOnly src={"/share.svg"} />
      </FullRow>

      <Title color="gray">{productName}</Title>
      <OneThirdRow spaceBetween>
        <Title inlined color="red" bold>
          {price} TL
        </Title>
        <Title inlined color="gray" crossed>
          {price} TL
        </Title>
      </OneThirdRow>
      <Title>Renk:</Title>
      <SmallImage src={image} />
      <Title>Beden:</Title>
      <ButtonGroup sizes={[32, 34, 36, 38]} />
    </InnerContainer>
  );
};

export default ProductDetail;
