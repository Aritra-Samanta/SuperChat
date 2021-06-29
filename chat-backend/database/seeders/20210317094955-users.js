'use strict';

const bcrypt = require('bcrypt')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Users', [
            {
                firstName: 'Aritra',
                lastName: 'Samanta',
                email: 'aritrasamanta17@gmail.com',
                password: bcrypt.hashSync('secret', 10),
                gender: 'male'
            },
            {
                firstName: 'Eren',
                lastName: 'Yeager',
                email: 'attacktitan@gmail.com',
                password: bcrypt.hashSync('aot123', 10),
                gender: 'male'
            },
            {
                firstName: 'Alice',
                lastName: 'Zuberg',
                email: 'alicization2020@gmail.com',
                password: bcrypt.hashSync('alicesao', 10),
                gender: 'female'
            }
        ])
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Users', null, {});
    }
};