import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark" id="main-nav">
                <div class="container">
                    <Link to={"/" }class="navbar-brand">Address Book</Link>
                    <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <Link to={"/"} class="nav-link">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/addresses'} class="nav-link">My Addresses</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/new/address'} class="nav-link">New Address</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Navbar;
