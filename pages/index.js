import styled from "@emotion/styled";

import { Collapse } from "react-collapse";
import {
  GridContainer,
  Button,
  Heading,
  Column,
  ActualPriceTag,
  PreviousPriceTag,
  Title,
  GrayTitle,
  Row,
  FullRow,
  SquareButton,
  OneThirdRow,
  SubHeading,
  InnerContainer,
  NarrowContainer,
  SpacedFullRow,
  CenteredGrayTitle,
  RightArrow,
  QuarterRow,
  HalfRow,
  SmallNarrowContainer,
  SmallContainer,
  Icon,
} from "../components";

const BigImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

const SmallImage = styled.img`
  width: 50px;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 2em;
`;

const ImgContainer = styled.div`
  position: relative;
  padding-top: 133.3%;
  height: 0;
  overflow: hidden;
  border-radius: 4px;
`;

const App = ({ image, title, price }) => {
  const [isOpened, toggleOpen] = React.useState(false);
  return (
    <GridContainer>
      <Column>
        {" "}
        <ImgContainer>
          {" "}
          <BigImage src={image} />
        </ImgContainer>
      </Column>

      <Column>
        <InnerContainer>
          <FullRow>
            <Heading>
              {title.split(" ").slice(0, 3).join(" ").toUpperCase()}{" "}
            </Heading>
          </FullRow>

          <GrayTitle>{title.split(" ").slice(-3).join(" ")}</GrayTitle>
          <Row>
            <ActualPriceTag>{price} TL</ActualPriceTag>
            <PreviousPriceTag>{price} TL</PreviousPriceTag>
          </Row>
          <Title>Renk:</Title>
          <SmallImage src={image} />

          <Title>Beden:</Title>

          <FullRow>
            {[36, 38, 40, 42].map((item, i) => {
              return (
                <SquareButton key={i} square>
                  {item}
                </SquareButton>
              );
            })}
          </FullRow>

          <OneThirdRow>
            <Button primary>Sepete Ekle</Button>
          </OneThirdRow>
          <OneThirdRow>
            <Button>Favorile</Button>
          </OneThirdRow>
        </InnerContainer>
        <SmallContainer>
          <FullRow spaceBetween>
            <SubHeading>
              {title.split(" ").slice(0, 3).join(" ").toUpperCase()}{" "}
            </SubHeading>
            <QuarterRow spaceBetween>
              <CenteredGrayTitle>Tüm ürünlere git</CenteredGrayTitle>
              <RightArrow />
            </QuarterRow>
          </FullRow>
        </SmallContainer>
        <SmallContainer>
          <FullRow vertical spaceBetween>
            <FullRow spaceBetween>
              <SubHeading>Ürün Hakkında</SubHeading>
              <RightArrow withRightMargin />
            </FullRow>
            <FullRow spaceBetween>
              <SubHeading>Teslimat Bilgileri</SubHeading>
              <RightArrow
                withRightMargin
                onClick={() => toggleOpen(!isOpened)}
              />
            </FullRow>
            <Collapse isOpened={isOpened}>
              <SubHeading>Ürün Hakkında</SubHeading>
              <RightArrow
                withRightMargin
                onClick={() => toggleOpen(!isOpened)}
              />
            </Collapse>
          </FullRow>
        </SmallContainer>

        <SmallContainer transparent>
          <HalfRow withRightMargin padded>
            <Icon src={"/click_collect-sm.svg"} />
            <CenteredGrayTitle>
              TıklaGel ile Mağazadan Teslimat İmkanı
            </CenteredGrayTitle>
          </HalfRow>
          <HalfRow padded>
            <Icon src={"/kapida_odeme-sm.svg"} withRightMargin />
            <Title small centered gray>
              Kapıda Ödeme ile Nakit veya Kartla Ödeme İmkanı
            </Title>
          </HalfRow>
        </SmallContainer>
      </Column>
    </GridContainer>
  );
};

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

export default App;
