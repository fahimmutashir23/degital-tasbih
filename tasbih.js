
let subhanallahDiaplay = document.getElementById('subhanallahDisplay');
let alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay');
let allahuakbarDisplay = document.getElementById('allhakbarDisplay');

let subhanallahIncrement = document.getElementById('subhanallahincrement');
let alhamdulillahIncrement = document.getElementById('alhamdulillahIncrement');
let allahuakbarIncrement = document.getElementById('allahuakbarIncrement');

let subhanallahDecrement = document.getElementById('subhanallahDecrement');
let alhamdulillahDecrement = document.getElementById('alhamdulillahDecrement');
let allahuakbarDecrement = document.getElementById('allahuakbarDecrement');




let subhanallah = 0;
let alhamdulillah = 0;
let allhuakbar = 0;

let count = 33;


let tasbi3 = document.getElementById('3tasbih')
tasbi3.addEventListener('click', function(){
    count = 100
})

document.getElementById('regularTasbih').addEventListener('click', function(){
    count = 33
})

let audio = document.getElementById('audio');

function playAudio(){
    audio.play()
}

        // subhanallah
subhanallahIncrement.addEventListener('click', function(){
    if(subhanallah === count){
        return playAudio();
    }
    subhanallah += 1
    subhanallahDiaplay.innerText = subhanallah
})
subhanallahDecrement.addEventListener('click', function(){
    if(subhanallah === 0){
        return
    }
    subhanallah -= 1
    subhanallahDiaplay.innerText = subhanallah

})
document.getElementById('subhanallhReset').addEventListener('click', function(){
    subhanallahDiaplay.innerText = 0
    subhanallah = 0
})


// alhamdulillah
alhamdulillahIncrement.addEventListener('click', function(){
    if(alhamdulillah === count){
        return  playAudio();
    }
    alhamdulillah += 1
    alhamdulillahDisplay.innerText = alhamdulillah
})
alhamdulillahDecrement.addEventListener('click', function(){
    if(alhamdulillah === 0){
        return
    }
    alhamdulillah -= 1
    alhamdulillahDisplay.innerText = alhamdulillah

})
document.getElementById('alhamdulillahReset').addEventListener('click', function(){
    alhamdulillahDisplay.innerText = 0
    alhamdulillah = 0
})


// allahuakbar

allahuakbarIncrement.addEventListener('click', function(){
    if(allhuakbar === count + 1){
        return  playAudio();
    }
    allhuakbar += 1
    allahuakbarDisplay.innerText = allhuakbar
})
allahuakbarDecrement.addEventListener('click', function(){
    if(allhuakbar === 0){
        return
    }
    allhuakbar -= 1
    allahuakbarDisplay.innerText = allhuakbar

})
document.getElementById('allahuakbarReset').addEventListener('click', function(){
    allahuakbarDisplay.innerText = 0
    allhuakbar = 0
})
