import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Landing extends Component {
    render() {
        return (
            <header id="home-section">
                <div class="dark-overlay">
                    <div class="home-inner container">
                        <div class="row justify-content-center">

                            <div class="col-lg-12 d-lg-block align-self-center">
                                <h1 class="display-4 text-center">
                                    Keep <strong>Your Addresses </strong> Safe and Easly
                                    <strong> Accessible</strong>
                                </h1>
                            </div>

                            <div class="col-lg-4 d-lg-block pt-5">
                                <Link to={'/new/address'} className="btn btn-block btn-lg btn-primary text-center">Start Now</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Landing;
