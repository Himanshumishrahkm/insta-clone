
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreatePost from "./pages/CreatePost";
import Feedinsta from "./pages/Feedinsta";

const App = () => {
  return (
   
    <BrowserRouter>
      <Routes>
         <Route path="/create" element={ <CreatePost/>}/>
         <Route path="/" element={ <Feedinsta/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App



