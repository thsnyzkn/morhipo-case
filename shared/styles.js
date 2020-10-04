import { css, Global } from "@emotion/core";

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        min-width: 100vw;
        min-height: 100vh;
        margin: 0;
        padding: 0;
        font-family: "Open Sans", sans-serif;
        font-weight: 400;
        overflow: auto;
        font-size: 16px;
        background-color: #f7f7f7;
      }
    `}
  />
);
