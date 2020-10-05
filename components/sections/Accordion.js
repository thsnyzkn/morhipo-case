import { FullRow, Column, SmallContainer } from "../Layout";
import { Title, Arrow, SubHeading, Collapse } from "../ui";

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
          <Column>
            <FullRow spaceBetween fullWidth>
              <SubHeading>{title}</SubHeading>
              <Arrow
                withRightMargin
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                direction={activeIndex === index ? "down" : "right"}
              />
            </FullRow>
            <Collapse isOpened={activeIndex === index}>
              <FullRow padded>
                <Title small centered gray>
                  {description}
                </Title>
              </FullRow>
            </Collapse>
          </Column>
        ))}
      </Column>
    </SmallContainer>
  );
};

export default Accordion;
