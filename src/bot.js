const TelegramBot = require('node-telegram-bot-api');

const token = '7610000015:AAG5av5x8Zno4wPQBtU33rbXZA1KCyr7Nv8';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Welcome! Please connect your wallet using this link: https://ton-connect-telegram-bot.onrender.com');
});
