const core = require('@actions/core');
const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config()
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.sendMessage(process.env.ID_CHAT, "Workflow ejecutado correctamente tras el último commit. Saludos " + core.getInput('who-to-greet'));

process.exit(0);