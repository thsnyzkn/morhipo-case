import styled from "@emotion/styled";

export const BigImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  transition: transform 0.25s ease;
  cursor: zoom-in;
`;

export const SmallImage = styled.img`
  width: 50px;
  border: ${({ theme }) => `1px solid ${theme.colors.black}`};
  border-radius: 4px;
  margin-bottom: 1em;
`;

export const ImgContainer = styled.div`
  position: relative;
  padding-top: 133.3%;
  height: 0;
  overflow: hidden;
  border-radius: 6px;
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"]:checked ~ img {
    transform: scale(2);
    cursor: zoom-out;
  }
`;
