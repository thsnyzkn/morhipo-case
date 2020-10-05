import styled from "@emotion/styled";

import PropTypes from "prop-types";

const BreadCrumbItem = styled.li`
  margin-right: 0.5em;
`;

BreadCrumbItem.propTypes = { children: PropTypes.node.isRequired };

export default BreadCrumbItem;
