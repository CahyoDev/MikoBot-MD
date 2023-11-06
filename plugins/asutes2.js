let handler = async (m, { conn }) => {
 conn.sendFile(m.chat, 'https://api.zahwazein.xyz/randomasupan/asupantiktok?apikey=cahyodev', 'asupan.mp4', 'Nih kak Random Asupan Tiktok Jangan Lupa Foolow Ig https://instagram.com/cahyo_kuun', m)
}
handler.help = ['asupan']
handler.tags = ['hentai', 'premium']

handler.command = /^(asutes2)$/i
handler.premium = true
export default handler