

function getComputerChoice(){
    const variant = ['tosh', 'qaychi', 'qogoz']

    let randomNum = Math.floor(Math.random() * 3)

    return variant[randomNum]
}

function getHumanChoice(){
    return prompt('Iltimos `tosh, qaychi, qogoz` sozlaridan birini kiriting', '')
}

let humanScore = 0
let compScore = 0

function playRound(com, odam){
    console.log(`Kom-${com} & Odam - ${odam}`)
    odam = odam.toLowerCase()
    if(odam=='tosh' && com=='tosh' || odam=='qaychi' && com=='qaychi' || odam=='qogoz' && com=='qogoz'){
        alert('durrang')
    }
    // if(odam==com)deb yozsak ham bo'larkan.
    else if(odam=='tosh' && com =='qaychi' || odam=='qaychi' && com =='qogoz' || odam=='qogoz' && com =='tosh'){
        alert('odam yutdi')
        humanScore++
    }else{
        alert('komputer yutdi')
        compScore++
    }
}

function playGame(){
    for(let i = 1; i<=3; i++){
        // let com = getComputerChoice()
        //     odam= getHumanChoice()
        playRound(getComputerChoice(), getHumanChoice())
    }
    alert(`odam - ${humanScore} : kom - ${compScore}`)   
}

playGame()