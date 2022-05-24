var day=document.querySelector('.day')
var hour=document.querySelector('.hour')
var minute=document.querySelector('.minute')
var second=document.querySelector('.second')
var year=document.querySelector('.year')


const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

year.innerText=currentYear+1


function updateTime() { 
    const currentTime = new Date()
    const diff= newYearTime-currentTime
    
    const d=Math.floor(diff/1000/60/60/24)
    const h=Math.floor(diff/1000/60/60)%24
    const m=Math.floor(diff/1000/60)%60
    const s=Math.floor(diff/1000)%60
    
    day.innerHTML=d;
    hour.innerHTML=h;
    minute.innerHTML=m;
    second.innerHTML=s;

}
setInterval(updateTime,1000)
updateTime();