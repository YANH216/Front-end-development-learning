// 求给定任意个数字的和
alert(sum(10, 20 , 30 ,40));
function sum() {
    var num = 0;
    for(i = 0; i < arguments.length; i++) {
        num += arguments[i];
    }
    return num;
}
