import { ThemeProvider } from "emotion-theming";
import { globalStyles } from "../shared/styles";
import { theme } from "../shared/theme";
import normalize from "normalize.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      {globalStyles}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
