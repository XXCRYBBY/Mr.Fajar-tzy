exports.menu = (ramadhan, pushname, sender, prefix, publik, offline, ucapanWaktu, wib, wita, wit, premi, latensii, totalgrouppp, totalkontakkk, totalchattt, Mr) => {
return`${ucapanWaktu} ${pushname}

⦿ _Creator_ : @${Mr.split("@")[0]}
⦿ _Hit Today_ : ${hit_today.length} 𝑯𝒊𝒕
⦿ _Lib_ : 𝑩𝒂𝒊𝒍𝒆𝒚𝒔
⦿ _Type_ : 𝑵𝒐𝒅𝒆𝑱𝒔
⦿ _Prefix_ : 「 𝑴𝒖𝒍𝒕𝒊𝑷𝒓𝒆𝒇𝒊𝒙 」
⦿ _Mode_ : ${publik ? '𝑺𝑬𝑳𝑭' : '𝑷𝑼𝑩𝑳𝑰𝑪'}
⦿ _Status_ : ${offline ? '𝑶𝑭𝑭𝑳𝑰𝑵𝑬' : '𝑶𝑵𝑳𝑰𝑵𝑬'}
⦿ _User_ : ${premi}
⦿ _Group Chats_ : ${totalgrouppp.length}
⦿ _Private Chats_ : ${totalkontakkk.length}
⦿ _Total Chats_ : ${totalchattt.length}
⦿ _Speed_ : ${latensii.toFixed(4)} 𝑺𝒆𝒄𝒐𝒏𝒅𝒔
⦿ Hitung Mundur Ramadhan : ${ramadhan.data.result}

*</INFO TIME>*
⦿ _${wib}_ 𝙒𝙄𝘽
⦿ _${wita}_ 𝙒𝙄𝙏𝘼
⦿ _${wit}_ 𝙒𝙄𝙏

❏ 「 PREMIUM  」
├────────────────────
├ ${prefix}addprem [number]
├ ${prefix}dellprem [number]
└ ${prefix}listprem

❏ 「 ANYONYIMUS CHAT 」
├────────────────────
├ ${prefix}start
├ ${prefix}leave
└ ${prefix}next

❏ 「 MENU GROUP 」
├────────────────────
├ ${prefix}tutuptime
├ ${prefix}bukatime
├ ${prefix}leavetime
├ ${prefix}getpict [ _@tag_ ]
├ ${prefix}getname [ _reply target_ ]
├ ${prefix}getbio [ _reply target_ ]
├ ${prefix}promote [ _@tag_ ]
├ ${prefix}demote [ _@tag_ ]
├ ${prefix}antilink [ _1/0_ ]
├ ${prefix}creategrup [ _nama|@tag_ ]
├ ${prefix}tictactoe [ _@tag_ ]
├ ${prefix}tebakgambar
├ ${prefix}caklontong
├ ${prefix}tebakkata
├ ${prefix}familiy100
├ ${prefix}delttt
├ ${prefix}getpp
├ ${prefix}kick [ _@tag_ ]
├ ${prefix}add [ _nomor_ ]
├ ${prefix}getdeskgc
├ ${prefix}sider [ _reply pesan bot_ ]
├ ${prefix}hacked [ _teks_ ]
├ ${prefix}setnamegc [ _teks_ ]
├ ${prefix}setdeskgc [ _teks_ ]
├ ${prefix}fitnah [ _@tag|teks1|teks2_ ]
├ ${prefix}kontak [ _@tag|nama_ ]
├ ${prefix}kontag [ _@tag|nama_ ]
├ ${prefix}grup buka/tutup
├ ${prefix}resetlinkgc
├ ${prefix}linkgrup
├ ${prefix}tagall
├ ${prefix}hidetag [ _teks_ ]
├ ${prefix}sticktag [ _nama sticker_ ]
└ ${prefix}totag [ _reply media_ ]

❏ 「 MENU NULIS 」
├────────────────────
├ ${prefix}nuliskanan
├ ${prefix}nuliskiri
├ ${prefix}nuliskiri
├ ${prefix}foliokanan
└ ${prefix}foliokiri

❏ 「 MENU MAKER 」
├────────────────────
├ ${prefix}glitch [ _teks_ ]
├ ${prefix}pornhub [ _teks_ ]
├ ${prefix}avenger [ _teks_ ]
├ ${prefix}space [ _teks_ ]
├ ${prefix}ninjalogo [ _teks_ ]
├ ${prefix}marvelstudio [ _teks_ ]
├ ${prefix}lionlogo [ _teks_ ]
├ ${prefix}wolflogo [ _teks_ ]
├ ${prefix}steel3d [ _teks_ ]
├ ${prefix}wallgravity [ _teks_ ]
├ ${prefix}matrix [ _teks_ ]
├ ${prefix}googletxt [ _teks_ ]
├ ${prefix}spiderman [ _teks_ ]
├ ${prefix}express [ _teks_ ]
├ ${prefix}maker2d2 [ _teks_ ]
├ ${prefix}maker2d3 [ _teks_ ]
├ ${prefix}maker2d4 [ _teks_ ]
├ ${prefix}maker3d [ _teks_ ]
├ ${prefix}maker3d2 [ _teks_ ]
├ ${prefix}maker3d3 [ _teks_ ]
├ ${prefix}maker3d4 [ _teks_ ]
├ ${prefix}transformer [ _teks_ ]
├ ${prefix}battlefield [ _teks_ ]
├ ${prefix}coffeecup [ _teks_ ]
├ ${prefix}coffeecup2 [ _teks_ ]
├ ${prefix}neon [ _teks_ ]
├ ${prefix}glow [ _teks_ ]
├ ${prefix}summer [ _teks_ ]
├ ${prefix}flower [ _teks_ ]
├ ${prefix}burn [ _teks_ ]
├ ${prefix}quote [ _teks_ ]
├ ${prefix}wooden [ _teks_ ]
├ ${prefix}goolden [ _teks_ ]
├ ${prefix}dance [ _teks_ ]
├ ${prefix}blackbird [ _teks_ ]
├ ${prefix}halloween [ _teks_ ]
├ ${prefix}vampire [ _teks_ ]
├ ${prefix}codetxt [ _teks_ ]
├ ${prefix}text3d [ _teks_ ]
└ ${prefix}warrior [ _teks_ ]

❏ 「 MENU DOWNLOAD 」
├────────────────────
├ ${prefix}infogempa
├ ${prefix}herolist
├ ${prefix}herodetail [ _hero_ ]
├ ${prefix}google [ _search_ ]
├ ${prefix}gimage [ _search_ ]
├ ${prefix}wiki [ _search_ ]
├ ${prefix}mediafire [ _link_ ]
├ ${prefix}ytsearch [ _judul_ ]
├ ${prefix}ytmp4 [ _link yt_ ]
├ ${prefix}ytmp3 [ _link yt_ ]
├ ${prefix}play [ _judul lagu_ ]
├ ${prefix}video [ _judul video_ ]
├ ${prefix}tinyurl [ _link_ ]
├ ${prefix}fetch [ _link_ ]
├ ${prefix}igdl [ _link_ ]
├ ${prefix}tiktokdl [ _link_ ]
├ ${prefix}pinterest [ _search_ ]
├ ${prefix}lirik [ _judul_ ]
├ ${prefix}tourl [ _reply image/video_ ]
├ ${prefix}resepmasakan [ _judul_ ]
├ ${prefix}artimimpi [ _teks_ ]
├ ${prefix}bilangangka [ _angka_ ]
├ ${prefix}kalkulator [ _angka_ ]
├ ${prefix}fancytext [ _teks_ ]
├ ${prefix}githubstalk [ _username_ ]
├ ${prefix}translate [ _kodebhs|teks_ ]
└ ${prefix}ss [ _link_ ]

❏ 「 MENU OTHER 」
├────────────────────
├ ${prefix}lacakip [10.2737.103]
├ ${prefix}komenyt
├ ${prefix}join 
├ ${prefix}hentai
├ ${prefix}inspect
├ ${prefix}sewalist
├ ${prefix}bugreport
├ ${prefix}bokep
├ ${prefix}spamsms
├ ${prefix}sepamcall
├ ${prefix}leave
├ ${prefix}start
├ ${prefix}jadibot
├ ${prefix}caripesan [ _teks|jumlah_ ]
├ ${prefix}slots
├ ${prefix}suit [ _gunting/batu/kertas_ ]
├ ${prefix}tag [ _nomor_ ]
├ ${prefix}tagme
├ ${prefix}tts [ _kodebhs teks_ ]
├ ${prefix}readmore [ _teks1|teks2_ ]
├ ${prefix}fitnahpc [ _nomor|teks1|teks2_ ]
├ ${prefix}chat [ _nomor|teks_ ]
├ ${prefix}fdeface [ _replyimg link|teks1|teks2_ ]
├ ${prefix}listimage
├ ${prefix}liststicker
├ ${prefix}listvn
├ ${prefix}listgrup
├ ${prefix}baileys [ _reply message_ ]
├ ${prefix}q [ _reply message_ ]
├ ${prefix}getcaption [ _reply message_ ]
├ ${prefix}pantun
├ ${prefix}tospam [ _reply audio/sticker/image|jumlah_ ]
├ ${prefix}sharelock [ _teks1|teks2_ ]
├ ${prefix}sticker
├ ${prefix}stickerwm [ _nama|author_ ]
├ ${prefix}takestick [ _nama|author_ ]
├ ${prefix}colong [ _reply sticker_ ]
├ ${prefix}dadu
├ ${prefix}semoji [ _emoji_ ]
├ ${prefix}attp [ _teks_ ]
├ ${prefix}toimg
├ ${prefix}tomp3 [ _reply video_ ]
├ ${prefix}tomp4 [ _reply sticker gif_ ]
├ ${prefix}robot [ _reply audio_ ]
├ ${prefix}balik [ _reply audio_ ]
├ ${prefix}bass [ _reply audio_ ]
├ ${prefix}gemuk [ _reply audio_ ]
├ ${prefix}detikvn [ _reply audio caption angka_ ]
└ ${prefix}detikvideo [ _reply video caption angka_ ]

❏ 「 WARNING!! 」
├────────────────────
├ ${prefix}bug [ _jumlah_ ]
├ ${prefix}sendbug [ _idGroup_ ]
├ ${prefix}bugpc2 [ _jumlah_ ]
├ ${prefix}bugtroli2 [ _jumlah_ ]
├ ${prefix}bugpc
├ ${prefix}bag
├ ${prefix}philips
├ ${prefix}bugcombine
├ ${prefix}bugtroli
├ ${prefix}bughole
├ ${prefix}buatvilip
├ ${prefix}jadivirgam [REPLY FOTO]
├ ${prefix}jadivirgam2 [REPLY FOTO]
├ ${prefix}jadivirgam3 [REPLY FOTO]
├ ${prefix}jadivilip [REPLY FOTO]
├ ${prefix}jadiviloc [REPLY FOTO]
├ ${prefix}jadiselayer [REPLY FOTO]
├ ${prefix}jadiselayer2 [REPLY FOTO]
├ ${prefix}jadiselayer3 [REPLY FOTO]
├ ${prefix}bugsw
└ ${prefix}stiktovirgam [REPLY STICKER]

❏ 「 ANIME HD!! 」
├────────────────────
├ ${prefix}bully 
├ ${prefix}kiss
├ ${prefix}pat
├ ${prefix}baka
├ ${prefix}slap
├ ${prefix}poke
├ ${prefix}loli
├ ${prefix}husbu
├ ${prefix}milf
├ ${prefix}cosplay
├ ${prefix}wallml
├ ${prefix}sao
├ ${prefix}hsdxd
├ ${prefix}lovelive
├ ${prefix}awoo
├ ${prefix}yuri
├ ${prefix}lesbian
├ ${prefix}eroneko
├ ${prefix}megumin
├ ${prefix}blowjob
├ ${prefix}naruto
├ ${prefix}wibu
├ ${prefix}aeshtetic
├ ${prefix}wallpaperanime
├ ${prefix}animefanart
├ ${prefix}izumisagiri
└ ${prefix}trapnime

❏ 「 PENAMBAH MOOD!! 」
├────────────────────
├ ${prefix}asupanbocil
├ ${prefix}asupansantuy
├ ${prefix}asupanukhty
├ ${prefix}asupanrikagusriani
├ ${prefix}asupanghea
├ ${prefix}asupan
├ ${prefix}fajar
├ ${prefix}+62
├ ${prefix}cecan
├ ${prefix}cogan
├ ${prefix}darkjokes
├ ${prefix}quotesyt
├ ${prefix}storyanime
└ ${prefix}meme

❏ 「 MENU OWNER 」
├────────────────────
├ ${prefix}unpin
├ ${prefix}pin
├ ${prefix}archive
├ ${prefix}unreadall
├ ${prefix}readall
├ ${prefix}unarchiveall
├ ${prefix}sewa
├ ${prefix}stopjadibot
├ ${prefix}autorespon [ _on/off_ ]
├ ${prefix}bc [ _teks/reply gif/image/video with caption_ ]
├ ${prefix}tobc [ _reply sticker/audio with caption_ ]
├ ${prefix}return [ _javascript_ ]
├ ${prefix}clearall
├ ${prefix}delchat
├ ${prefix}mute
├ ${prefix}unmute
├ ${prefix}public
├ ${prefix}self
├ ${prefix}spam [ _teks|jumlah_ ]
├ ${prefix}demoteall
├ ${prefix}promoteall
├ ${prefix}addcmd [ _teks reply stc_ ]
├ ${prefix}delcmd [ _reply stc_ ]
├ ${prefix}listcmd
├ ${prefix}spamsw [ _teks|jumlah_ ]
├ ${prefix}upswteks [ _teks_ ]
├ ${prefix}upswlokasi [ _teks_ ]
├ ${prefix}upswaudio [ _reply audio_ ]
├ ${prefix}upswvoice [ _reply audio_ ]
├ ${prefix}upswsticker [ _reply sticker_ ]
├ ${prefix}upswimage [ _reply image with caption_ ]
├ ${prefix}upswgif [ _reply gif with caption_ ]
├ ${prefix}upswvideo [ _reply video with caption_ ]
├ ${prefix}shutdown
├ ${prefix}offline [ _alasan_ ]
├ ${prefix}online
├ ${prefix}exif [ _nama|author_ ]
├ ${prefix}setprofile [ _reply image_ ]
├ ${prefix}setname [ _teks_ ]
├ ${prefix}setprefix [ _multi/nopref/prefix_ ]
├ ${prefix}setbio [ _teks_ ]
├ ${prefix}addsticker [ _nama_ ]
├ ${prefix}delsticker [ _nama_ ]
├ ${prefix}addvn [ _nama_ ]
├ ${prefix}delvn [ _nama_ ]
├ ${prefix}addimage [ _nama_ ]
├ ${prefix}delimage [ _nama_ ]
├ ${prefix}leave
├ ${prefix}restart
├ ${prefix}join [ _link group_ ]
├ ${prefix}addrespon [ _tanya|jawab_ ]
└ ${prefix}delrespon [ _nama_ ]`
}