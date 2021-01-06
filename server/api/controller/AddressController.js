const { create, getAddresses, getAddressById, updateAddress, deleteAddress } = require('../service/AddressService');

module.exports = {
    createAddress: (req, res) => {
        const body = req.body;
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Internal server error"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },

    getAddressById: (req, res) => {
        const id = req.params.id;
        getAddressById(id, (err,results) => {
            if(err) {
                console.log(err);
                return res.status(500).json({
                    message: "Internal server error"
                });
            }
            if(!results){
                return res.status(404).json({
                    success: 0,
                    message: "Address not Found"
                });
            }

            return res.json({
                success: 1,
                data: results
            });
        });
    },

    getAddresses: (req, res) => {
        getAddresses((err, results) => {
            if(err) {
                console.log(err);
                return res.status(500).json({
                    message: "Internal server error"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },

    updateAddress: (req, res) => {
        const body = req.body;

        updateAddress(body, (err, results) => {
            if(err) {
                console.log(err);
                return res.status(500).json({
                    status: 0,
                    message: "Internal Server Error"
                });
            }

            if(!results) {
                return res.status(500).json({
                    message: "Failed to update address"
                });
            }

            return res.status(200).json({
                success: 1,
                message: "Address successfully updated"
            })
        })
    },

    deleteAddress: (req, res) =>{
        const data = req.body;
        deleteAddress(data, (err, results) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    status: 0,
                    message: "Internal Server Error"
                });
            }

            return res.status(200).json({
                success: 1,
                message: "Address successfully deleted"
            });
        });
    }
}