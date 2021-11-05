var num = parseInt(prompt("输入一个数："));
var arr = [];
while(num){
    arr.push(num % 10);//也可以使用unshift()，能够直接按照数字的顺序进行输出
    num = parseInt(num / 10);
}
arr.reverse();//假如数据是12345，若不用这句话，按照上面的方法，数据会按照54321输出，因为是用的是push。
alert("一共"+ arr.length +"位，每位分别是"+ arr);

