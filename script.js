const hours = document.getElementById('horas');
const minutes = document.getElementById('minutos');
const seconds = document.getElementById('segundos');

function clock () {
    let data = new Date();

    if (data.getHours() < '10'){
        hours.innerHTML = '0' + data.getHours();
    } else {
        hours.innerHTML = data.getHours();
    }

    if (data.getMinutes() < '10'){
        minutes.innerHTML = '0' + data.getMinutes();
    } else {
        minutes.innerHTML = data.getMinutes();
    }

    if (data.getSeconds() < '10'){
        seconds.innerHTML = '0' + data.getSeconds();
    } else {
        seconds.innerHTML = data.getSeconds();
    }
}

setInterval (() => {
    clock()
}, 1000);