import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import  "./po.css";
import CartaSmith from "../../assets/CartaSmith.jpg";
import Ad26 from "../../assets/ad620.png";


import CaidaLibre from "../CaidaLibre/CaidaLibre.js";
import Base from "../Base/Base.js";




const Home = () =>{
    return (

        <div>
            <nav className="nav flex-column">
                <ul className="nav-link active" aria-current="page"  ><Link id = "linkf" to = "/">Home</Link></ul>
                <ul className="nav-link active" aria-current="page"  ><Link id = "linkf" to = "/CaidaLibre">Caida Libre</Link></ul>

            </nav>
        </div>
    );
}




export default function po (){
    return (
        <React.Fragment>
            <HashRouter>
                <Routes>
                    <Route path ="/" element={<Home />}/>
                    <Route path ="/CaidaLibre" element={<Base />}/>
                    

                </Routes>


            </HashRouter>
        </React.Fragment>

    )

}