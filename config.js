const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_37_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU0LFxuICAgICAgICA2NixcbiAgICAgICAgMTg5LFxuICAgICAgICA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTUsXG4gICAgICAgIDc3LFxuICAgICAgICA2NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjksXG4gICAgICAgIDgyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTYzLFxuICAgICAgICA0NSxcbiAgICAgICAgNCxcbiAgICAgICAgODQsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQsXG4gICAgICAgIDQsXG4gICAgICAgIDg1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMixcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjksXG4gICAgICAgIDUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDcwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUwLFxuICAgICAgICA0NixcbiAgICAgICAgODAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NixcbiAgICAgICAgMTg0LFxuICAgICAgICA0NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjksXG4gICAgICAgIDQzLFxuICAgICAgICA0OCxcbiAgICAgICAgODcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY5LFxuICAgICAgICA0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc4LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzQsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjEzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDc5LFxuICAgICAgICA0NSxcbiAgICAgICAgMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDksXG4gICAgICAgIDMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjksXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDY4LFxuICAgICAgICA0MCxcbiAgICAgICAgODMsXG4gICAgICAgIDk2LFxuICAgICAgICA0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1LFxuICAgICAgICA1MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTExLFxuICAgICAgICA5MixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI2LFxuICAgICAgICA2NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMixcbiAgICAgICAgMTY0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk9RcFVsS1l0eThNSEJESG9RZEwya0hrOVlIdVJ4VExNditYdzd6djdMRlU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDE2NDc1NzYyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1QUQ2OTMwRkU2MTREQjMzMDdGQjUyNkU4MEJERUQwOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA1Mzk0NTFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0MTY0NzU3NjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZDRjFDN0RBNDNFQURDODk3OEMwQzU3M0JGOTEyM0FDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDUzOTQ1MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJoUVVlNnQtWVRZcUJBUVZNZ251UnFBXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ2YTczNDQ2LTg1ZDUtNGJhNy04YWVjLTBhMWU2NGI3NmU2N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzQsXG4gICAgICAxMTIsXG4gICAgICA5MSxcbiAgICAgIDEwNCxcbiAgICAgIDIyMCxcbiAgICAgIDg1LFxuICAgICAgMjUsXG4gICAgICAxMzMsXG4gICAgICA1NSxcbiAgICAgIDYsXG4gICAgICA5NCxcbiAgICAgIDIzNyxcbiAgICAgIDE0NCxcbiAgICAgIDE0NixcbiAgICAgIDE5NCxcbiAgICAgIDE3OSxcbiAgICAgIDQzLFxuICAgICAgMTYxLFxuICAgICAgMTcxLFxuICAgICAgMTg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg2LFxuICAgICAgMTY3LFxuICAgICAgMTA2LFxuICAgICAgNjgsXG4gICAgICAxMzMsXG4gICAgICA1NixcbiAgICAgIDExOSxcbiAgICAgIDYsXG4gICAgICA4NCxcbiAgICAgIDE3MSxcbiAgICAgIDI1LFxuICAgICAgNzcsXG4gICAgICAxMDksXG4gICAgICAxNjgsXG4gICAgICAyNDAsXG4gICAgICAxMSxcbiAgICAgIDEwNyxcbiAgICAgIDIwNSxcbiAgICAgIDg5LFxuICAgICAgMjE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjUzSFpMVEYzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MTY0NzU3NjI6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTEyNDg1NjYzMjc3MTU1OjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi2K3Zjtiz24zZgNmQ2YDZgNio2Ywg2LHZjtin2KzZvtmA2YDZj9mA2YjYqtmM8J+WpPCfpYBcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMT29zL29HRUxXeXRiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInVVNjlWZWxlSlJMdlRhV3gvMS9IREF6MnpYL1IyMm5CdDNzS2JvWnR1ZzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieUtManVYWHV1T1pmN0xLSVVVTUQvc3ZKSVRma2RrYU9zV1dabnJxZWt4cHdXNms1U0d0ZXlmWno3SnF0ZUpLS2dWNUhNU3JHREUxeEZGMXoyanNkQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY2VIT2dXWU14Z1lBZ2tDSlhBNit1dnhDeFFDMElVbnFwQWVrMWc1a1ROVWYxVThlVml1dWpvTGN4YmorVDBkZzZQZy85UXRiOGVrODJleWRhWFZFQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDE2NDc1NzYyOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTM5NDQ5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQitZXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCK1kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZSnkrVlIwTzV3T29ya0J0V2VFTmg1aERuRCs0bzBEM2dJUDAxMUtKQTZJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NjczMDYwMzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDUzOTQ1MDEyN1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
