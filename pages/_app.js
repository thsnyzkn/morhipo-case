import { ThemeProvider } from "emotion-theming";
import "react-toastify/dist/ReactToastify.css";
import { globalStyles } from "../shared/styles";
import { theme } from "../shared/theme";
import "normalize.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      {globalStyles}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
