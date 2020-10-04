import styled from "@emotion/styled";

const base = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ padded }) => (padded ? "1em" : "0")};
  border-radius: 6px;
  background: ${({ transparent }) => (transparent ? "transparent" : "white")};
  justify-content: ${({ spaceBetween }) => spaceBetween && "space-between"};
  width: ${({ fullWidth }) => fullWidth && "100%"};
  margin-right: ${({ withRightMargin }) => withRightMargin && "0.5em"};
  @media only screen and (max-width: 768px) {
    margin-right: ${({ withRightMargin }) => withRightMargin && "0"};
    flex-direction: ${({ mobileColumn }) => mobileColumn && "column"};
  }
`;

export const OneThirdRow = styled(base)`
  max-width: 33%;
  flex-basis: 33%;
  @media (max-width: 800px) {
    max-width: 50%;
    flex-basis: 50%;
  }
`;

export const QuarterRow = styled(base)`
  max-width: 25%;
  flex-basis: 25%;
`;
export const HalfRow = styled(base)`
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
`;

export const TwoThirdRow = styled(base)`
  max-width: 66%;
  flex-basis: 66%;
  @media (max-width: 800px) {
    max-width: 100%;
    flex-basis: 100%;
  }
`;
