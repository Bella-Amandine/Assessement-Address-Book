import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {updateAddress, getAddress} from "../../action/addressActions";


class UpdateAddress extends Component {

    constructor(){
        super();
        this.state = {
            id: "",
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

    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.getAddress(id, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors})
        }

        const {id, first_name, last_name, email, phone_number, address, country, city } = nextProps.address;
        this.setState({
            id,
            first_name,
            last_name,
            email,
            phone_number,
            address,
            country,
            city,
        })
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    onSubmit(e){
        e.preventDefault();
        const updatedAddress = {
            id: this.state.id,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            phone_number: this.state.phone_number,
            address: this.state.address,
            country: this.state.country,
            city: this.state.city,
        };

        this.props.updateAddress(updatedAddress, this.props.history)
    }

    render() {
        return (
            <main id="main-section">
                <div className="address">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h5 className="display-4 text-center pt-5 text-dark">{this.state.first_name} {this.state.last_name}</h5>
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

                                    <input className="btn btn-info btn-block" type="submit" value="Edit Address" />
                                </form>             
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
UpdateAddress.propTypes = {
    updateAddress: PropTypes.func.isRequired,
    getAddress: PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
    address : state.address.address.data,
})
export default connect(mapStateToProps, {updateAddress, getAddress})(UpdateAddress)
