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


global.devs = "on+92 311 6325862" // Developer Contact
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_13_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjksXG4gICAgICAgIDExMixcbiAgICAgICAgMTQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDksXG4gICAgICAgIDc4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDQzLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjI2LFxuICAgICAgICA0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjAyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODEsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDI5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDU4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDY2LFxuICAgICAgICA2NSxcbiAgICAgICAgODYsXG4gICAgICAgIDM1LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMSxcbiAgICAgICAgNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU3LFxuICAgICAgICAxLFxuICAgICAgICAzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODAsXG4gICAgICAgIDU2LFxuICAgICAgICAzMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTg1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDczLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDQyLFxuICAgICAgICA1MixcbiAgICAgICAgMzUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI4LFxuICAgICAgICAyNixcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDgsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlFSaUFoQkROejlCWGVEWjl3V0E3eFYzdUNoQzU4ZTdEcWJIWjhKVFFCVkk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTE2MzI1ODYyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFRkUzRTMxNEE3QUVFNENENzkxM0E0MDk5MUJCRkFGRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI2NTQ4MDFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWXF6MzA0bUVTejZLc0FWWUpMXzZzUVwiLFxuICBcInBob25lSWRcIjogXCIzZjA3YWM2Ni05YTgzLTQ4NmItYjRlNy1kN2QwYTU0ODM5YzVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM0LFxuICAgICAgODgsXG4gICAgICA0NCxcbiAgICAgIDExMSxcbiAgICAgIDQsXG4gICAgICAxMDUsXG4gICAgICAyMTQsXG4gICAgICAyMTQsXG4gICAgICAyMzAsXG4gICAgICAxODYsXG4gICAgICAxNTcsXG4gICAgICAxLFxuICAgICAgMTk3LFxuICAgICAgMyxcbiAgICAgIDExMixcbiAgICAgIDUyLFxuICAgICAgMTI1LFxuICAgICAgMTA0LFxuICAgICAgMjIyLFxuICAgICAgMTMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIsXG4gICAgICA0NyxcbiAgICAgIDEzMyxcbiAgICAgIDIwMyxcbiAgICAgIDk4LFxuICAgICAgMTE0LFxuICAgICAgMTA1LFxuICAgICAgNjMsXG4gICAgICAyMDYsXG4gICAgICA1LFxuICAgICAgMTM0LFxuICAgICAgMjEyLFxuICAgICAgMTEyLFxuICAgICAgMjAyLFxuICAgICAgMTgwLFxuICAgICAgMTY1LFxuICAgICAgMjE2LFxuICAgICAgMjMwLFxuICAgICAgMjAzLFxuICAgICAgMTk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRTMkRGRjJZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxMTYzMjU4NjI6ODlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc0NjIxMTk4MDQxMTg0Ojg5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlppZGkgXFxcIsKwUmFuYSAzMDJcXFwiX1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0szU3Bjb0hFTWpBdHJVR0dBd2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRkVwL3lvU0pmSXhIUlFzb1ZpL3k1UG1PaDJPSk1EaXRNWjJTWEJDZmxpbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLbDF1cmlnZHJRaTVxdSs5Z0pSSW5IeXcvbzhsNHB6U213cm5ISHFSOE1Xd1Q1Z3pQVXhVMDNBTUxTamllQ2tWOGNXaml3OVQxaXJrZTY2Y1lJTmpDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWRW1vTjV6cHhIMnFPYlhPdzg3ZGV3ZUtxcUFEUnRCUXpFSWlJdW0wVFNBTUVvQXZRcjl0VWFVME1YYUFwYlMwZXc4T2lxeCtwMlFESUQwdVdIMnpnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxMTYzMjU4NjI6ODlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI2NTQ3OTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDeGtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUN4ay5qc29uIjogIntcImtleURhdGFcIjpcInpZSUVhZHdlVXRmZjljT29DVi9nMXF5elh2TVRYWDMySlkvbFZaMnZRaHM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAzNDg1NDE4OSxcImN1cnJlbnRJbmRleFwiOjEwLFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsMTBdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
  LANG: ( process.env.THEME ||  "love"  ).toUpperCase(),



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
