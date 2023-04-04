import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Routes, Link } from "react-router-dom";


export default function Base (props){
    return (
        <div id = "entradas">
            <h3>Ventada de entrada</h3>
            {props.children}
            

        </div>



    )
}