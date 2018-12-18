const orm = require('../config/orm');

const burger = {
    createBurg: val => new Promise((resolve, reject) => {
        orm.create('burger_name', val)
            .then((res) => {
                resolve(res);

            }).catch((err) => {
                reject(err);
            })


    }),
    allBurg: () => new Promise((resolve, reject) => {
        orm.read()
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {

                reject(err);
            })
    }),
    updateBurg: (val, id) => new Promise((resolve, reject) => {
        orm.update('burger', 'isDevoured', 'id', val, id)
            .then((res) => {
                console.log(res);
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            })

    }),

};

module.exports = burger;