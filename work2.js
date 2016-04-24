function list(dtNode) {
    var dlNode = dtNode.parentNode;
    if (dlNode.className == "open") {
        dlNode.className = "";
    } else {
        dlNode.className = "open";
    }
}

/*下处多次尝试精简，然而不知为何都失败了*/
function test1() {
    var testn = document.getElementById("test1");
    testn.style.display = testn.style.display == "none"?"block":"none";
}
function test3() {
    var testn = document.getElementById("test3");
    testn.style.display = testn.style.display == "none"?"block":"none";
}
function test4() {
    var testn = document.getElementById("test4");
    testn.style.display = testn.style.display == "none"?"block":"none";
}
function test7() {
    var testn = document.getElementById("test7");
    testn.style.display = testn.style.display == "none"?"block":"none";
}
/*上处极度希望能够合并*/

/*test1*/
function t1btn_1() {
    var oT1bg = document.getElementById("t1bg");
    oT1bg.style.width = "200px";
}
function t1btn_2() {
    var oT1bg = document.getElementById("t1bg");
    oT1bg.style.height = "200px";
}
function t1btn_3() {
    var oT1bg = document.getElementById("t1bg");
    oT1bg.style.background = "#09F";
}
function t1btn_4() {
    var oT1bg = document.getElementById("t1bg");
    oT1bg.style.display = "none";
}
function t1btn_5() {
    var oT1bg = document.getElementById("t1bg");
    oT1bg.style.display = "block";
}

/*test2*/
function t2son(){
    var oT2son = getElementById("oT2main");
    oT2son.onclick=function(){
        oT2son.style.background = blue;
    }
    /*
    for (var i=0;i<oT2son.length;i++)
    {
        oT2son[i].onclick = function(){
            oT2son[i].style.background = blue;
        }
    }
    */
}

function t3btn(){
    var oT3btn = document.getElementById("t3btn");
    var oT3t1= document.getElementById("t3t1");
    var oT3t2= document.getElementById("t3t2");
    alert(oT3t1.value);
    alert(oT3t2.value);
}

function t4btn(){
    var oT4btn = document.getElementById("t4btn");
    var oT4li = document.getElementById("t4ul").getElementsByTagName("li");
    for (var i=0;i<oT4li.length;i++)
        oT4li[i].style.background="red";
}

function t7Cover(i){
    var oT7div = document.getElementById("t7menu").getElementsByTagName("div");
    oT7div[i].style.background = "#d0d0d0";

}

function t7Cout(i){
    var oT7div = document.getElementById("t7menu").getElementsByTagName("div");
    oT7div[i].style.background = "white";
}

function t7btn(){
    var oT7menu = document.getElementById("t7menu");
    oT7menu.style.display = oT7menu.style.display == "none"?"block":"none";
}
















