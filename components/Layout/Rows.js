import styled from "@emotion/styled";

const base = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ padded, halfPadded, verticalPadded }) =>
    (padded && "1em") ||
    (halfPadded && "0.5em 0") ||
    (verticalPadded && "1em 0") ||
    "0"};
  border-radius: 6px;
  background: ${({ theme, transparent }) =>
    transparent ? "transparent" : theme.colors.contentBg};
  justify-content: ${({ spaceBetween }) => spaceBetween && "space-between"};
  width: ${({ fullWidth }) => fullWidth && "100%"};
  margin-right: ${({ withRightMargin }) => withRightMargin && "0.5em"};
  margin-bottom: ${({ withBottomMargin }) => withBottomMargin && "0.5em"};
  @media only screen and (max-width: 960px) {
    margin-right: ${({ withRightMargin }) => withRightMargin && "0"};
    flex-direction: ${({ mobileColumn }) => mobileColumn && "column"};
    width: ${({ mobileFullWidth }) => mobileFullWidth && "100%"};
  }
  height: ${({ fixedHeight }) => fixedHeight && "1.65em"};
`;

export const OneThirdRow = styled(base)`
  max-width: 33%;
  flex-basis: 33%;
  @media only screen and (max-width: 960px) {
    max-width: 50%;
    flex-basis: 50%;
  }
`;

export const QuarterRow = styled(base)`
  max-width: 25%;
  flex-basis: 25%;
  @media only screen and (max-width: 960px) {
    max-width: 33%;
    flex-basis: 33%;
  }
`;
export const HalfRow = styled(base)`
  max-width: 50%;
  flex-basis: 50%;
  @media only screen and (max-width: 960px) {
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
  @media only screen and (max-width: 960px) {
    max-width: 100%;
    flex-basis: 100%;
  }
`;
