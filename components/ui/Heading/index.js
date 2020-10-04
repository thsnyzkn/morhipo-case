import styled from "@emotion/styled";
import PropTypes from "prop-types";

export const Heading = styled.h1`
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 0.5em;
  margin-top: 0;
  font-size: 18px;
`;

export const SubHeading = styled.h2`
  margin-left: 0.75em;
  color: ${(props) => props.theme.colors.black};
  font-size: 16px;
`;
