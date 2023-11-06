let handler = async (m, { conn, command }) => {
if (global.db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.reply(m.chat, '❗ ᴏᴘᴛɪᴏɴs ɴsғᴡ ᴅɪᴄʜᴀᴛ ɪɴɪ ʙᴇʟᴜᴍ ᴅɪɴʏᴀʟᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ',m)
if (db.data.users[m.sender].premiumTime < 1) return m.reply('KHUSUS PREMIUM USER')
let url = `https://api.zahwazein.xyz/api/morensfw/${command}?apikey=${global.zein}`
    conn.sendFile(m.chat, url, null, `*Nih*`, m)
}
handler.help = ['hollolewd', 'sideoppai', 'animefeets', 'animebooty', 'animethighss', 'animearmpits', 'lewdanimegirls', 'biganimetiddies']
handler.tags = ['nsfw']
handler.command = /^(ahegao|ass|bdsm|blowjob|cuckold|cum|ero|femdom|foot|gangbang|glasses|hentai|jahy|maid|manga|masturbation|nsfwneko|netorare|mobilewall|orgy|panties|pussy|tentacles|thighs|yuri|sfwneko|zettairyouiki)$/i
handler.premium = true
//buatan Miko
export default handler