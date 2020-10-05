import {
  Column,
  FullRow,
  SmallContainer,
  QuarterRow,
  HalfRow,
} from "../Layout";
import { SubHeading, Title, Arrow, Icon, SmallImage } from "../ui";
import Accordion from "./Accordion";
import ProductDetail from "./ProductDetail";
import { formatProductTitle, capitalizeWord } from "../../util/helpers";

const RightColumn = ({ title, price, image, description }) => {
  const { brandName, productName } = formatProductTitle(title);
  const titleCapitalized = capitalizeWord(brandName);
  return (
    <Column style={{ marginTop: "1.5em" }}>
      <ProductDetail
        brandName={titleCapitalized}
        productName={productName}
        price={price}
        image={image}
      />

      <Accordion
        titles={["Ürün Hakkında", "Teslimat ve İade"]}
        description={description}
      />
      <Column reversedInMobile>
        <SmallContainer>
          <FullRow spaceBetween halfPadded>
            <SubHeading>{titleCapitalized}</SubHeading>
            <QuarterRow spaceBetween>
              <Title color="gray" centered small>
                Tüm ürünlere git
              </Title>
              <Arrow direction="right" />
            </QuarterRow>
          </FullRow>
        </SmallContainer>

        <FullRow transparent mobileColumn>
          <HalfRow
            withRightMargin
            fixedHeight
            withBottomMargin
            mobileFullWidth
            verticalPadded
          >
            <Icon src={"/click_collect-sm.svg"} withLeftMargin />
            <Title small centered>
              <Title color="orange" inlined centered>
                TıklaGel
              </Title>{" "}
              ile Mağazadan Teslimat İmkanı
            </Title>
          </HalfRow>
          <HalfRow verticalPadded withBottomMargin fixedHeight mobileFullWidth>
            <Icon src={"/kapida_odeme-sm.svg"} withLeftMargin />
            <Title small centered>
              <Title color="primary" inlined centered>
                Kapıda Ödeme
              </Title>{" "}
              ile Nakit veya Kartla Ödeme İmkanı
            </Title>
          </HalfRow>
        </FullRow>
      </Column>
    </Column>
  );
};

export default RightColumn;
