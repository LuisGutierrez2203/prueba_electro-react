import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Routes, Link } from "react-router-dom";


export default function Base (props){
    return (

        
        
        <div id = "Laboratorio">
            <div id = "PanelVidrio">


            </div>
            <div id = "PanelDatos">

            </div>



            {props.children}
        </div>



    )
}