function list(dtNode) {
    var dlNode = dtNode.parentNode;
    if (dlNode.className == "open") {
        dlNode.className = "";
    } else {
        dlNode.className = "open";
    }
}

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