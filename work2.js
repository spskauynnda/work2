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
function test5() {
    var testn = document.getElementById("test5");
    testn.style.display = testn.style.display == "none"?"block":"none";
}
function test6() {
    var testn = document.getElementById("test6");
    testn.style.display = testn.style.display == "none"?"block":"none";
}
function test7() {
    var testn = document.getElementById("test7");
    testn.style.display = testn.style.display == "none"?"block":"none";
}
function test8(){
    var testn = document.getElementById("test8");
    testn.style.display = testn.style.display == "none"?"block":"none";
}
function test10() {
    var testn = document.getElementById("test10");
    testn.style.display = testn.style.display == "none"?"block":"none";
}
function test12() {
    var testn = document.getElementById("test12");
    testn.style.display = testn.style.display == "none"?"block":"none";
}
function test13() {
    var testn = document.getElementById("test13");
    testn.style.display = testn.style.display == "none"?"block":"none";
}
function test24() {
    var testn = document.getElementById("test24");
    testn.style.display = testn.style.display == "none"?"block":"none";
}
function test25() {
    var testn = document.getElementById("test25");
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

/*test3*/
function t3btn(){
    var oT3btn = document.getElementById("t3btn");
    var oT3t1= document.getElementById("t3t1");
    var oT3t2= document.getElementById("t3t2");
    alert(oT3t1.value);
    alert(oT3t2.value);
}

/*test4*/
function t4btn(){
    var oT4btn = document.getElementById("t4btn");
    var oT4li = document.getElementById("t4ul").getElementsByTagName("li");
    for (var i=0;i<oT4li.length;i++)
        oT4li[i].style.background="red";
}

function t5over(){
    var oT5 = document.getElementById("t5org");
    oT5.className="t5hover";
}

function t5out(){
    var oT5 = document.getElementById("t5org");
    oT5.className="t5org";
}

function t6bbbover(){
    var oT6btn = document.getElementById("t6btn");
    var oT6bbb = document.getElementById("t6bbb");
    oT6bbb.style.display = "block";
}

function t6bbbout(){
    var oT6btn = document.getElementById("t6btn");
    var oT6bbb = document.getElementById("t6bbb");
    oT6bbb.style.display = "none";
}
/*test7*/
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


function t8bg(){
    var oDiv = document.getElementById("t8bg").getElementsByTagName("div");
    for(var i = 0; i < oDiv.length; i++){
        oDiv[i].onclick = function (){
            alert(this.innerHTML);
        }
    }
}

function t10btn(){
    var oBtn = document.getElementById("t10btn");
    var oDiv1 = document.getElementById("t10Div1");
    var oDiv3 = document.getElementById("t10Div3");
    var oT10bg = document.getElementById("t10bg");
    oBtn.onclick = function(){
        oDiv1.style.display = "block";
        oT10bg.style.display = "block";
    }
    oDiv3.onclick = function(){
        oDiv1.style.display = "none";
        oT10bg.style.display = "none";
    }
}

function t12li(){
    var oLi = document.getElementById("t12box").getElementsByTagName("li");
    for(var i = 0;i < oLi.length; i++){
        oLi[i].onmouseover = function (){
            this.className = "t12li2";
        }
        oLi[i].onmouseout = function (){
            this.className = "t12li1";
        }
    }
}

function t13li(){
    var oLi = document.getElementById("t13menu").getElementsByTagName("li");
    var oDiv = document.getElementById("t13com").getElementsByTagName("div");
    var i,j,k;
    for (i = 0;i < oLi.length; i++ ){
       oLi[i].index = i;
        oLi[i].onmouseover = function(){
            for (j = 0; j < oLi.length; j++){
                oLi[j].className = "t13li1";
            }
            this.className = "t13li2";
            for (k = 0; k < oDiv.length; k++){
                oDiv[k].className = "t13ul2";
            }
            oDiv[this.index].className = "t13ul1";
        }
    }
}

    /*test24*/
function t24btn(){
    var oT24 = document.getElementById("t24");
    oT24.value++;
}

/*test25*/
function t25btn(){
    var oT251 = document.getElementById("T251");
    var oT252 = document.getElementById("T252");
    var oT25sp = document.getElementById("s_q");
    oT251.value > oT252.value ? (oT25sp.innerHTML = oT251.value) : (oT25sp.innerHTML = oT252.value);
}





window.onload = function(){t8bg();t10btn();t12li();t13li();}


