import styled from "@emotion/styled";

const GridContainer = styled.main`
  max-width: 1120px;
  display: grid;
  gap: 1rem;
  margin: 1em auto;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "image detail";
  @media (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-areas:
      "image"
      "detail";
    margin: 1em;
    max-width: 100vw;
  }
`;

export default GridContainer;
