import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import { getAddresses } from "../../action/addressActions";
import AddressItem from "./addressItem";


class AddressItemsView extends Component {

    componentDidMount(){
        console.log("Wouoohuu, it worked. I am inside did mount")
        this.props.getAddresses();
    }

    render(){
        const { addresses } = this.props.address
        return (
            <div>

                <header id="all-address-main-header" class="py-2 ext-white mb-3">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <h1><i class="fas fa-address-book"></i>Address</h1>
                            </div>
                        </div>
                    </div>
                </header>
  
                <section id="addresses">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="card">
                                    <div class="card-header">
                                    <Link to={`/new/address`} class="btn btn-primary"><i class="fas fa-plus"></i> New Address</Link>
                                    </div>
                                    <table class="table table-striped responsive-table">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th>Names</th>
                                                <th>Email</th>
                                                <th>Phone Number</th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {addresses.map((address) => (
                                                <AddressItem key={address.id} address={address} />
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
AddressItemsView.propTypes = {
    getAddresses: PropTypes.func.isRequired,
    address: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
    address: state.address
})
export default connect(mapStateToProps, {getAddresses})(AddressItemsView);