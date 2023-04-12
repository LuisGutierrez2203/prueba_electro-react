import React from "react";
import "./Base.css";

export default function Base (props){
    return (

        
        
        <div id = "Laboratorio">
            <div id = "PanelVidrio">


            </div>
            <div id = "PanelDatos">
                {props.children}
            </div>



            
        </div>



    )
}