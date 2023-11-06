let handler = async (m, { conn, command }) => {
let url = `https://telegra.ph/file/2dd9edf348966ae2f4fbe.jpg`
    conn.sendFile(m.chat, url, null, `*=> .aeunicetjoaa*\n*=> .asupan*\n*=> .asupantiktok*\n*=> .china*\n*=> .justina*\n*=> .kayes*\n*=> .kpop*\n*=> .natajadeh*\n*=> .notnot*\n*=> .rose*\n*=> .thailand*\n*=> .vietnam*'`, m)
}
handler.help = ['aeunicetjoaa', 'asupann', 'asupantiktok', 'asupancecan', 'china', 'justina', 'kayes', 'kpop', 'natajadeh', 'notnot', 'rose', 'thailand', 'vietnam']
handler.tags = ['nsfw']
handler.command = /^(randomasupan)$/i
handler.premium = true
//buatan Miko
export default handler