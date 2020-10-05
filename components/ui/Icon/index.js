import styled from "@emotion/styled";

const base = styled.img`
  display: ${({ mobileOnly }) => mobileOnly && "none"};

  @media only screen and (max-width: 960px) {
    display: block;
  }
  margin-top: -0.5em;
  margin-bottom: -0.5em;
  margin-right: 0.5em;
  margin-left: ${({ withLeftMargin }) => withLeftMargin && "0.5em"};
`;

export default base;
