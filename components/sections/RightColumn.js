import {
  Column,
  FullRow,
  OneThirdRow,
  InnerContainer,
  SmallContainer,
  QuarterRow,
  HalfRow,
} from "../Layout";
import { Heading, SubHeading, Title, Arrow, Icon, SmallImage } from "../ui";
import Accordion from "./Accordion";
import ButtonGroup from "./ButtonGroup";

const RightColumn = ({ title, price, image, description }) => (
  <Column style={{ marginTop: "1.5em" }}>
    <InnerContainer>
      <FullRow spaceBetween>
        <Heading>
          {title.split(" ").slice(0, 3).join(" ").toUpperCase()}{" "}
        </Heading>
        <Icon mobileOnly src={"/share.svg"} />
      </FullRow>

      <Title color="gray" small>
        {title.split(" ").slice(-3).join(" ")}
      </Title>
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

    <Accordion
      titles={["Ürün Hakkında", "Teslimat ve İade"]}
      description={description}
    />

    <Column reversedInMobile>
      <SmallContainer>
        <FullRow spaceBetween halfPadded>
          <SubHeading>
            {title.split(" ").slice(0, 3).join(" ").toUpperCase()}{" "}
          </SubHeading>
          <QuarterRow spaceBetween>
            <Title color="gray" centered small>
              Tüm ürünlere git
            </Title>
            <Arrow direction="right" />
          </QuarterRow>
        </FullRow>
      </SmallContainer>

      <FullRow transparent mobileColumn>
        <HalfRow withRightMargin padded>
          <Icon src={"/click_collect-sm.svg"} />
          <Title small centered gray>
            <Title color="orange" inlined centered>
              TıklaGel
            </Title>{" "}
            ile Mağazadan Teslimat İmkanı
          </Title>
        </HalfRow>
        <HalfRow padded>
          <Icon src={"/kapida_odeme-sm.svg"} withRightMargin />
          <Title small centered gray>
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

export default RightColumn;
