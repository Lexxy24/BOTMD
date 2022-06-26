const fs = require("fs")
const chalk = require("chalk")

// Other
global.thum = "https://telegra.ph/file/7188012d573871aaf4fa0.jpg"
global.log0 = fs.readFileSync("./settings/neobotz.jpg")
global.thumb = fs.readFileSync("./settings/neobotz.jpg")
global.iklan = fs.readFileSync("./settings/iklan.jpg")
global.sewabot = fs.readFileSync("./settings/sewa.jpg")
global.qris = fs.readFileSync("./settings/qris.jpg")
global.err4r = "https://telegra.ph/file/7188012d573871aaf4fa0.jpg"
global.owner = ['62883845930691','6283845930691']
global.ownernumber = "6283845930691"
global.ownername = "Ezex Official"
global.namebot = "EnzBotzMD"
global.lolhuman = "YOUR_APIKEY"
global.rkyt = []
global.banUser = ['6283845930691@s.whatsapp.net']
global.ntilink = ['120363043965529911@g.us','120363022988111568@g.us']
global.wlcm = []
global.gcrevoke = ['19054091487-1424650263@g.us']
global.packname = "漏 Ezex || Official"
global.packname2 = "Lord_Ezez馃槑"
global.author = "Ezex_Dev"
global.sessionName = "session"
global.linkgrupss = "https://"
global.antitags = true
global.prefa = ['','!','.','馃惁','馃悿','馃椏']
global.mess = {
    success: '*Success!*',
    admin: '*Fitur Khusus Admin Group!*',
    botAdmin: '*Bot Harus Menjadi Admin Terlebih Dahulu!*',
    owner: '*Fitur Khusus Owner Bot*',
    group: '*Fitur Digunakan Hanya Untuk Group!*',
    private: '*Fitur Digunakan Hanya Untuk Private Chat!*',
    bot: '*Fitur Khusus Pengguna Nomor Bot*',
    wait: '*Silahkan Menunggu!*',
    linkm: 'Linknya Mana Kak?',
    ban: '*Kamu telah dibanned oleh owner, Jika ingin di unbanned chat owner*'
}
global.limitawal = {
    premium: "Infinity",
    free: 20,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 20
}
// Beli Di Zenz Yo
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Isi Api Mu Di sini
global.APIKeys = {
	'https://zenzapis.xyz': 'BagasPrdn',
}
//Thank Fax Bot
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
