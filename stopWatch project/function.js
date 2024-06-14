const timerDisplay = document.querySelector('.timerDisplay');
const stopBtn = document.getElementById('stopBtn');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapsCon = document.getElementById('lapsCon');
let mils = 0;
let secs = 0;
let mins = 0;
let laps = 0;
let timeId = null;
startBtn.addEventListener('click',()=>{
    if(timeId!==null){
        clearInterval(timeId);
    }
    timeId=setInterval(startTimer,10);
});

stopBtn.addEventListener('click',function(){
    clearInterval(timeId);
});

resetBtn.addEventListener('click',function(){
    clearInterval(timeId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    mils=secs=mins=0;
});

lapBtn.addEventListener('click', () => {
    let listEle = document.createElement('li');
    let spanEle = document.createElement("span");
    lapsCon.prepend(listEle);
    listEle.innerHTML = combineTime();
    listEle.appendChild(spanEle);
    spanEle.innerHTML = "\u00d7";
})

lapsCon.addEventListener('click', (e) => {
    if(e.target.nodeName === "SPAN"){
        e.target.parentNode.remove();
    }
})
function startTimer(){
    mils = mils+1;
    if(mils == 100){
        secs++;
        mils=0;
        if(secs == 60){
            mins++;
            secs = 0;
        }
    }
    timerDisplay.innerHTML = combineTime();
}
function combineTime(){
    let newMils = mils<10 ? `0${mils}`:mils;
    let newsecs = secs<10 ? `0${secs}`:secs;
    let newMins = mins<10 ? `0${mins}`:mins;
    return `${newMins} : ${newsecs} : ${newMils}`
}