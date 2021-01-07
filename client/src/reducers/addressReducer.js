import { GET_ADDRESSES, GET_ADDRESS, DELETE_ADDRESS } from "../action/Types";

const initialState = {
    addresses: [],
    address: {},
};

export default function (state = initialState, action) {
    switch(action.type) {

        case GET_ADDRESSES:
            return {
                ...state,
                addresses: action.payload,
            };

        case GET_ADDRESS:
            return {
                ...state,
                address: action.payload,
            };

        case DELETE_ADDRESS:
            return {
                ...state,
                addresses: state.addresses.filter(
                    (address) => address.id !== action.payload),
            };

       default:
           return state;
    }
}