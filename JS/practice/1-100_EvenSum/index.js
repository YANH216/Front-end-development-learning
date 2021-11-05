var num = 1;
var sum = 0;
document.write("1-100以内的偶数：<br/>");
while(num < 100){
    if(num % 2 == 0){
        document.write(num + "<br/>");
        sum += num;
    }
    num++;
}
document.write("1-100内的偶数的和：" + sum);
