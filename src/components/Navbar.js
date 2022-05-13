import React from 'react';
import logo from '../assets/rick-and-morty-logo.png';

export function BootstrapNavbar(){
    return(
        
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
            <div className="container mx-auto">
                <a className="navbar-brand" href="index.html">
                    <img src={logo} alt='logo' width="180px"></img>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="index.html">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="index.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="index.html">Action</a></li>
                        <li><a className="dropdown-item" href="index.html">Another action</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="index.html">Something else here</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                    </li>
            </ul> */}
                {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Encuentra tu personaje" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form> */}
                </div>
            </div>
        </nav>
    )
}

export default function Navbar() {
    return(
        <>
            <BootstrapNavbar/>
        </>
    )
}