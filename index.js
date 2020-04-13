require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TELEGRAM_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token);

axios.get('https://api.exchangeratesapi.io/latest?base=USD&symbols=MXN')
    .then(function (response) {
        const mxnValue = response.data.rates.MXN.toFixed(2);
        const message = `El tipo de cambio de Dolar (🇺🇸) a Peso Mexicano (🇲🇽) es:\n ${mxnValue}`;
        console.log(message);
        bot.sendMessage(chatId, message);
    });
