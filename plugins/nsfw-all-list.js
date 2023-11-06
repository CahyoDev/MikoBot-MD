let handler = async (m, { conn, command }) => {
if (global.db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.reply(m.chat, '❗ ᴏᴘᴛɪᴏɴs ɴsғᴡ ᴅɪᴄʜᴀᴛ ɪɴɪ ʙᴇʟᴜᴍ ᴅɪɴʏᴀʟᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ',m)
let url = `https://telegra.ph/file/7c9151b617e1b1e536224.jpg`
    conn.sendFile(m.chat, url, null, `*=> .ahegao*\n*=> .ass*\n*=> .bdsm*\n*=> .blowjob*\n*=> .cuckold*\n*=> .cum*\n*=> .ero*\n*=> .femdom*\n*=> .foot*\n*=> .gangbang*\n*=> .glasses*\n*=> .hentai*\n*=> .jahy*\n*=> .maid*\n*=> .manga*\n*=> .masturbation*\n*=> .nsfwneko*\n*=> .netorare*\n*=> .mobilewall*\n*=> .orgy*\n*=> .panties*\n*=> .pussy*\n*=> .tentacles*\n*=> .thighs*\n*=> .yuri*\n*=> .sfwneko*\n*=> .zettairyouiki*`, m)
}
handler.help = ['hollolewd', 'sideoppai', 'animefeets', 'animebooty', 'animethighss', 'animearmpits', 'lewdanimegirls', 'biganimetiddies']
handler.tags = ['nsfw']
handler.command = /^(nsfw|hentailist)$/i
handler.premium = true
//buatan Miko
export default handler