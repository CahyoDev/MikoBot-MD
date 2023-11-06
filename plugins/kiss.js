let handler = async (m, { conn }) => {
 conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/kiss?apikey=085866', 'kiss.mp4', 'Nih kak', m)
}
handler.help = ['kiss']
handler.tags = ['hentai']

handler.command = /^(kiss)$/i
handler.limit = true
export default handler