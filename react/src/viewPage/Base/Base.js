import React from "react";

import Car1 from "../../assets/carro1.png";
import Car2 from "../../assets/carro2.png";
import "./Base.css";


export default function Base (frames, inputs){
    return (
        <div id = "Panel_principal">
            <div id="Panel_laboratorio" className="row">
                <div className="col">
                    <img id="Car1" src={Car1} />
                    <img id="Car1" src={Car2} />
                </div>

            </div>

            <div id="Panel_datos" className="row">
                <div className="col-7">

                </div>

                <div className = "col-1">

                </div>

                <div className="col-4">

                </div>

                

            </div>



        </div>
        
    )
}