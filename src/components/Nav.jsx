import React from "react";


export default function Nav() {
    return (
        <nav className="navbar navbar-expand-sm">
            <div className="container-fluid">             
                <a className="navbar-brand" href="#"><img src="/wiologo3.png" /> Work It Out</a> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Tracker</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Account</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}