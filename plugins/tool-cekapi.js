import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args, command }) => {
	let type = (args[1] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    if (!args[0]) return m.reply('Apikeynya mana?')
  
  let cek = '「🔎」ᴍᴇɴᴄᴀʀɪ ᴀᴘɪᴋᴇʏ...'
try {
    if (/cekapi(key)?|cekkey/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
       case 'zens':
       if (type == 'zens') {
         let zens = await (await fetch(`https://api.zahwazein.xyz/user/cekapi?apikey=${args[0]}`)).json().catch(v => 'error')
         await m.reply(cek)
         if (zens == 'error') {
m.reply(`Maaf restapi ini sedang error, harap coba lagi nanti`)
} else { 
if (zens.message == "Only alphanumeric!") return m.reply('Only alphanumeric!')
 if (zens.message == "Apikey tidak ditemukan, silahkan daftar atau beli ke developer untuk mendapatkan apikey yang valid!") return m.reply('ɪɴᴠᴀʟɪᴅ ᴀᴘɪᴋᴇʏ !')
conn.reply(m.chat, `• *ᴛʏᴘᴇ:* ZENSKEY
• *ᴀᴘɪᴋᴇʏ:* ${args[0]}

• *id:* ${zens.message.id}
• *created:* ${zens.message.created}
• *updated:* ${zens.message.updated}
• *email:* ${zens.message.email}
• *username:* ${zens.message.username}
• *today hit:* ${zens.message.today_hit}
• *total hit:* ${zens.message.total_hit}
• *premium:* ${zens.message.premium}
• *biodata:* ${zens.message.biodata}

• *ᴇxᴘɪʀᴇᴅ:* ${(zens.message.premium_expired).replace('Premium left:', '')}`, m)
}
}
            break
          case 'lolhuman': 
    let lol = await (await fetch(`https://api.lolhuman.xyz/api/checkapikey?apikey=${args[0]}`)).json()
    m.reply(cek)
    if (lol.message == 'success') {
    conn.reply(m.chat, `• *ᴛʏᴘᴇ:* LOLHUMAN
• *ᴀᴘɪᴋᴇʏ:* ${args[0]}

• *ɴᴀᴍᴇ:* ${lol.result.username}
• *ᴛᴏᴛᴀʟ ʜɪᴛ:* ${lol.result.requests}
• *ʜɪᴛ ᴛᴏᴅᴀʏ:* ${lol.result.today}
• *ᴀᴄᴄᴏᴜɴᴛ:* ${lol.result.account_type}

• *ᴇxᴘɪʀᴇᴅ:* ${lol.result.expired}`, m)
} else m.reply('ɪɴᴠᴀʟɪᴅ ᴀᴘɪᴋᴇʏ !')
            break
          default:
            return conn.sendButton(m.chat, `*${htki} CEK APIKEY ${htka}*`, 'sᴇʟᴇᴄᴛ ᴛʏᴘᴇ ᴀᴘɪᴋᴇʏ ʜᴇʀᴇ!', null, [['zens', `.cekapi ${args[0]} zens`],['ʟᴏʟʜᴜᴍᴀɴ', `.cekapi ${args[0]} lolhuman`]],m)
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, wm, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}
handler.help = ['cekapikey']
handler.tags = ['internet', 'tools']
handler.command = /^(cek(key|api))$/i

export default handler