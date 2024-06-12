import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Form } from "../pages/Form";
import { Finish } from "../pages/Finish";
import { DefaultLayout } from "../layout";

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/Finish" element={<Finish/>}/>
      </Route>
    </Routes>
  );
}