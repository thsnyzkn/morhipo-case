/** @jsx jsx */
import { jsx } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import { globalStyles } from "../styles/styles";

const theme = {
  colors: {
    primary: "hotpink",
    orange: "#f7931e",
    lightGray: "#f1f1f1",
    danger: "#e82222",
    mutedText: "#6e6c6c",
    default: "#c3c3c3",
    primary: "#7a4792",
    contentBg: "#fff",
    bodyBg: "#f7f7f7",
    text: "#000",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      {globalStyles}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
