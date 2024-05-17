import { ThemeProvider } from "styled-components"
import { themeColor } from "./styles/themes/default"
import { Home } from "./pages/home"
import { GlobalStye } from "./styles/global"

function App() {

  return (
    <ThemeProvider theme={themeColor}>
      <Home/>
      <GlobalStye/>
    </ThemeProvider>
  )
}

export default App
