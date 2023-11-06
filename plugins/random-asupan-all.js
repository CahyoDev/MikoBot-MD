let handler = async (m, { conn, command }) => {
if (db.data.users[m.sender].premiumTime < 1) return m.reply('KHUSUS PREMIUM USER')
let url = `https://api.zahwazein.xyz/randomasupan/${command}?apikey=${global.zein}`
    conn.sendFile(m.chat, url, null, `*Nih*`, m)
}
handler.help = ['aeunicetjoaa', 'asupan', 'asupantiktok', 'china', 'justina', 'kayes', 'kpop', 'natajadeh', 'notnot', 'rose', 'thailand', 'vietnam']
handler.tags = ['nsfw']
handler.command = /^(aeunicetjoaa|asupan|asupantiktok|china|justina|kayes|kpop|natajadeh|notnot|rose|thailand|vietnam)$/i
handler.premium = true
//buatan Miko
export default handler