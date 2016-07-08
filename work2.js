// ********************封装********************
var _$ = function(id){
    if (document.getElementById(id)) {
        return document.getElementById(id);
    } else {
        return false;
    }
}
var _$c = function(classname){
    if (document.getElementsByClassName(classname)) {
        return document.getElementsByClassName(classname);
    } else {
        return false;
    }
}
var _$t = function(tagname){
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
    var testset = _$c("test");
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
function t1btn(){
    var ot1=_$("t1bg");
    _$("t1btn1").onclick = function(){ot1.style.width = "200px";}
    _$("t1btn2").onclick = function(){ot1.style.height = "200px";}
    _$("t1btn3").onclick = function(){ot1.style.background = "#09F";}
    _$("t1btn4").onclick = function(){ot1.style.display = "none";}
    _$("t1btn5").onclick = function(){ot1.style.display = "block";}
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
    var oT3btn = _$("t3btn");
    var oT3t1= _$("t3t1");
    var oT3t2= _$("t3t2");
    oT3btn.onclick = function() {
        alert(oT3t1.value);
        alert(oT3t2.value);
    }
}

/*test4*/
function t4btn(){
    var oT4btn = _$("t4btn");
    var oT4li =  _$("t6bbb")("t4ul").getElementsByTagName("li");
    for (var i=0;i<oT4li.length;i++)
        oT4li[i].style.background="red";
}

function t5over(){
    _$("t5org").className="t5hover";
}

function t5out(){
    _$("t5org").className="t5org";
}

function t6change(){
    _$("t6btn").onmouseover = function(){
        _$("t6bbb").style.display = "block";
    }
    _$("t6btn").onmouseout = function() {
        _$("t6bbb").style.display = "none";
    }
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
    var oLi = _$("t12box").getElementsByTagName("li");
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
    var oLi = _$("t13menu").getElementsByTagName("li");
    var oDiv = _$("t13com").getElementsByTagName("div");
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
    var oT251 = _$("T251");
    var oT252 = _$("T252");
    var oT25sp = _$("s_q");
    oT251.value > oT252.value ? (oT25sp.innerHTML = oT251.value) : (oT25sp.innerHTML = oT252.value);
}



window.onload = function(){
    _$();  t1btn(); t3btn();  t6change();  t8bg();  t10btn(); t12li(); t13li(); reset(); testa();   }


