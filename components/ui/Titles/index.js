import styled from "@emotion/styled";

const base = styled.span`
  display: block;
  margin-bottom: ${({ centered }) => (centered ? "0" : "1em")};
  font-size: ${({ small }) => small && "12px"};
  font-weight: 400;
  color: ${(props) => props.theme.colors.mutedText};
`;

export const ActualPriceTag = styled(base)`
  color: ${(props) => props.theme.colors.red};
  display: inline-block;
  font-weight: 700;
`;
export const PreviousPriceTag = styled(base)`
  color: ${(props) => props.theme.colors.mutedText};
  text-decoration: line-through;
  display: inline-block;
`;

export const GrayTitle = styled(base)`
  font-size: 12px;
`;

export const CenteredGrayTitle = styled(GrayTitle)`
  margin: 0;
`;

const Title = styled(base)`
  color: ${(props) => props.theme.colors.black};
`;

export default Title;
