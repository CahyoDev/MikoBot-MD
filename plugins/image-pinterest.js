import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    let caption = `*${htki} 𝙋𝙄𝙉𝙏𝙀𝙍𝙀𝙎𝙏 ${htka}*
*Result:* ${text}
*link:* ${link}
`
conn.sendFile(m.chat, link, 'image.jpg', caption, m)
}
handler.help = ['gimage <query>', 'image <query>']
handler.tags = ['image']
handler.command = /^(pinterest|pin)$/i
handler.limit = true
export default handler