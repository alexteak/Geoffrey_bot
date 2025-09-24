const token = "7507152236:AAG4Gq8O0gBZmj66jjJvC_ByGlPCryf8OHQ"

const TApi = require("node-telegram-bot-api")

const bot = new TApi(token, {polling: true});

bot.on("message", msg => {
    console.log("get")
    const text = msg.text;
    const chatId = msg.chat.id;
    const chatname = msg.chat.title;
    let words = text.split(" ")
    if(words.includes("make") && (words.includes("sandwich") || words.includes("sandwich?"))){
        bot.sendMessage(chatId, "NO")
    }


        console.log(chat.id)
    }
)



