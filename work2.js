// ********************封装********************
var _$ = function(id){
    if (document.getElementById(id)) {
        return document.getElementById(id);
    } else {
        return false;
    }
}
var _$$ = function(classname){
    if (document.getElementsByClassName(classname)) {
        return document.getElementsByClassName(classname);
    } else {
        return false;
    }
}
//*********************************************





// ********************控制********************
//  重置所有test.display为none，赋初值
function reset(){
    var testset = _$$("test");
    for (var i=0;i < testset.length;i++)
        testset[i].style.display = "none";
}
//  设置所有Dd的链接效果
function testa() {
    var oDd = document.getElementsByClassName("Dd");
    var testn = document.getElementsByClassName("test");
    for (var i=0;i < oDd.length;i++){
        oDd[i].index = i;
        oDd[i].onclick = function () {
            testn[this.index].style.display = testn[this.index].style.display == "none"?"block":"none";
        }
    }
}
//  子元素对父元素控制的案例（强行案例）
function list(dtNode) {
    var dlNode = dtNode.parentNode;
    if (dlNode.className == "open") {
        dlNode.className = "";
    } else {
        dlNode.className = "open";
    }
}
//************************************************





//********************主体函数********************
/*test1*/
function t1btn_1() {
    _$("t1bg").style.width = "200px";
}
function t1btn_2() {
    _$("t1bg").style.height = "200px";
}
function t1btn_3() {
    _$("t1bg").style.background = "#09F";
}
function t1btn_4() {
    _$("t1bg").style.display = "none";
}
function t1btn_5() {
    _$("t1bg").style.display = "block";
}

/*test2*/
function t2son(){
    var oT2son = _$("oT2main");
    oT2son.onclick=function(){
        oT2son.style.background = blue;
    };
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
    var oT7div = _$("t7menu").getElementsByTagName("div");
    oT7div[i].style.background = "#d0d0d0";

}

function t7Cout(i){
    var oT7div = _$("t7menu").getElementsByTagName("div");
    oT7div[i].style.background = "white";
}

function t7btn(){
    var oT7menu = _$("t7menu");
    oT7menu.style.display = oT7menu.style.display == "none"?"block":"none";
}


function t8bg(){
    var oDiv = _$("t8bg").getElementsByTagName("div");
    for(var i = 0; i < oDiv.length; i++){
        oDiv[i].onclick = function (){
            alert(this.innerHTML);
        }
    }
}

function t10btn(){
    var oBtn = _$("t10btn");
    var oDiv1 = _$("t10Div1");
    var oDiv3 = _$("t10Div3");
    var oT10bg = _$("t10bg");
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



window.onload = function(){
    _$();  t8bg(); t10btn(); t12li(); t13li(); reset(); testa(); }


