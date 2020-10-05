import styled from "@emotion/styled";

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
`;

export default Title;
