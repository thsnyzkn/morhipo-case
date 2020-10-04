import styled from "@emotion/styled";

const Column = styled.section`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    flex-direction: ${({ reversedInMobile }) =>
      reversedInMobile && "column-reverse"};
  }
`;

export default Column;
