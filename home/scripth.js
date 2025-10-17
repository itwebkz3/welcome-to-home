function updateclock()
{
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if(hours < 10) hours = '0' + hours
    if(minutes < 10) minutes = '0' + minutes
    if(seconds < 10) seconds = '0' + seconds
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateclock, 1000)

function update()
{
    let date = new Date();
    let year = date.getFullYear();
    let mouth = date.getMonth() + 1;
    let day = date.getDate();
    if(mouth < 10) mouth = '0' + mouth
    if(day < 10) day = '0' + day
    calen.textContent = `${year}.${mouth}.${day}`;
}
setInterval (update, 1000)

function news()
{
    window.location.href="news.html";
}

function program()
{
    window.location.href="program.html";
}

function calculator()
{
    window.location.href="calculator.html";
}
