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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_39_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTcwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUzLFxuICAgICAgICA2MSxcbiAgICAgICAgODMsXG4gICAgICAgIDQ5LFxuICAgICAgICA0OCxcbiAgICAgICAgNjksXG4gICAgICAgIDQwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDc5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDg3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMSxcbiAgICAgICAgNDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAxLFxuICAgICAgICA1OSxcbiAgICAgICAgMixcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDU3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDgzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTksXG4gICAgICAgIDg0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIyLFxuICAgICAgICA1NixcbiAgICAgICAgOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NixcbiAgICAgICAgODQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODMsXG4gICAgICAgIDYwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDYsXG4gICAgICAgIDExMixcbiAgICAgICAgNTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMCxcbiAgICAgICAgNixcbiAgICAgICAgMTE0LFxuICAgICAgICA0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA4OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDYzLFxuICAgICAgICA2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NixcbiAgICAgICAgNjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDYyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg1LFxuICAgICAgICA3NixcbiAgICAgICAgMSxcbiAgICAgICAgNDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTksXG4gICAgICAgIDI4LFxuICAgICAgICAzNyxcbiAgICAgICAgMixcbiAgICAgICAgNzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJBYzdxUFZ0cFlZTnhmNlprZFpNMVE1eXNzMzRma2ZrUFV5RHRkNWlZcFpzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzEwNzg0NTQzM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNkVGMkM3OEVDMjUxRkJGM0Q2NjRFQTc3QkNCNjZCNDRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTY4NzgwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlpKSjZnRUtCUXlXT2JORTRrbGR0WmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGQyNGY2ZWMtZmUyNC00YWNkLTk5M2EtMWVjN2RmZGM4ZmI5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MixcbiAgICAgIDE4NyxcbiAgICAgIDE5MSxcbiAgICAgIDE4NCxcbiAgICAgIDIzOSxcbiAgICAgIDE2NyxcbiAgICAgIDgzLFxuICAgICAgMjYsXG4gICAgICAxNzEsXG4gICAgICAxNixcbiAgICAgIDEzNCxcbiAgICAgIDkzLFxuICAgICAgMTQ0LFxuICAgICAgODYsXG4gICAgICAyNDIsXG4gICAgICAxMjYsXG4gICAgICAzLFxuICAgICAgMTgyLFxuICAgICAgMzIsXG4gICAgICAxMDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDksXG4gICAgICAyMTMsXG4gICAgICAxMTQsXG4gICAgICAxOTgsXG4gICAgICAzNixcbiAgICAgIDU2LFxuICAgICAgMTY2LFxuICAgICAgMTA4LFxuICAgICAgMjMsXG4gICAgICAxMDMsXG4gICAgICAxNzMsXG4gICAgICA5NyxcbiAgICAgIDIyLFxuICAgICAgMjAxLFxuICAgICAgMTY0LFxuICAgICAgNTMsXG4gICAgICAxNjUsXG4gICAgICAxMDksXG4gICAgICA0NyxcbiAgICAgIDEwMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXRVhDN1g3RVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTA3ODQ1NDMzOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTaGVoemFkYSBBcmhhbVwiLFxuICAgIFwibGlkXCI6IFwiMzE3MjI2OTU1OTgzMjE6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMSzF0ZVlGRU1iaW5yUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkY0ZU9kVEloWjI4SzF4Z01qT1I5amQwUW9IdnFOSGM1S2NHRVEyUUR2U3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZDZRSWR6bHQxVWJNclFxaGQzRFVKVHloRHZtMThzTHdxeXc0NmVpYzdmSTMrTjJwNVlEZHR6bUlXQzVmQVo0QmRKSzlnYlpTNFFrQWxnV2xGc0t5Q2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV040YU94Y0JJbEtrVkNoNnhkS2xwaUJyMDU5M2IxbkwzU1hSeFlEbWZiK2Q3WHNncjhWYWtMbER3U3plcjM2MDNVSkJuV1Y1QjRCSlNFc0VTajZhRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTA3ODQ1NDMzOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTY4Nzc3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSy9MXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLL0wuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
