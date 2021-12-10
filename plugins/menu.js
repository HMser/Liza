const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'menu', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.imgur.com/iIzBLGr.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⛦━━━━━✨️ᴡͥᴀᴠᴇsᴏͭɴᴀιʀᷤ ⫹нᷟмͤ⫺✩✨️━━━━━⛦


𝐇𝐞𝐥𝐥𝐨👋 𝐈 𝐚𝐦 𝐚 HM sᴇʀ 𝐛𝐨𝐭.
            *Lɪᴢᴀ Mᴡᴏʟ*

■□■□■□■□■□■□■□■□■□■□
♕ *𝙈𝙚𝙙𝙞𝙖 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♕

📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -sᴏɴɢ <ᴛᴇxᴛ>
📍𝙐𝙨𝙚➜ Dᴏᴡɴʟᴏᴀᴅs sᴏɴɢ ғᴏʀ ʏᴏᴜ.
⚠️.sᴏɴɢ  ʙᴀʙʏ ʟᴏᴠᴇ

📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ᴠɪᴅᴇᴏ <ʏᴛ ʟɪɴᴋ>
📍𝙐𝙨𝙚➜ Dᴏᴡɴʟᴏᴀᴅs ᴠɪᴅᴇᴏ ғʀᴏᴍ YᴏᴜTᴜʙᴇ ʟɪɴᴋ.

📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -ɪɴsᴛᴀ <ʟɪɴᴋ>
📍𝙐𝙨𝙚➜   Dᴏᴡɴʟᴏᴀᴅs ᴄᴏɴᴛᴇɴᴛ ғʀᴏᴍ ɪɴsᴛᴀɢʀᴀᴍ.

📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -ʏᴛ<ᴛᴇxᴛ>
📍𝙐𝙨𝙚➜   Gɪᴠᴇs ʏᴏᴜ YT ʟɪɴᴋs.

📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -sʜᴏᴡ <sʜᴏᴡ ɴᴀᴍᴇ>
📍𝙐𝙨𝙚➜   Gᴇᴛ ɪɴғᴏ ʀᴇʟᴀᴛᴇᴅ ᴛᴏ ᴛᴠ sᴇʀɪᴇs ᴀɴᴅ sʜᴏᴡs.

📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ɢɪғ 
📍𝙐𝙨𝙚➜ Cᴏɴᴠᴇʀᴛs ᴠɪᴅᴇᴏ ᴛᴏ ɢɪғ.

📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ᴛᴏᴍᴘ3 
📍𝙐𝙨𝙚➜ Cᴏɴᴠᴇʀᴛs ᴠɪᴅᴇᴏ ɪɴᴛᴏ ᴀᴜᴅɪᴏ.

📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -sᴀʏ <ᴛᴇxᴛ>
📍𝙐𝙨𝙚➜ Cᴏɴᴠᴇʀᴛs ᴛᴇxᴛ ɪɴᴛᴏ ᴠᴏɪᴄᴇ.

📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ɪᴍɢ <ᴛᴇxᴛ>
📍𝙐𝙨𝙚➜ Iᴛ sᴇɴᴅs ɪᴍᴀɢᴇ ғʀᴏᴍ ɢᴏᴏɢʟᴇ.

📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ᴛʀᴛ <ʟᴀɴɢᴜᴀɢᴇ ᴄᴏᴅᴇ>
📍𝙐𝙨𝙚➜ Tʀᴀɴsʟᴀᴛᴇ ᴛʜᴇ ᴛᴇxᴛ ʏᴏᴜ ᴛᴀɢ.

📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ᴡɪᴋɪ <ᴛᴇxᴛ>
📍𝙐𝙨𝙚➜ Iᴛ sᴇɴᴅs Wɪᴋɪᴘᴇᴅɪᴀ ʀᴇsᴜʟᴛ.

📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ʟʏʀɪᴄ <ᴛᴇxᴛ>
📍𝙐𝙨𝙚➜ Fɪɴᴅs ᴛʜᴇ ʟʏʀɪᴄs ᴏғ ᴛʜᴇ sᴏɴɢ.

📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ᴄᴏᴠɪᴅ <ᴄᴏᴜɴᴛʀʏ ᴄᴏᴅᴇ>
📍𝙐𝙨𝙚➜ Sᴇɴᴅ ᴛʜᴇ ᴄᴏᴠɪᴅ sᴛᴀᴛs ᴏғ ʏᴏᴜʀ ᴄᴏᴜɴᴛʀʏ.

📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ᴡᴇᴀᴛʜᴇʀ <ᴄɪᴛʏ>
📍𝙐𝙨𝙚➜ Tᴇʟʟs ʏᴏᴜ ᴀʙᴏᴜᴛ ᴛʜᴇ ᴡᴇᴀᴛʜᴇʀ ᴏғ ʏᴏᴜʀ ᴘʟᴀᴄᴇ.

📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ʀᴇᴍᴏᴠᴇʙɢ 
📍𝙐𝙨𝙚➜ Rᴇᴍᴏᴠᴇs ᴛʜᴇ ʙᴀᴄᴋɢʀᴏᴜɴᴅ ᴏғ ᴛɢᴇ ɪᴍᴀɢᴇ.

📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ᴏᴄʀ
📍𝙐𝙨𝙚➜ Fɪɴᴅs ᴛʜᴇ ᴛᴇxᴛ ᴡʀɪᴛᴛᴇɴ ᴏɴ ᴛʜᴇ ɪᴍᴀɢᴇ.

📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ᴡᴀʟʟᴘᴀᴘᴇʀ
📍𝙐𝙨𝙚➜ Iᴛ sᴇɴᴅs ʏᴏᴜ ʀᴀɴᴅᴏᴍ ᴡᴀʟʟᴘᴀᴘᴇʀ.

■□■□■□■□■□Lɪᴢᴀ Mᴡᴏʟ■□■□■□■□■□
♟ *𝙁𝙪𝙣 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♟

📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ᴊᴏᴋᴇ 
📍𝙐𝙨𝙚➜ Iᴛ sᴇɴᴅs ᴀ ʀᴀɴᴅᴏᴍ ᴊᴏᴋᴇ.
 
📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ᴍᴇᴍᴇ <ᴛᴇxᴛ>
📍𝙐𝙨𝙚➜ Cᴀᴛɪᴏɴs ᴛʜᴇ ɪᴍᴀɢᴇ ɪɴᴛᴏ ᴀ ᴍᴇᴍᴇ.

📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ϙᴜᴏᴛᴇ 
📍𝙐𝙨𝙚➜ Iᴛ sᴇɴᴅs ᴀ ʀᴀɴᴅᴏᴍ ϙᴜᴏᴛᴇ.

📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ss <ᴡᴇʙsɪᴛᴇ ʟɪɴᴋ>
📍𝙐𝙨𝙚➜ Iᴛ sᴇɴᴅs ᴛʜᴇ sᴄʀᴇᴇɴsʜᴏᴛ ᴏғ ᴛʜᴇ ᴡᴇʙsɪᴛᴇ.

📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ᴄʜᴀɴɢᴇsᴀʏ <ᴛᴇxᴛ>
📍𝙐𝙨𝙚➜ Cᴏɴᴠᴇʀᴛs ᴛᴇxᴛ ɪɴᴛᴏ ᴄʜᴀɴɢᴇsᴀʏ ᴍᴇᴍᴇ ɪᴍᴀɢᴇ.

📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ᴛʀᴜᴍᴘsᴀʏ
📍𝙐𝙨𝙚➜ Cᴏɴᴠᴇʀᴛ ᴛᴇxᴛ ɪɴᴛᴏ Tʀᴜᴍᴘ's ᴛᴡᴇᴇᴛ.

📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ᴄᴏᴍᴘʟɪᴍᴇɴᴛ 
📍𝙐𝙨𝙚➜ Gɪᴠᴇs ʏᴏᴜ ᴀ ᴄᴏᴍᴘʟɪᴍᴇɴᴛ.

📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -ʙɪᴛʟʏ <ʟɪɴᴋ>
📍𝙐𝙨𝙚➜   Sʜᴏʀᴛᴇɴ ʏᴏᴜʀ ʟɪɴᴋ.

📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -ᴅɪᴄᴛ 
📍𝙐𝙨𝙚➜   Dɪᴄᴛɪᴏɴᴀʀʏ [-ᴅɪᴄᴛ ᴇɴ;ᴀɴɪᴍᴇ]

📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -ᴢᴏᴅɪᴀᴄ <ʟᴇᴏ> 
📍𝙐𝙨𝙚➜   Tᴇʟʟs ʏᴏᴜ ᴀʙᴏᴜᴛ ʏᴏᴜʀ ʜᴏʀᴏsᴄᴏᴘᴇ.

📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -ϙʀ <ᴛᴇxᴛ>
📍𝙐𝙨𝙚➜   Cᴏɴᴠᴇʀᴛs ᴛᴇxᴛ ɪɴᴛᴏ ϙʀ ᴄᴏᴅᴇ.

📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -ᴍᴏᴠɪᴇ 
📍𝙐𝙨𝙚➜  Gɪᴠᴇs ʏᴏᴜ ɪɴғᴏ ᴀʙᴏᴜᴛ ᴍᴏᴠɪᴇ.
⚠️ᴍᴏᴠɪᴇ ᴍᴀsᴛᴇʀ

📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -ᴀɴɪᴍᴇ <ᴛᴇxᴛ>
📍𝙐𝙨𝙚➜  Gɪᴠᴇs ʏᴏᴜ ɪɴғᴏ ᴀʙᴏᴜᴛ ᴀɴɪᴍᴇ.
⚠️ᴀɴɪᴍᴇ Lɪᴢᴀ Mᴡᴏʟ
■□■□■□■□■Lɪᴢᴀ Mᴡᴏʟ□■□■□■□■□■□
♝ *𝙎𝙩𝙞𝙘𝙠𝙚𝙧 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♝

📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -sᴛɪᴄᴋᴇʀ 
📍𝙐𝙨𝙚➜ Cᴏɴᴠᴇʀᴛs ɪᴍɢ/ɢɪғ ɪɴᴛᴏ ᴀ sᴛɪᴄᴋᴇʀ.

📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ᴘʜᴏᴛᴏ 
📍𝙐𝙨𝙚➜ Cᴏɴᴠᴇʀᴛs sᴛɪᴄᴋᴇʀ ɪɴᴛᴏ ɪᴍᴀɢᴇ.

📌𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ᴀᴛᴛᴘ <ᴛᴇxᴛ>
📍𝙐𝙨𝙚➜ Cᴏɴᴠᴇʀᴛs ᴛᴇxᴛ ɪɴᴛᴏ ɢʟᴏᴡɪɴɢ sᴛɪᴄᴋᴇʀ.
⚠️ᴇx  ᴀᴛᴛᴘ Lɪᴢᴀ Mᴡᴏʟ
■□■□■□■□■□■□■□■□■□■□
═════💢Lɪᴢᴀ Mᴡᴏʟ💢═════
▣▣▣▣▣▣▣▣▣Cʀᴇᴀᴛᴇᴅ Bʏ HM▣▣▣▣▣▣▣▣

`}) 

}));
