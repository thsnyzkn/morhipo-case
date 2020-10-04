import styled from "@emotion/styled";

export const BigImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const SmallImage = styled.img`
  width: 50px;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 2em;
`;

export const ImgContainer = styled.div`
  position: relative;
  padding-top: 133.3%;
  height: 0;
  overflow: hidden;
  border-radius: 4px;
`;
