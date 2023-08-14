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

// subhanallah
subhanallahIncrement.addEventListener('click', function(){
    if(subhanallah === 33){
        return alert("your tasbih is complited") 
    }
    subhanallah += 1
    subhanallahDiaplay.innerText = subhanallah
})
subhanallahDecrement.addEventListener('click', function(){
    if(subhanallah === 0){
        return alert("you can't get negetive value")
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
    if(alhamdulillah === 33){
        return alert("your tasbih is complited") 
    }
    alhamdulillah += 1
    alhamdulillahDisplay.innerText = alhamdulillah
})
alhamdulillahDecrement.addEventListener('click', function(){
    if(alhamdulillah === 0){
        return alert("you can't get negetive value")
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
    if(allhuakbar === 34){
        return alert("your tasbih is complited") 
    }
    allhuakbar += 1
    allahuakbarDisplay.innerText = allhuakbar
})
allahuakbarDecrement.addEventListener('click', function(){
    if(allhuakbar === 0){
        return alert("you can't get negetive value")
    }
    allhuakbar -= 1
    allahuakbarDisplay.innerText = allhuakbar

})
document.getElementById('allahuakbarReset').addEventListener('click', function(){
    allahuakbarDisplay.innerText = 0
    allhuakbar = 0
})
