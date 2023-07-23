const pool = require("../../config/database")
module.exports = {
    createUser: (data, callback) => {
        pool.query(
            `insert into users(first_name, last_name, email, password, gender, number)
             values (?, ?, ?, ?, ?, ?)`,
            [
                data.first_name,
                data.last_name,
                data.email,
                data.password,
                data.gender,
                data.number,
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error)
                }
                return callback(null, results)
            }
        );
    },
    getUsers: callback => {
        pool.query(
            `select id, first_name, last_name, email, gender, number
             from users`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error)
                }
                return callback(null, results)
            }
        )
    },
    getUserById: (id, callback) => {
        pool.query(
            `select id, first_name, last_name, email, gender, number
             from users
             where id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callback(error)
                }
                return callback(null, results[0])
            }
        )
    },
    updateUser: (data, callback) => {
        pool.query(
            `update users
             set first_name=?,
                 last_name=?,
                 email=?,
                 password=?,
                 gender=?,
                 number=?
             where id = ?`,
            [
                data.first_name,
                data.last_name,
                data.email,
                data.password,
                data.gender,
                data.number,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error)
                }
                return callback(null, results)
            })
    },
    deleteUser: (data, callback) => {
        pool.query(
            `delete
             from users
             where id = ?`,
            [data.id],
            (error, results, fields) => {
                if (error) {
                    return callback(error)
                }
                return callback(null, results[0])
            })
    },
    getUserByEmail: (email, callback) => {
        pool.query(
            `select * from users where email = ?`,
            [email],
            (error, results, fields) => {
                if(error){
                    return callback(error);
                }
                return callback(null, results[0])
            }
        )
    }
}