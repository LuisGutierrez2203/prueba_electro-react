import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import  "./po.css";

const Home = () =>{
    return (
        <div>
            <Link to= "/"><ul>Hola Home</ul></Link>
            <Link to="/Number"><ul>Number</ul></Link>


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



export default function po (){
    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route path ="/" element={<Home />}/>
                    <Route path ="Number" element = {<Number />}/>


                </Routes>


            </HashRouter>
        </div>

    )

}