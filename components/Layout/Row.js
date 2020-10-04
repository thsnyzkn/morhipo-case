import styled from "@emotion/styled";

const base = styled.div`
  display: flex;
  flex-direction: ${({ vertical }) => vertical && "column"};
  align-items: center;
  padding: ${({ padded }) => (padded ? "1em" : "0")};
  border-radius: 6px;
  background: ${({ transparent }) => (transparent ? "transparent" : "white")};
  justify-content: ${({ spaceBetween }) => spaceBetween && "space-between"};
`;

const Row = styled(base)`
  max-width: 33%;
  flex-basis: 33%;
`;

export const QuarterRow = styled(Row)`
  max-width: 25%;
  flex-basis: 25%;
`;
export const HalfRow = styled(Row)`
  margin-right: ${({ withRightMargin }) => withRightMargin && "0.5em"};
  max-width: 50%;
  flex-basis: 50%;
  @media (max-width: 800px) {
    max-width: 100%;
    flex-basis: 100%;
  }
`;

export const FullRow = styled(base)`
  max-width: 100%;
  flex-basis: 100%;
  width: 100%;
`;

export const OneThirdRow = styled(Row)`
  max-width: 66%;
  flex-basis: 66%;
  @media (max-width: 800px) {
    max-width: 100%;
    flex-basis: 100%;
  }
`;

export default Row;
