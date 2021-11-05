var ul = document.querySelector('ul');
var hour = document.querySelector('#hour');
var minute = document.querySelector('#minute');
var second = document.querySelector('#second');

for (var i=0; i<60; i++){
    var li = document.createElement('li');
    li.style.transform = 'rotate('+ ( i * 6 ) +'deg)';
    if ( i % 5 == 0){
        li.style.width = '4px';
        li.style.height = '15px';
    }
    ul.appendChild(li);
}

run();
setInterval(run,1000);

function run() {
    var date = new Date();
    var iH = date.getHours();
    var iM = date.getMinutes();
    var iS = date.getSeconds();

    hour.style.transform = 'rotate('+ ( iH * 30 + iM / 2) +'deg)';
    minute.style.transform = 'rotate('+ ( iM * 6 ) +'deg)';
    second.style.transform = 'rotate('+ ( iS * 6 ) +'deg)';
}

