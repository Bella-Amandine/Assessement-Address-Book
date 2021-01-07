import pool from '../../config/database';

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into address(first_name, last_name, email, phone_number, address, country, city)
                    values(?,?,?,?,?,?,?)`,
                    [data.first_name, data.last_name, data.email, data.phone_number, data.address, data.country, data.city],
                    (error, results, fields) => {
                        if(error){
                            return callBack(error)
                        }
                        return callBack(null, results)
                    }
        );
    },

    getAddresses: callBack => {
        pool.query(
            `select id,first_name,last_name,email,phone_number,address,country,city from address`,
            [],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getAddressById: (id, callBack) => {
        pool.query(
            `select id,first_name,last_name,email,phone_number,address,country,city from address where id = ?`,
            [id],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results[0])
            }
        )
    },

    updateAddress: (data, callBack) => {
        pool.query(
            `update address set first_name = ?, last_name = ?, email = ?, phone_number = ?, address = ?, country = ?, city = ? where id = ?`,
                    [data.first_name, data.last_name, data.email, data.phone_number, data.address, data.country, data.city, data.id],
                    (error, results, fields) => {
                        if(error){
                            return callBack(error)
                        }
                        return callBack(null, results[0])
                    }
        );
    },

    deleteAddress: (id, callBack) => {
        pool.query(
            `delete from address where id = ?`,
                    [id],
                    (error, results, fields) => {
                        if(error){
                            return callBack(error)
                        }
                        return callBack(null, results[0]);
                    }
        );
    },

}




