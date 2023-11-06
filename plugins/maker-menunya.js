let handler = async (m, { conn, command }) => {
let url = `https://telegra.ph/file/8c8ef3632baf7972889ba.jpg`
    conn.sendFile(m.chat, url, null, `*=> .american*\n*=> .anonymous*\n*=> .aov*\n*=> .arrow*\n*=> .arrow2*\n*=> .blackpink*\n*=> .blueneon*\n*=> .cake*\n*=> .caper*\n*=> .cloth*\n*=> .cloud*\n*=> .coverpubg*`, m)
}
handler.help = ['maker']
handler.tags = ['maker']
handler.command = /^(makermenu)$/i
handler.premium = true
//buatan Miko
export default handler