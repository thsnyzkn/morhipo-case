import styled from "@emotion/styled";

const InnerContainer = styled.section`
  background: white;
  padding: 1em;
  border: 1px solid white;
  border-radius: 6px;
  margin-bottom: 0.5em;
`;

export const SmallContainer = styled(InnerContainer)`
  background: ${({ transparent }) => transparent && "transparent"};
  border-color: ${({ transparent }) => transparent && "transparent"};
  display: flex;
  padding: 0;
`;

export default InnerContainer;
