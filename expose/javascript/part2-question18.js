
function outputTime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(outputTime, 1000);