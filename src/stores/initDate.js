import Phaser from 'phaser'
import gameA_JSON from './gameASources.json'


export let gameASources = {items:[], types:[]};
gameASources.types = [
    {name:'議論文'},
    {name:'說明文'},
    {name:'描寫文'},
    {name:'抒情文'},
    {name:'記敘文'},
]

gameASources.items = gameA_JSON

export let gameBSources = {
    sectionA:[],
    sectionB:{
        items:[
            {index:'0',text:'狼狽的一天'},
            {index:'1',text:'Someting1'},
            {index:'2',text:'Someting2'},
            {index:'3',text:'Someting3'},
            {index:'4',text:'Someting4'},
            {index:'5',text:'Someting5'},
            {index:'6',text:'Someting6'},
            {index:'7',text:'Someting7'},
            {index:'8',text:'Someting8'},
            {index:'9',text:'Someting9'},

        ],
        targets:{
            0:'記述有一天上學沒帶雨傘卻遇上大雨的狼狽情形。',
            1:'Answer1',
            2:'Answer2',
            3:'Answer3',
            4:'Answer4',
            5:'Answer5',
            6:'Answer6',
            7:'Answer7',
            8:'Answer8',
            9:'Answer9',
            10:'Answer10',
            11:'Answer11',
            12:'Answer12',
            13:'Answer13',
            14:'Answer14',
            15:'Answer15',
            16:'Answer16',
            17:'抒情喜歡下雨天的情懷。',
            18:'說明什麼是狼狽不堪。',
            19:'描寫下雨天的街道景色。'
        }
    }
}

export const gameCSources = [
    {name:'groupB',title:'今天，是我的生日。',items:[
        {type:'起',text:`今天，是我的生日。`},
        {type:'承',text:`我放學後，發現家裡居然一個人也沒有。我心想，爸媽大概是因為工作太忙碌，而忘記了我的生日，所以我便傷心地回到房間做功課。做了一回，我就睡覺了。`},
        {type:'轉',text:`醒來，已經是十點多。我走到客廳，突然看到桌上有一個鋪着雪白香甜的鮮奶油和一些餅乾粹的生日蛋糕。然後，爸媽就唱著生日快樂歌出現，還送我最喜歡的玩具車。他們給我的驚喜，真的讓我很感動。`},
        {type:'合',text:`今年的生日，我和爸爸媽媽都感到十分愉快。`}
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
