import styled from "@emotion/styled";
import PropTypes from "prop-types";

const base = styled.button`
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-size: 1em;
  cursor: pointer;
  background: transparent;
  border: ${(props) =>
    props.primary ? "none" : `2px solid ${props.theme.colors.primary}`};
  border-radius: 4px;
  color: ${(props) => (props.primary ? "white" : props.theme.colors.primary)};
  margin: 0.25em 0;
  padding: 0.5em;
`;

export const SquareButton = styled(base)`
  height: 3rem;
  min-width: 3rem;
  padding: 0;
  border: ${(props) => `1px solid ${props.theme.colors.lightGray}`};
  color: ${(props) => props.theme.colors.black};
  font-weight: 300;
  margin-right: 0.5rem;
`;

const Button = styled(base)`
  background: ${(props) => props.primary && props.theme.colors.primary};
  width: 100%;
`;

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
