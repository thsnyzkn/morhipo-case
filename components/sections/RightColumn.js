import {
  Column,
  Row,
  FullRow,
  OneThirdRow,
  TwoThirdRow,
  InnerContainer,
  SmallContainer,
  QuarterRow,
  HalfRow,
} from "../layout";
import {
  Button,
  SquareButton,
  Heading,
  SubHeading,
  Collapse,
  Title,
  ActualPriceTag,
  PreviousPriceTag,
  GrayTitle,
  CenteredGrayTitle,
  Arrow,
  Icon,
  SmallImage,
} from "../ui";

const RightColumn = ({ title, price, image, isOpened, toggleOpen }) => (
  <Column>
    <InnerContainer>
      <FullRow spaceBetween>
        <Heading>
          {title.split(" ").slice(0, 3).join(" ").toUpperCase()}{" "}
        </Heading>
        <Icon mobileOnly src={"/share.svg"} />
      </FullRow>

      <GrayTitle>{title.split(" ").slice(-3).join(" ")}</GrayTitle>
      <OneThirdRow spaceBetween>
        <ActualPriceTag>{price} TL</ActualPriceTag>
        <PreviousPriceTag>{price} TL</PreviousPriceTag>
      </OneThirdRow>
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

      <TwoThirdRow>
        <Button primary>Sepete Ekle</Button>
      </TwoThirdRow>
      <TwoThirdRow>
        <Button>
          <Icon src={"/favourite.svg"} />
          Favorile
        </Button>
      </TwoThirdRow>
    </InnerContainer>
    <SmallContainer>
      <Column>
        <FullRow spaceBetween fullWidth>
          <SubHeading>Ürün Hakkında</SubHeading>
          <Arrow withRightMargin direction="right" />
        </FullRow>
        <FullRow spaceBetween fullWidth>
          <SubHeading>Teslimat Bilgileri</SubHeading>
          <Arrow
            withRightMargin
            onClick={() => toggleOpen(!isOpened)}
            direction={isOpened ? "down" : "right"}
          />
        </FullRow>
        <Collapse isOpened={isOpened} style={{ width: "100%" }}>
          <FullRow padded>
            <Title small centered gray>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Title>
          </FullRow>
        </Collapse>
      </Column>
    </SmallContainer>
    <Column reversedInMobile>
      <SmallContainer>
        <FullRow spaceBetween>
          <SubHeading>
            {title.split(" ").slice(0, 3).join(" ").toUpperCase()}{" "}
          </SubHeading>
          <QuarterRow spaceBetween>
            <CenteredGrayTitle>Tüm ürünlere git</CenteredGrayTitle>
            <Arrow direction="right" />
          </QuarterRow>
        </FullRow>
      </SmallContainer>

      <FullRow transparent mobileColumn>
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
      </FullRow>
    </Column>
  </Column>
);

export default RightColumn;
