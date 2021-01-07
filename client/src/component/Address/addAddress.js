import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createAddress } from "../../action/addressActions";

class AddAddress extends Component {

    constructor(){
        super();
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            address: "",
            country: "",
            city: "",
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors})
        }
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    onSubmit(e){
        e.preventDefault();
        const newAddress = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            phone_number: this.state.phone_number,
            address: this.state.address,
            country: this.state.country,
            city: this.state.city,
        };

        this.props.createAddress(newAddress, this.props.history)
    }

    render() {

        return (
            <main id="main-section">
                <div className="address">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h5 className="display-4 text-center pt-5">Add a new Address</h5>
                                <hr />
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label>First Name : </label>
                                        <input className="form-control" name="first_name" type="text" value={this.state.first_name} onChange={this.onChange} />
                                    </div>

                                    <div className="form-group">
                                        <label>Last Name : </label>
                                        <input className="form-control " name="last_name" type="text" value={this.state.last_name} onChange={this.onChange}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Email : </label>
                                        <input className="form-control " name="email" type="email" value={this.state.email} onChange={this.onChange}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Phone Number : </label>
                                        <input className="form-control " name="phone_number" type="text" value={this.state.phone_number} onChange={this.onChange}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Address : </label>
                                        <input className="form-control form-control-lg" name="address" type="text" value={this.state.address} onChange={this.onChange}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Country : </label>
                                        <input className="form-control" name="country" type="text" value={this.state.country} onChange={this.onChange}/>
                                    </div>

                                    <div className="form-group">
                                        <label>City: </label>
                                        <input className="form-control" name="city" type="text" value={this.state.city} onChange={this.onChange}/>
                                    </div>

                                    <input className="btn btn-info btn-block" type="submit" value="Save Address" />
                                </form>             
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
AddAddress.propTypes = {
    createAddress : PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    errors: state.errors,
})
export default connect(mapStateToProps, {createAddress})(AddAddress);
