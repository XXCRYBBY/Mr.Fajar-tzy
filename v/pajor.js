const kuntul = (otod, dtod, baterai, cmhit, multi, isOwner, NamaBot, NamaOwner, ucapanWaktu, stst, num, pushname,prefix,wib,wita,wit) => {
	return`
┌───「 \`\`\`${NamaBot}\`\`\` 」
│
├ _Creator : @${dtod.split('@')[0]}_
├ _Battery : ${baterai.battery}_
├ _Mode : ${publik ? 'Public' : 'Self'}_
├ _Total Hit : ${cmhit.length}_
├ _Prefix : ${multi ? 'Multi Prefix' : 'No Prefix'}_
│
├───「 \`\`\`INFO BOT\`\`\` 」
│
├ _Nama Bot : ${NamaBot}_
├ _Nama Owner : ${NamaOwner}_
├ _Nomor Owner : @${otod.split('@')[0]}_
│
├───「 \`\`\`INFO USER\`\`\` 」
│
├ _Status : ${isOwner ? 'Owner' : 'User'}_
├ _Nama : ${pushname}_
├ _Bio : ${stst}_
├ _Nomor : @${stod.split('@')[0]}_
├ _Info Nomor : ${num.data.country_code} - ${num.data.carrier.type} - ${num.data.carrier.name}_
│
│NOTE : JIKA MENEMUKAN EROR LANGSUNG CHAT OWNER DENGAN CARA #bugreport 
└───「 \`\`\`${NamaBot}\`\`\` 」
	`}
exports.kuntul = kuntul