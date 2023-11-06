import fetch from "node-fetch";

let handler = async (m, { conn, usedPrefix, command, text}) => {
 if (!text) throw `Contoh: ${usedPrefix+command} gotoubun`
 let res = await fetch("https://api.lolhuman.xyz/api/nhentaisearch?apikey=cahyodesu&query="+text)
 let data = await res.json()
 let txt = `*[ Nhentai Search ]*\n\n`
 for (let x of data.result) {
  txt += `ID: ${x.id}\n`
  txt += `Title EN: ${x.title_english}\n`
  txt += `Title JA: ${x.title_japanese}\n`
  txt += `Title: ${x.title_native}\n`
  txt += `Page: ${x.page}`
  txt += `\n------------------------------\n`
 }
 m.reply(txt)
}
handler.help = ["nhentaisearch"]
handler.tags = ["nsfw"]
handler.command = ["nhsh"]

export default handler