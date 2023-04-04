import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import  "./po.css";
import Base from "../Base/Base.js";


const Home = () =>{
    return (
        <div>
            <Link to= "/"><ul>Hola Home</ul></Link>
            <Link to="/Number"><ul>Number</ul></Link>
            <Link to="/Entradas"><ul>Entradas</ul></Link>

        </div>




    );
}


const Number = () =>{
    return (
        <div>
            <Link to= "/">Hola Home</Link>


        </div>




    );
}

const Entradas = () => {


    return (
        <div>
            <Base>
                <div>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Navbar</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Features</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Pricing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled">Disabled</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </Base>
            

        </div>        
    )
}



export default function po (){
    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route path ="/" element={<Home />}/>
                    <Route path ="Number" element = {<Number />}/>
                    <Route path ="Entradas" element = {<Entradas />}/>

                </Routes>


            </HashRouter>
        </div>

    )

}