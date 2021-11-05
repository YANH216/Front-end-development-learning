var num = prompt("输入一个数:");

while(isIntNumber(num)){
    ( num % 2 ==0) ? alert("这个是偶数。"): alert("这个数是奇数。");
    var num = prompt("输入一个数:");
}
alert("无效数据");


function isIntNumber(num) {
    if (!(isNaN(num)) && ( Math.floor(num) == num )) {
        return true;
    }else {
        return false;
    }
}