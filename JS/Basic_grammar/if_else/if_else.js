var score = prompt("成绩：");
while(isIntNumber(score)){
    if( score >100 || score < 0 ){
        alert("成绩输入错误!");
    }else if( score >= 90){
        alert("优秀");
        if( score >= 98 ){
            alert("奖励1000元");
        }else if( score >= 95 ){
            alert("奖励800元");
        }else{
            alert("奖励300元");
        }
    }else if( score >= 80 ){
        alert("良好");
    }else if( score >= 70 ){
        alert("中等");
    }else if( score >= 60 ){
        alert("及格");
    }else{
        alert("不及格");
    }
    var score = prompt("成绩：");
}
alert("无效数据");

/* if( score >100 || score < 0 ){
    alert("成绩输入错误!");
}else if( score >= 90){
    alert("优秀");
    if( score >= 98 ){
        alert("奖励1000元");
    }else if( score >= 95 ){
        alert("奖励800元");
    }else{
        alert("奖励300元");
    }
}else if( score >= 80 ){
    alert("良好");
}else if( score >= 70 ){
    alert("中等");
}else if( score >= 60 ){
    alert("及格");
}else{
    alert("不及格");
} */


function isIntNumber(score) {
    if (!(isNaN(score)) && ( Math.floor(score) == score )) {
        return true;
    }else {
        return false;
    }
}