import fetch from 'node-fetch'
import spit from "performance-now"

const times = spit();
const latensi = spit() - times;
const fetching = latensi.toFixed(4) + " ms";

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) throw "Masukan kode...";
  if (db.data.users[m.sender].premiumTime < 1) return m.reply('KHUSUS PREMIUM USER')
  let rest = await fetch(`https://api.lolhuman.xyz/api/nhentai/${text}?apikey=${global.lolkey}`);
   let res = await rest.json()
  for (var media of res.result.image) {
    conn.sendFile(m.chat, media, m);
  }
};
handler.help = ["ig"].map((v) => v + " <url>");
handler.tags = ["downloader"];
handler.command = /^(readdoujin)$/i;

handler.limit = 1;

export default handler;