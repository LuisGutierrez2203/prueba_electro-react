import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import  "./po.css";
import CartaSmith from "../../assets/CartaSmith.jpg";
import Ad26 from "../../assets/ad620.png";




const Home = () =>{
    return (

        <div>
            <nav className="nav flex-column">
                <ul className="nav-link active" aria-current="page"  ><Link id = "linkf" to = "/">Caida Libre</Link></ul>
                <ul className="nav-link active" aria-current="page"  ><Link id = "linkf" to = "/Carrusel">Armonico Simple</Link></ul>

            </nav>
        </div>
    );
}

const Carrusel = () => {
    return (
        <div id="rotar">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <div className="card" data-bs-interval="10000" id="carta">
                            <img src={CartaSmith} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div> 
                    </div>

                    <div className="carousel-item " data-bs-interval="10000">
                        <div className="card" data-bs-interval="10000" id="carta">
                            <img src={CartaSmith} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div> 
                    </div>

                    <div className="carousel-item " data-bs-interval="10000">
                        <div className="card" data-bs-interval="10000" id="carta">
                            <img src={CartaSmith} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div> 
                    </div>
                </div>
                <div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </div>
    )
}

const C = () => {
    return(
        <div id="rotar">
            <div className="carousels">
                <div className="carousel-items">
                    <div className="card" data-bs-interval="10000" id="carta">
                        <img src={CartaSmith} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div> 
                </div>
                <div className="carousel-items">
                    <div className="card" data-bs-interval="10000" id="carta">
                        <img src={Ad26} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div> 
                </div>

                <div className="carousel-items">
                    <div className="card" data-bs-interval="10000" id="carta">
                        <img src={CartaSmith} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div> 
                </div>

                <div className="carousel-items">
                    <div className="card" data-bs-interval="10000" id="carta">
                        <img src={Ad26} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div> 
                </div>


                <div className="carousel-items">
                    <div className="card" data-bs-interval="10000" id="carta">
                        <img src={CartaSmith} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div> 
                </div>


                <div className="carousel-items">
                    <div className="card" data-bs-interval="10000" id="carta">
                        <img src={Ad26} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div> 
                </div>


                <div className="carousel-items">
                    <div className="card" data-bs-interval="10000" id="carta">
                        <img src={CartaSmith} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div> 
                </div>
            </div>

        </div>
    )


}

export default function po (){
    return (
        <React.Fragment>
            <HashRouter>
                <Routes>
                    <Route path ="/" element={<Home />}/>
                    <Route path ="/Carrusel" element={<Carrusel />}/>
                    

                </Routes>


            </HashRouter>
        </React.Fragment>

    )

}