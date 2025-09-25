const token = "7507152236:AAG91ghuQEm_HDiS5KKQCwSxYUE45vtD7-A"

const TApi = require("node-telegram-bot-api")

const bot = new TApi(token, {polling: true});

const answers = ["NO", "NO!", "NoOOooOOo", "Die a violent death", "Not a chance", "I did it", "What's a sandwich?"]

let looper = setInterval(function(){
    bot.sendMessage(1210911861, "awaiting messages")
}, 10000);

bot.on("message", msg => {
    console.log("get")
    const text = msg.text;
    const chatId = msg.chat.id;
    const chatname = msg.chat.title;
    const msgId = msg.message_id;
    let words = text.split(" ")
    if(words.includes("make") && (words.includes("sandwich") || words.includes("sandwich?"))){
        bot.sendMessage(chatId, answers[Math.floor(Math.random()*answers.length)])
        console.log("responded")
    }
    if(words.includes("infobruh")){
        bot.sendMessage(chatId, chatId)
        console.log("responded")
    }
    if(chatId == 1210911861){
        setTimeout(function(){
        bot.deleteMessage(chatId,msgId)}, 3000)
    }
    }
)
