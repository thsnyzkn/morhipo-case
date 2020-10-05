import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Title = styled.span`
  display: ${({ inlined }) => (inlined ? "inline-block" : "block")};
  margin-bottom: ${({ centered }) => (centered ? "0" : "1em")};
  font-size: ${({ small }) => small && "12px"};
  font-weight: ${({ bold }) => (bold ? "700" : "400")};
  color: ${({ theme, color }) =>
    (color === "orange" && theme.colors.orange) ||
    (color === "red" && theme.colors.red) ||
    (color === "gray" && theme.colors.mutedText) ||
    (color === "primary" && theme.colors.primary)};
  text-decoration: ${({ crossed }) => (crossed ? "line-through" : "none")};
  white-space: ${({ forceOneLine }) => forceOneLine && "pre"};
`;

Title.propTypes = {
  inlined: PropTypes.bool,
  centered: PropTypes.bool,
  small: PropTypes.bool,
  crossed: PropTypes.bool,
  color: PropTypes.oneOf(["orange", "red", "gray", "primary"]),
  forceOneLine: PropTypes.bool,
};

export default Title;
