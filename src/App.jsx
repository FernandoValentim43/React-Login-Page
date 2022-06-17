import Home from "./pages/Home.jsx";
import Sucess from "./pages/Succes.jsx";

import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/sucess" exact element={<Sucess/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
