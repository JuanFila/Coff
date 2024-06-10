import { ThemeProvider } from "styled-components"
import { themeColor } from "./styles/themes/default"
import { Home } from "./pages/home"
import { GlobalStye } from "./styles/global"
import { Form } from "./pages/Form"
import { Finish } from "./pages/Finish"

function App() {

  return (
    <ThemeProvider theme={themeColor}>
      <Finish/>
      <GlobalStye/>
    </ThemeProvider>
  )
}

export default App
