/**
 * 时间
 **/

function a_00_stytle() {
    var date = new Date();
    var result = "";
    var week = ["一","二","三","四","五","六","日"];
    /* 日期 */
    result += "现在是\n";
    result += date.getFullYear() + "年";
    result += (date.getMonth()+1) + "月";
    result += date.getDate() + "日 ";
    result += "星期" + week[date.getDay()] + " ";
    /* 时间 */
    if(date.getHours()<10)
        result += "0" + date.getHours();
    else
        result += date.getHours();
    if(date.getMinutes()<10)
        result += ":0" + date.getMinutes();
    else
        result += ":" + date.getMinutes();
    if(date.getSeconds()<10)
        result += ":0" + date.getSeconds();
    else
        result += ":" + date.getSeconds();
    /* 输出 */
    document.getElementById("time").innerHTML=result;
    setTimeout("a_00_stytle()",1000); //每隔1毫秒更新
}

function stopScroll() {
    clearTimeout(timer02);
}
