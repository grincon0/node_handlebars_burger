const connection = require('../config/connection');

const orm = {
    create: (name, val) => new Promise((resolve, reject) => {
        connection.query(
            'INSERT INTO burger SET ?',
            {
                [name]: val,
                devour: false,

            },
            (err, res) => {
                if (err) reject(err);
                resolved('Burger has bee added!')

            },


        );



    }),
    read: val => new Promise(() => {
        connection.query(`SELECT ${val} from burger`,
            (err, res => {
                if (err) reject(err);
                resolved(res);

            })

        )

    }),
    update: (table, colName, id, v, v2 ) => new Promise((resolve, reject)=>{
        connection.query(`UPDATE ${table} SET ${colName} = ${v} WHERE ?`,{
            idName = v2
        },
        (err,res) => {
            if(err) reject(err);
            resolve('Updated');
        },
        );

    }),
    delete: (val,table) => new Promise(()=>{
        connection.query(
            `DELETE FROM ${table} WHERE ?`,
            {
                burger_name: val
            },
            (err, res) => {
                if(err) reject(err);
                resolve('Burger deleted');
            }
        );

    }),


};


module.exports = orm;