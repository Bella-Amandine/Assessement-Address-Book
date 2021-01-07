const { createAddress, getAddressById, getAddresses, updateAddress, deleteAddress } = require('../controller/AddressController');

const router = require("express").Router();

router.post("/", createAddress);
router.get("/", getAddresses);
router.get("/:id", getAddressById);
router.patch("/", updateAddress);
router.delete("/:id", deleteAddress);

module.exports = router;