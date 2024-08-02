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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+923116325862";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_40_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDMyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA1NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEyLFxuICAgICAgICA4MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA5MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjEyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgODYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTUwLFxuICAgICAgICA0MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2LFxuICAgICAgICA2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA4NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDU3LFxuICAgICAgICA2NyxcbiAgICAgICAgMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTksXG4gICAgICAgIDY5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzksXG4gICAgICAgIDg1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgODcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjksXG4gICAgICAgIDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NyxcbiAgICAgICAgMixcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDY3LFxuICAgICAgICA0MixcbiAgICAgICAgMTg2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDk0LFxuICAgICAgICA5NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUsXG4gICAgICAgIDczLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibEJYM1dRQ3Z3NFowN1NPVDdBdENKZU96SFRIV3NjazduMU5GcVdwVGFqQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaEhkYXVkS2ZSS3F4aGFDbGR6VGdmUVwiLFxuICBcInBob25lSWRcIjogXCIyNzc4ZWEwMy0wZGI3LTRlNjUtOTkyMy1lZDBiODRkMzBjYzBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg5LFxuICAgICAgMTI2LFxuICAgICAgNjYsXG4gICAgICAzLFxuICAgICAgMjAsXG4gICAgICAyMDgsXG4gICAgICAxMSxcbiAgICAgIDIyOCxcbiAgICAgIDEwMixcbiAgICAgIDE4LFxuICAgICAgMzcsXG4gICAgICAyMzEsXG4gICAgICAxNjYsXG4gICAgICAxODUsXG4gICAgICA4MixcbiAgICAgIDk1LFxuICAgICAgNDYsXG4gICAgICAzLFxuICAgICAgODIsXG4gICAgICA0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjcsXG4gICAgICAxMjAsXG4gICAgICAxNzQsXG4gICAgICA0LFxuICAgICAgODksXG4gICAgICAxNzQsXG4gICAgICAxMDYsXG4gICAgICAyNDAsXG4gICAgICAxMTcsXG4gICAgICAyMCxcbiAgICAgIDE1NCxcbiAgICAgIDEyNCxcbiAgICAgIDEwOSxcbiAgICAgIDE2NSxcbiAgICAgIDYyLFxuICAgICAgODAsXG4gICAgICAxNjYsXG4gICAgICAzMyxcbiAgICAgIDgsXG4gICAgICAxODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNVBUR05XWFRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA4NzUzNTE0NjoyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlJhbmFcIixcbiAgICBcImxpZFwiOiBcIjM1MzA5NDQ2MjM4MzA5OjI4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l6UngyWVF6SnF5dFFZWUNTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUCtrSmpjNWFtalF1Y2RRRHFXMksydHFsWGd3eTFrT3Y1RURydVk3c2lHWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJiY3ByYUpMZVY1VFR5V3RDTkhKTW1yNnhwcktvUGlqV2dDU3JNRmQ0dEx4czVFekVRWEZMSG4rRW8zYlhhVFRkWkJnempVYjFhT2QzZlNtcGl3OWJEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3SnhQeFltejdFajF3Yld6ZEhZL3BlWXc0S1JpcVZFeTEyNkVuOTB5Mmh3a3dXZVBYdnpDeGxkbWpMYUdNUnJsc1U5alVjRG5FbnYraW83Rlp0anBnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwODc1MzUxNDY6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjU4NDQwMFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "rana",
  packname: process.env.PACK_NAME || "Asad",
  botname : process.env.BOT_NAME  || "rana",
  ownername:process.env.OWNER_NAME|| "Asad",


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
