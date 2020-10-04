import styled from "@emotion/styled";

const Column = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  flex-basis: 100%;
  height: 50%;
`;

const HalfColumn = styled(Column)`
  max-width: 50%;
  flex-basis: 50%;
`;

export default Column;
