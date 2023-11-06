import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
if (db.data.users[m.sender].premiumTime < 1) return m.reply('KHUSUS PREMIUM USER🤣🤣')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .jadizombie'
m.reply('ᴛᴜɴɢɢᴜ sᴇᴅᴀɴɢ ᴍᴇᴍᴜᴀᴛ ɢᴀᴍʙᴀʀ zobie')
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://api.zahwazein.xyz/photoeditor/jadizombie?url=${url}&apikey=${global.zein}`)).buffer()
conn.sendFile(m.chat, hasil, null, `ANJAY ${name} Nih, ʟᴀʀɪ ᴀᴅᴀ zombie`, m)
}
handler.help = ['jadizombie']
handler.tags = ['anime']
handler.command = /^(jadizombie)$/i
handler.limit = true

export default handler