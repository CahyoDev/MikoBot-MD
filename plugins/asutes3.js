let handler = async (m, { conn }) => {
 conn.sendFile(m.chat, 'https://api.zahwazein.xyz/randomasupan/aeunicetjoaa?apikey=cahyodev', 'asupan.mp4', 'Nih kak Random Asupan Aeunicetjoaa Jangan Lupa Foolow Ig https://instagram.com/cahyo_kuun', m)
}
handler.help = ['asupan']
handler.tags = ['hentai', 'premium']

handler.command = /^(asutes3)$/i
handler.premium = true
export default handler