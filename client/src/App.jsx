import React from "react";
import Products from "./components/Products"
import {Routes, Route} from "react-router-dom"

function App(){
    return(
        <div>
           <Routes>
            <Route path ="/" element={< Products/>}/>
           </Routes>
        </div>
    )
};


export default App;
