module.exports.config = {
    name: "خروج",
    version: "1.0.0",
    hasPermssion: 2,
    credits: ".",
    description: "مغادرة المجموعة ",
    usePrefix: true,
    commandCategory: "Admin",
    usages: "out [id]",
    cooldowns: 10,
};

module.exports.run = async function({ api, event, args }) {
        if (!args[0]) return api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);
        if (!isNaN(args[0])) return api.removeUserFromGroup(api.getCurrentUserID(), args.join(" "));
  }