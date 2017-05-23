export function textResort(text, lineBreak, tab=false){
    const incNum = lineBreak
    let index = incNum

    if(tab == true){
        text = '\t'+text
        index += -2
    }
    while(text[index]){
        text = text.slice(0, index)+'\n'+text.slice(index)
        index += incNum+1
    }
    return text
}