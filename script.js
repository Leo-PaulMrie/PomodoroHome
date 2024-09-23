let timerElement = document.getElementById("timer")
let runElement = document.getElementById("boolRun")
let stopElement = document.getElementById("boolStop")
let pauseElement = document.getElementById("boolPause")
let startAgainElement = document.getElementById("boolStartAgain")
let tempsSecondes = 0
let tempsMinutes = 0

let timer

let running = false

stopElement.style.display = "none"
startAgainElement.style.display = "none"

function increaseTime(){
    if(tempsSecondes < 59){
        tempsSecondes++
    }else{
        tempsMinutes++
        tempsSecondes = 0
    }
    if(tempsSecondes < 10){
        timerElement.textContent = (tempsMinutes + ":0" + tempsSecondes)
    }else{
        timerElement.textContent = (tempsMinutes + ":" + tempsSecondes)
    }
}

runElement.addEventListener("click", ()=>{
    running = true
    
    stopElement.style.display = "block"
    runElement.style.display = "none"

    increaseTime()
    timer = setInterval(increaseTime, 1000)

    startAgainElement.style.display = "block"
})

pauseElement.addEventListener("click", ()=>{
    running = false
    
    stopElement.style.display = "none"
    runElement.style.display = "block"
    clearInterval(timer)
})

/*
stopElement.addEventListener("click", ()=>{
    running = false
    
    stopElement.style.display = "none"
    runElement.style.display = "block"
    clearInterval(timer)
})
*/
