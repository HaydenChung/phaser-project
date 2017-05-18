
//Set canvas width and height
let wannaWidth= 1280,
wannaHeight= 720;
const parentHeight = window.innerHeight,
parentWidth = window.innerWidth;
let scaleRate = 0;

if(wannaWidth/wannaHeight > parentWidth/parentHeight){
    scaleRate = parentWidth/wannaWidth
    wannaHeight = wannaHeight * scaleRate
    wannaWidth = parentWidth
}else{
    scaleRate = parentHeight/wannaHeight
    wannaWidth = wannaWidth * scaleRate
    wannaHeight = parentHeight
}

const config = {
    rootDocument: '',
    hostname: 'http://'+window.location.hostname,
    httpRoot: window.location.href,
    wannaWidth: Math.round(wannaWidth),
    wannaHeight: Math.round(wannaHeight),
    scaleRate: scaleRate.toFixed(5)
}



export default config