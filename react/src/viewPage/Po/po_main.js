import React from "react";
import ReactDOM from "react-dom";
import Po from "./po.js";

ReactDOM.render(        
    <div>
        <HashRouter>
            <Routes>
                <Route path ="/po" element={<Po />}/>
                
            </Routes>


        </HashRouter>
    </div>
, document.getElementById("root"));