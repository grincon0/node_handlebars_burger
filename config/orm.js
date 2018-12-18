const connection = require('../config/connection');

const orm = {
    create: (name, val) => new Promise((resolve, reject) => {
        connection.query(
            'INSERT INTO burger SET ?',
            {
                burger_name: val,
            
            },
            (err, res) => {
                if (err) reject(err);
                resolve('Burger has been added!')
                

            },
            
            );
    }),
    read: () => new Promise((resolve, reject) => {
        connection.query(`SELECT * from burger`, (err, res) => {
                if (err) reject(err);
                resolve(res);
            }
            
        );
    }),
    update: (table, colName, id, v, v2) => new Promise((resolve, reject) => {
        connection.query(`UPDATE ${table} SET ${colName} = ${v} WHERE ?`, {
            id: v2
        },
            (err, res) => {
                if (err) reject(err);
                resolve('Updated');
            },
        );

    }),
    delete: (val, table) => new Promise(() => {
        connection.query(
            `DELETE FROM ${table} WHERE ?`,
            {
                burger_name: val
            },
            (err, res) => {
                if (err) reject(err);
                resolve('Burger deleted');
            }
        );

    }),


};


module.exports = orm;