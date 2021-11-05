var arr = [1, 10, 20, 15, 25, 5];
/* arr.sort();
alert(arr);
将会输出1, 10, 15, 20, 25, 5
因为sort是将数组中元素按照字符串大小进行排序。 */



arr.sort(
    function(value1, value2){
        return value1 - value2;
    }//将数组中的元素按照数值大小从小到大排序。对调return中的value1和value2的值，即从大到小排序。
) 
alert(arr);