const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "بوت",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "القروي العشوائي",
  description: "gibot",
  usePrefix: false,
  commandCategory: "ai",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["👀"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == " ")) {
     return api.sendMessage("🐢", threadID);
   };

    
   


   




   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️🥺 الكتكوت ليش زعلان", threadID);
   };

   if ((event.body.toLowerCase() == "همم") || (event.body.toLowerCase() == "هممم")) {
     return api.sendMessage("️همم", threadID);
   };

   if ((event.body.toLowerCase() == "ثباحو") || (event.body.toLowerCase() == "ثبح") || (event.body.toLowerCase() == "صباحو")) {
     return api.sendMessage("️ثباحو 🤭", threadID);
   };




   

   
  
   

   

   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("لا اعلم ما المضحك لكن ساضحك ايضا🤣", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("احشم 😳", threadID);
   };



   

   



   

   
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
