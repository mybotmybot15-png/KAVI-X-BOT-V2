const fs = require('fs')
const chalk = require('chalk')

global.sessionID = process.env.SESSIONID || "KAVI-X-SESSION-ID~v4hUxSrL#Z7mpm1MtiZK2Fy_5FqYC_p2ODLu4chbvm_hy8ccQR7Y"
global.mongodburi = process.env.MONGODB_URI || "mongodb+srv://ketkshqAqjXygEF5:ketkshqAqjXygEF5@freeuri.dmkyoml.mongodb.net/akilapathum94788364308?retryWrites=true&w=majority&appName=freeuri"
global.botname = process.env.BOTNAME || "PATHUM MD"
global.ownernumber = process.env.OWNERNUMBER || "94788364308"
global.ownername = process.env.OWNERNAME || "PATHUM MD"
global.packname = process.env.PACKNAME || "PATHUM MD"
global.author = process.env.AUTHOR || "PATHUM MD"

global.creator = process.env.CREATOR || "94702128378@s.whatsapp.net"
global.botprefix = process.env.BOTPREFIX || "."
global.restart = process.env.RESTART || true
global.websitex = process.env.WEBSITEX || "https://kavi-x-bot-login.up.railway.app/"
global.wagc = process.env.WAGC || "https://chat.whatsapp.com/CG9f0paHJzwDImXiydfuht"
global.botscript = process.env.BOTSCRIPT || "https://github.com/KaviDeveloperSe/KAVI-X-BOT"
global.botlogo = process.env.BOTLOGO || "https://raw.githubusercontent.com/KaviDeveloperSe/KAVI-X-BOT-DB/refs/heads/main/kavix03.png"

global.port = process.env.PORT || 3000

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
