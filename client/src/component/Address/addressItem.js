import React, { Component } from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteAddress } from "../../action/addressActions";

class AddressItem extends Component {

    onDeleteClick = (id) => {
        this.props.deleteAddress(id);
    }

    render() {
        const { address } = this.props
        return (
            <tr>
                <td>{ address.first_name} { address.last_name}</td>
                <td>{ address.email }</td>
                <td>{ address.phone_number}</td>
                <td>
                    <Link to={`/update/address/${address.id}`} className="btn btn-warning"> 
                        <i class="fas fa-angle-double-right" /> Details
                    </Link>
                </td>
                <td>
                    <Link onClick={this.onDeleteClick.bind(this, address.id)} className="btn btn-danger"> 
                        <i class="fas fa-trash" />Delete
                    </Link>
                </td>
            </tr>
        )
    }
}
AddressItem.propTypes = {
    deleteAddress: PropTypes.func.isRequired,
}
export default connect(null, {deleteAddress})(AddressItem);
