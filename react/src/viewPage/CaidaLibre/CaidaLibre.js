import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Routes, Link } from "react-router-dom";

import Base from "../Base/Base.js";


export default function CaidaLibre(){
    return (
        <React.Fragment>
           <Base>
           <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input type="text" class="form-control" placeholder="Nombre de usuario" aria-label="Nombre de usuario" aria-describedby="basic-addon1"/>
            </div>

        
           
           </Base>



        </React.Fragment>



    );
}
