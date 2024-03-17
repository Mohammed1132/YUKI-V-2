module.exports.config = {
name: "سبام",
	version: "",
	hasPermssion: 2,
	credits: "القروي",
	description: "لا تجرب هذا الامر",
  usePrefix: true,
	commandCategory: "test",
	usages: "",
	cooldowns: 5,
	dependencies: "",
};

module.exports.run = function ({ api, event, Users }) {
	var { threadID, messageID } = event;
	var k = function (k) { api.sendMessage(k, threadID)};

	//*vonglap
	
for (i = 0; i < 200; i++) {
 k("🐈");
}
	
	}
	