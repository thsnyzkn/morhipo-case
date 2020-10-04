import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Arrow = styled.i`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  margin-right: 1em;
  cursor: pointer;
`;

export const RightArrow = styled(Arrow)`
  transform: rotate(-45deg);
`;
export const LeftArrow = styled(Arrow)`
  transform: rotate(135deg);
`;
export const UpArrow = styled(Arrow)`
  transform: rotate(-135deg);
`;
export const DownArrow = styled(Arrow)`
  transform: rotate(45deg);
`;
