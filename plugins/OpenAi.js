// BY MIKO BOT MD
import fetch from 'node-fetch'
let handler = async (m, { text,  usedPrefix,  command }) => {
    if (!text) throw `Hay adakah yang bisa saya bantu??`
await m.reply('Matte Onichan...')
let mikobot = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=${global.lolkey}&text=${text}&user=user-unique-id`)
let hasil = await mikobot.json()
 m.reply(`${hasil.result}`.trim())
    }  
handler.help = ['ai', 'openai']
handler.tags = ['fun']
handler.command = /^(ai|openai)$/i
export default handler