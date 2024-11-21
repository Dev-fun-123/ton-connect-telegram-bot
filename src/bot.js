const TelegramBot = require('node-telegram-bot-api');

const token = '7610000015:AAG5av5x8Zno4wPQBtU33rbXZA1KCyr7Nv8';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const message = 'Welcome! Please connect your wallet using this link:';

    // Liên kết đến Telegram Mini App của bạn
    const miniAppLink = 'https://t.me/trsTon_mini_app_bot'; // Đảm bảo là link Telegram đúng

    bot.sendMessage(chatId, message, {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Open Mini App',  // Nút để mở Mini App
                        url: miniAppLink        // Liên kết đến mini app của bạn
                    }
                ]
            ]
        }
    });
});
