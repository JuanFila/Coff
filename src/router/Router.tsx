import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Form } from "../pages/Form";
import { Finish } from "../pages/Finish";

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/Finish" element={<Finish/>}/>
    </Routes>
  );
}