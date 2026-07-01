import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import CreatePost from "./Pages/CreatePost";
import Feed from "./Pages/Feed";

const app = () =>{
  return(
    <Router>
      <Routes>
        <Route path = "/" element =  {<CreatePost/>} />
        <Route path = "/feed" element = {<Feed/>} />
      </Routes>
    </Router>
  )
}

export default app;