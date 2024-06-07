import { ThemeProvider } from "styled-components"
import { themeColor } from "./styles/themes/default"
import { Home } from "./pages/home"
import { GlobalStye } from "./styles/global"
import { Form } from "./pages/Form"

function App() {

  return (
    <ThemeProvider theme={themeColor}>
      <Form/>
      <GlobalStye/>
    </ThemeProvider>
  )
}

export default App
