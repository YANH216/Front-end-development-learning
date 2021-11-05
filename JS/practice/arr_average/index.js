var arr = new Array(30);
for(var i = 0; i < arr.length; i++){
    arr[i] = i * 2 + 2;
}
alert(arr);
//创建一个长度为30 的数组，数组中的每个数都是i * 2 + 2之后的结果

var averageArr = [];
for(var i = 0; i < 6; i++){
    var newArr = arr.splice(0, 5);//从arr数组中0下标开始取出5个元素，由于splice取出元素时会修改数组的值，故原数组会被分成6个数组。
    var sum = 0;
    for( var j = 0; j < newArr.length; j++){
        sum += newArr[j];
    }
    averageArr.push(sum / 5);
}

alert(averageArr);