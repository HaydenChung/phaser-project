export let gameASources = {items:[], types:[]};
gameASources.types = [
    {name:'議論文'},
    {name:'說明文'},
    {name:'描寫文'},
    {name:'抒情文'},
    {name:'記敘文'},
]

gameASources.items = [
    {type:'說明文',name:'說明做運動的好處。'},
    {type:'說明文',name:'參加課外活動的好處。'},
    {type:'記敘文',name:'一次失敗的經驗。'},
    {type:'記敘文',name:'旅遊迷途記。'},
    {type:'記敘文',name:'童年的一件悲慘經歷。'},
    {type:'記敘文',name:'難忘的學校旅行。'},
    {type:'記敘文',name:'最倒楣的一天。'},
    {type:'記敘文',name:'記一次獲獎的經過。'},
    {type:'記敘文',name:'旅行記趣。'},
    {type:'記敘文',name:'記一次學校運動會。'},
    {type:'記敘文',name:'驚險的一天。'},
    {type:'抒情文',name:'畢業有感。'},
    {type:'抒情文',name:'再見了，我的小貓。'},
    {type:'議論文',name:'怎樣才算是一個好學生？'},
    {type:'議論文',name:'小學生應否有零用錢？'},
    {type:'議論文',name:'談中學生應否談戀愛。'},
    {type:'描寫文',name:'大雨中的鬧市景象。'},
    {type:'描寫文',name:'一場暴雨。'},
    {type:'描寫文',name:'我的媽媽。'},
    {type:'描寫文',name:'我最尊敬的老師。'},
]

const topicBackupt = [
    {type:'說明文',name:'校園生活苦與樂。'},
    {type:'說明文',name:'什麼是禮貎。'},
    {type:'說明文',name:'我心目中的理想校園。'},
    {type:'抒情文',name:'給未來的我。'},
    {type:'抒情文',name:'欣賞日出日落。'},
    {type:'抒情文',name:'青春是一首樂典。'},
    {type:'議論文',name:'談冒險的精神。'},

]

// let tempName = {}
// for(let i=1;i<21;i++){
//     tempName = gameASources.types[Math.floor(Math.random()*5)].name
//     gameASources.items.push({type:tempName,name:tempName})
// }

export let gameBSources = {}

export const gameCSources = [
    // {name:'groupA',title:'了學半死像心藝',items:[
    //     {type:'起',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra purus leo, id semper orci consectetur vitae. Donec sed fermentum purus, mattis dictum justo. Proin eu vulputate ligula, ac auctor mauris. Maecenas tempor, enim id faucibus eleifend, enim turpis sollicitudin dolor, et accumsan orci mauris vitae massa. Etiam dapibus pellentesque sapien, et tincidunt ex semper ac. Morbi pharetra rhoncus felis non ornare. Curabitur sit amet sapien pretium, tempus ligula in, vulputate magna. Sed molestie lectus eget neque pellentesque rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris lobortis at quam consectetur luctus. Nam ac lacus vel mi fringilla ultrices at quis magna. Suspendisse commodo, dui ac luctus interdum, lorem risus blandit purus, a sodales elit lorem eget sapien.'},
    //     {type:'承',text:'Aenean non pellentesque quam. Suspendisse potenti. Suspendisse ut neque sed eros semper varius eu vel justo. Nulla tristique purus tellus, ut sollicitudin justo vehicula in. Aliquam tincidunt lobortis nisl. Vestibulum a dui et risus tristique tincidunt. In est nunc, varius sed ante a, tincidunt mattis odio.'},
    //     {type:'轉',text:'Integer rutrum quis arcu cursus molestie. In interdum dui quis vestibulum fringilla. Proin quis condimentum magna. Ut sed tortor in massa interdum lobortis. Curabitur non lacinia elit. In eget rutrum nibh. Nullam sodales hendrerit sem, sed scelerisque elit mattis non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque interdum pharetra lectus, blandit elementum ex. Vivamus urna sem, iaculis sit amet dui nec, scelerisque dapibus enim. In quis blandit turpis.'},
    //     {type:'合',text:'Proin congue accumsan euismod. Ut congue volutpat viverra. Morbi maximus risus sed est maximus, eget sodales ante accumsan. Sed at purus quam. Sed at lacinia odio. Integer vehicula vel tellus id volutpat. Aenean blandit mi vitae vestibulum ornare. Donec non velit sed orci sagittis mollis.'}
    //     ]},
    {name:'groupB',title:'新黨經親文愛商說的家公',items:[
        {type:'起',text:`是管突此著學黃元的能司在離場也得是。`},
        {type:'承',text:`著細預隊形實呢出入兒直這，業金心想場求先。果口情，局北文中景不……遊前家想，建還可告下行一國沒證黨路如聽、口再步全。師據觀我。包影不寶著好過家心斯但性注顯究在期工已車？強眾海利無畫要。體年是往交長星嚴省要子常不們個史名有在濟識調。`},
        {type:'轉',text:`然人非那的爭總、克廠但大漸那布存草務理麼國……的念生孩的成趣地以正子，沒整研眼三熱保了術公，五海平指語相於大失中指工手，來為的，了能財國夜一舉青般功房得際未；自張型金連呢界汽讀易你著能河法在心議自又小生課的讀高高分大一動記則源，輕相獎義裡心備人孩類術不度及出！世果有苦經男往口引門：看造有的叫在海一陽可你提了發覺三改，是天單要東龍水不等教他應心老，生心低年一。一親起取時，義樹亮，給職電。`},
        {type:'合',text:`痛灣常是成帶。是連上，線極麼文，媽表花、也所口民的時上一？`}
        ]},
    {name:'groupC',title:'山引兩包縣的河',items:[
        {type:'起',text:`麼人飛由資，景太臺初公青北軍感中；原計推許！成目式境要續業民年。`},
        {type:'承',text:`電在也時：條食員看、行小人境其跟解器感他兒多。相電力蘭臉看重質圖了應合，就部量室人，社生早景自更她很片操都應子劇分分為等同感可心響仍出學國就書一死生離具點理實史留似，去行眾；把夜人書難驚金後縣正大說教那演知認少院業、有本過課不人！大玩？`},
        {type:'轉',text:`害當我經命李認陽光人、分果國後前馬交做很問低所操今參書空病的。能人達對我少此總表吃孩顯需層學！`},
        {type:'合',text:`學重難、電李望命進生真太黃、情父是病城招原門日然出望能公名式。`}
        ]},
    {name:'groupD',title:'的怎書可未知有辦的到治設們',items:[
        {type:'起',text:'軍及斯人考人響是他道就不死國創中見，然的法味展器理情，議我無美象基早在爭頭義。有一理吸人德，早代爸好書出。再地標是各獎：水沒身就布出的得童這？臺興一響文構家？一食天，家方影面視日此取點基刻學色麼天營議怎關明格離經，過去人西做了看去主成風。'},
        {type:'承',text:'路無策，品商一，還知會小有結獲令許四事國關清的是？讀利步書有別錯現時但的所到地根，生說了作再民城紅東那！較我以能向怎能聽，房愛亞。感會人是的們細質整不山。不心的的治始要賽電中機廣報樂響：面印大一來發驚構時月的古臉不空媽水異，學算也到格水遠麗行野升實會國的長腳感回滿房把臺是色北合種給北線，量就代安種人自！'},
        {type:'轉',text:'舉著列。大機們舞主大之是也是的多事稱美事知案都放，助用而間電大隊。利方己時紀響那、理太今子己的了體我了便性快質子後型維，人而使身處怎喜快落有！區熱處眼自生如以此筆用異器現。'},
        {type:'合',text:'觀喜達本？要方完來多經表，自一生拿得野過就或運病不有化經所。'}
        ]},
    {name:'groupE',title:'笑友上嚴產人人是作麼民沒',items:[
        {type:'起',text:`怎的專於我開方！造孩期增院馬溫通賽人。。。。。。對區推不環聲開體坐年，了有可室金學味可自；生東安深片，進顯邊程公說不在過又高現的營些風氣成你類、結著只是想，身素表了活文到是算假清先沒到話青阿，客教回然懷科最現不能？`},
        {type:'承',text:`總利懷比！了具集手、參星我他強車些笑聯了了不實。１２３４大影ａＡｂＤ子愛，布但生。`},
        {type:'轉',text:`從來白感。頭這以第料傳共至案技的。`},
        {type:'合',text:`壓方提能未中是社童多變用，氣藥容，土表據呢環他會情小像手已是教一約濟。`}
        ]},
]

export let gameDSources = {}

export let gameESources = {}
