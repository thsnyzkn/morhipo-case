import { FullRow, Column, SmallContainer } from "../Layout";
import { Title, Arrow, SubHeading, Collapse, Paragraph } from "../ui";

const Accordion = ({ titles, description }) => {
  const [isOpened, toggleOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(null);
  React.useEffect(() => {
    if (activeIndex || activeIndex === 0) {
      toggleOpen(true);
    } else {
      toggleOpen(false);
    }
  }, [activeIndex, toggleOpen]);
  return (
    <SmallContainer>
      <Column>
        {titles.map((title, index) => (
          <Column key={index}>
            <FullRow spaceBetween fullWidth halfPadded>
              <SubHeading>{title}</SubHeading>
              <Arrow
                withRightMargin
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                direction={activeIndex === index ? "up" : "right"}
              />
            </FullRow>
            <Collapse isOpened={activeIndex === index}>
              <FullRow padded>
                <Paragraph>{description}</Paragraph>
              </FullRow>
            </Collapse>
          </Column>
        ))}
      </Column>
    </SmallContainer>
  );
};

export default Accordion;
