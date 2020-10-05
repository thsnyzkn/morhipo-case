import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Arrow = styled.i`
  border: ${({ theme, gray }) =>
    `solid ${gray ? theme.colors.mutedText : theme.colors.black}`};
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  margin-right: 1em;
  cursor: pointer;
  transform: ${({ direction }) =>
    (direction === "right" && "rotate(-45deg)") ||
    (direction === "left" && "rotate(135deg)") ||
    (direction === "up" && "rotate(-135deg)") ||
    (direction === "down" && "rotate(45deg)")};
`;

export default Arrow;
