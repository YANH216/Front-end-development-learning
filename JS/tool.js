//冒泡排序
function bubbleSort(arr) {
    for(var i = 0; i < arr.length - 1; i++){
        for(var j = 0; j < arr.length - (i + 1); j++){
            if(arr[j] > arr[j + 1]){
                var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}

//选择排序
function selectSort(arr) {
    for(var i = 0; i < arr.length-1; i++){
        for(var j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                var tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
}


//生成纯数字验证码
function numTestCode(n) {
    var arr = [];
    for(i = 0; i < n; i++){
        arr.push(parseInt(Math.random() * 10));//取0~9的随机整数
    }
    return(arr.join(""));
}


// 生成数字字母混合的验证码
function testCode(n) {
    var arr = [];
    for (i = 0; i < n; i++){
        var num = parseInt(Math.random() * 123);//取0~122的随机整数
        if(num >= 0 && num <=9){  
            arr.push(num);
        }else if(num >= 97 && num <= 122 || num >= 65 && num <= 90){  //97~122代表A~Z  65~90代表a~z
            arr.push(String.fromCharCode(num));//String.fromCharCode():将一个数字转换成ASCII码对应的字符
        }else{
            i--;
        }
    }
    return (arr.join(""));
}

// 判断单个字符是否是小写字母、大写字母、0~9的数字、下划线。可用正则表达式判断
function isDEF(charStr) {
    if(charStr >= "a" && charStr <= "z" || charStr >= "A" && charStr <= "Z" || charStr >= 0 && charStr <= 9 || charStr == "_"){
        return true;
    }else{
        return false;
    }
}

//判断单个字符是否是小写字母、大写字母 。可用正则表达式判断
function isLetter(charStr) {
    if(charStr >= "a" && charStr <= "z" || charStr >= "A" && charStr <= "Z"){
        return true;
    }else{
        return false;
    }
}


//大众化方式显示日期   如：2021年10月2日 星期二 20:59:31
function showTime(){
    var d = new Date();
    var year = d.getFullYear();
    var month = d. getMonth();
    var date = d.getDate();

    var week = d.getDay();
    week = numOfchinese(week);

    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();

    var time = year + "年" + month + "月" + date + "日 星期" + week + " " + hour + ":" + min + ":" + sec;
    return time;

}
function numOfchinese(num){
    var arr = ["日", "一", "二", "三", "四", "五", "六"];
    return arr[num]; 
}



//随机颜色
function randomColor(){
    var str = "rgba(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + 1 + ")";
    return str;
}

//获取节点样式
function getStyle(node, cssStyle){
    return node.currentStyle ? node.currentStyle[cssStyle] : getComputedStyle(oDiv)[cssStyle];
}

//浏览器兼容：阻止事件冒泡
function stopBubble(e) {
    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true ;
}


//在整个页面拖拽  面向过程的函数
function drag(id){
    var node = document.getElementById(id);
    node.onmousedown = function(ev){
        var e = ev || window.event;
        var offsetX = e.clientX - node.offsetLeft;
        var offsetY = e.clientY - node.offsetTop;
        
        document.onmousemove = function(ev){
            var e = ev || window.event;
            var l = e.clientX - offsetX;
            var t = e.clientY - offsetY;
            
            //获取页面宽度和高度
            var windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
            var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;

            if(l <= 0){
                l = 0;
            }
            if(t <= 0){
                t = 0;
            }
            if(l >= windowWidth - node.offsetWidth){
                l = windowWidth - node.offsetWidth;
            }
            if(t >= windowHeight - node.offsetHeight){
                t = windowHeight - node.offsetHeight;
            }

            node.style.left = l + 'px';
            node.style.top = t + 'px';
        }
    }

    node.onmouseup = function(){
        document.onmousemove = null;
    }
}



//Drag  拖拽  面向对象的构造函数
function Drag(id){
    this.node = document.getElementById(id);
    var _this = this;
    this.node.onmousedown = function(ev){
        _this.funcDown(ev);
    };
    document.onmouseup = this.funcup;
}

Drag.prototype.funcDown = function(ev){
    var e = ev || window.event;
    this.offsetX = e.clientX - this.node.offsetLeft;
    this.offsetY = e.clientY - this.node.offsetTop;

    var _this = this;
    document.onmousemove = function(ev){
        _this.funcMove();
    };
    
}
Drag.prototype.funcMove = function(ev){
    var e = ev || window.event;
    var l = e.clientX - this.offsetX;
    var t = e.clientY - this.offsetY;
    
    //获取页面宽度和高度
    var windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
    var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;

    if(l <= 0){
        l = 0;
    }
    if(t <= 0){
        t = 0;
    }
    if(l >= windowWidth - this.node.offsetWidth){
        l = windowWidth - this.node.offsetWidth;
    }
    if(t >= windowHeight - this.node.offsetHeight){
        t = windowHeight - this.node.offsetHeight;
    }

    this.node.style.left = l + 'px';
    this.node.style.top = t + 'px';
}

Drag.prototype.funcup = function(){
    document.onmousemove = "null";
}