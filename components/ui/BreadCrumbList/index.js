import styled from "@emotion/styled";
import PropTypes from "prop-types";

const BreadCrumbList = styled.ol`
  @media only screen and (max-width: 960px) {
    display: none;
  }
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  margin-bottom: 0.5em;
  list-style-type: none;
`;

BreadCrumbList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BreadCrumbList;
