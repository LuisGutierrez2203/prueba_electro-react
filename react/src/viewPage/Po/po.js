import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import  "./po.css";


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

const Carrusel = () => {
    return(

        <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Características</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Precios</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link disabled">Deshabilitado</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

        </React.Fragment>



    )





}



export default function Po (){
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