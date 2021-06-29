'use strict';

const models = require('../../models')
const User = models.User
const Chat = models.Chat
const ChatUser = models.ChatUser
const Message = models.Message

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
        */

        const users = await User.findAll({ limit: 1 })

        const chat = await Chat.create()

        await ChatUser.bulkCreate([
            {
                chatId: chat.id,
                userId: users[0].id
            },
        ])

        await Message.bulkCreate([
            {
                message: 'Welcome to SuperChat !',
                chatId: chat.id,
                fromUserId: users[0].id
            },
            {
                message: 'I am the admin of this chat app.',
                chatId: chat.id,
                fromUserId: users[0].id
            },
        ])
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
