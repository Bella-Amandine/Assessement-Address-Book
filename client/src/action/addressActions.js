import axios from "axios";
import { GET_ERRORS, GET_ADDRESSES, GET_ADDRESS, DELETE_ADDRESS } from "./Types";

export const createAddress = (address, history) => async(dispatch) => {
    try {
        await axios.post("http://localhost:3001/api/address", address);
        history.push("/addresses");

        dispatch({
            type: GET_ERRORS,
            payload: {},
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data,
        });
    }
};

export const getAddresses = () => async (dispatch) => {
    const res = await axios.get("http://localhost:3001/api/address");
    dispatch({
        type: GET_ADDRESSES, 
        payload: res.data.results,
    });
};

export const getAddress = (id, history) => async (dispatch) => {
    try {
        const res = await axios.get(`http://localhost:3001/api/address/${id}`);
        dispatch({
            type: GET_ADDRESS,
            payload: res.data,
        });
    } catch (error) {
        console.log(error)
    }
}

export const updateAddress = (address, history) => async(dispatch) => {
    try {
        await axios.patch("http://localhost:3001/api/address", address);
        history.push("/addresses");

        dispatch({
            type: GET_ERRORS,
            payload: {},
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data,
        });
    }
};


export const deleteAddress = (id) => async (dispatch) => {
    if(window.confirm("Are you sure you want to permanently delete this address?")){
        await axios.delete(`http://localhost:3001/api/address/${id}`);
        dispatch({
            type: DELETE_ADDRESS,
            payload: id,
        });
    }
};