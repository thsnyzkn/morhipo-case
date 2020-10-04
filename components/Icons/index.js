import styled from "@emotion/styled";

const base = styled.img`
  margin-top: -0.5em;
  margin-bottom: -0.5em;
  margin-right: ${({ withRightMargin }) => withRightMargin && "0.5em"};
`;

export default base;
