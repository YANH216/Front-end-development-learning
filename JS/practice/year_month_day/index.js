var year = Number(prompt("输入年份:"));
var month = Number(prompt("输入月份:"));
var day = Number(prompt("输入天:"));
var totalDays = 0;
 
switch(month){
    case 12:
        totalDays += 30;
    case 11:
        totalDays += 31;
    case 10:
        totalDays += 30;
    case 9:
        totalDays += 31;
    case 8:
        totalDays += 31;
    case 7:
        totalDays += 30;
    case 6:
        totalDays += 31;
    case 5:
        totalDays += 30;
    case 4:
        totalDays += 31;
    case 3:
        totalDays += 28;
        if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
            totalDays += 1;
        }
    case 2:
        totalDays += 31;
    case 1:
        totalDays += day;
        break;
    default:
        alert("日期输入错误,重新输入:");
        var year = Number(prompt("输入年份:"));
        var month = Number(prompt("输入月份:"));
        var day = Number(prompt("输入天:"));
}
alert("总天数:" + totalDays + "天.");