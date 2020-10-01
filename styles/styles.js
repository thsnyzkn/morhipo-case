import { css, Global } from "@emotion/core";
import styled from "@emotion/styled";

export const globalStyles = (
  <Global
    styles={css`
      * {
        box-sizing: content-box;
      }
      html,
      body {
        margin: 0.5rem 2rem;
        min-height: 100%;
        font-family: Roboto, sans-serif;
        font-weight: 400;
        overflow: scroll;
        background-color: #f7f7f7;
      }
      h2 {
        margin: 0;
        padding: 0;
      }
    `}
  />
);
