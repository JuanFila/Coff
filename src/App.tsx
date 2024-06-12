import { ThemeProvider } from "styled-components";
import { themeColor } from "./styles/themes/default";
import { GlobalStye } from "./styles/global";
import { Router } from "./router/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={themeColor}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStye />
    </ThemeProvider>
  );
}

export default App;
