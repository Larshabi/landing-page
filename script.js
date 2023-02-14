const e = document.getElementById('clicked')
e.addEventListener('click', clickEventHandler);
let isClicked = true;
let isClick = true
const el = document.getElementById('clicks');
console.log(el)
el.addEventListener('click', secondEventHandler)



function clickEventHandler(event){    
    const dropList = document.getElementById('lips');
    const droList = document.getElementById('licks');
    if(isClicked){
        dropList.className = "drop-list"
        isClicked = false
        droList.className = "d-list hidden"
        const svg2 = document.getElementById('svg2');
        svg2.innerHTML = `<svg id="svg" width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>`
        const svg = document.getElementById('svg');
        svg.innerHTML = `<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>`
    }
    else{
        dropList.className = "drop-list hidden"
        isClicked = true
        const svg = document.getElementById('svg');
        svg.innerHTML = `<svg id="svg" width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>`
    }
}

function secondEventHandler(event){
    const dropList = document.getElementById('licks');
    const droList = document.getElementById('lips');
    if(isClick){
        dropList.className = "d-list"
        isClick = false
        droList.className = "drop-list hidden"
        const svg = document.getElementById('svg');
        svg.innerHTML = `<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>`
        const svg2 = document.getElementById('svg2');
        svg2.innerHTML = `<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>`
    }
    else{
        dropList.className = "d-list hidden"
        isClick = true
        const svg = document.getElementById('svg2');
        svg.innerHTML = `<svg id="svg" width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>`
    }
}
