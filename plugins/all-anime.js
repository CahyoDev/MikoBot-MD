let handler = async (m, { conn, command }) => {
let url = `https://api.zahwazein.xyz/searching/pinterest2?query=${command}&apikey=${global.zein}`
    conn.sendFile(m.chat, url, null, `*Nih* *_${command}_*`, m)
}
handler.help = ['fanart', 'hololive', 'husbu', 'jahy', 'kanna', 'megumin', 'neko', 'akira', 'akiyama', 'anna', 'asuna', 'ayuzawa', 'boruto', 'chiho', 'chitoge', 'deidara', 'erza', 'elaina', 'eba', 'emilia', 'hestia', 'hinata', 'chizuru', 'inori', 'isuzu', '', 'itachi', 'itori', 'kaga', 'kagura', 'kaori', 'keneki', 'kotori', 'kurumi', 'madara', 'mikasa', 'miku', 'minato', 'naruto', 'nezuko', 'sagiri', 'sasuke', 'sakura', 'waifu', 'Yae']
handler.tags = ['anime']
handler.command = /^(fanart|hololive|husbu|jahy|kanna|megumin|neko|akira|akiyama|anna|asuna|ayuzawa|boruto|chiho|chitoge|deidara|erza|elaina|eba|emilia|hestia|hinata|inori|isuzu||itachi|chizuru|itori|kaga|kagura|kaori|kaneki|kotori|kurumi|madara|mikasa|miku|minato|naruto|nezuko|sagiri|sasuke|sakura|waifu|Yae)$/i
handler.limit = true
//buatan Miko
export default handler