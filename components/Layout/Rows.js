import styled from "@emotion/styled";

const base = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ padded, halfPadded }) =>
    (padded && "1em") || (halfPadded && "0.5em 0") || "0"};
  border-radius: 6px;
  background: ${({ transparent }) => (transparent ? "transparent" : "white")};
  justify-content: ${({ spaceBetween }) => spaceBetween && "space-between"};
  width: ${({ fullWidth }) => fullWidth && "100%"};
  margin-right: ${({ withRightMargin }) => withRightMargin && "0.5em"};
  @media only screen and (max-width: 960px) {
    margin-right: ${({ withRightMargin }) => withRightMargin && "0"};
    flex-direction: ${({ mobileColumn }) => mobileColumn && "column"};
  }
`;

export const OneThirdRow = styled(base)`
  flex-basis: 33%;
  @media only screen and (max-width: 960px) {
    flex-basis: 50%;
  }
`;

export const QuarterRow = styled(base)`
  flex-basis: 25%;
  @media only screen and (max-width: 960px) {
    flex-basis: 33%;
  }
`;
export const HalfRow = styled(base)`
  flex-basis: 50%;
  @media only screen and (max-width: 960px) {
    flex-basis: 100%;
  }
`;

export const FullRow = styled(base)`
  flex-basis: 100%;
`;

export const TwoThirdRow = styled(base)`
  flex-basis: 66%;
  @media only screen and (max-width: 960px) {
    flex-basis: 100%;
  }
`;
