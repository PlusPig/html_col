function clickhandle() {
    console.log("click");
}
//dom0：只能一个事件
var btn1 = document.getElementById("btn1");
btn1.onclick = function () {
    console.log("dom0");
}
//dom2：可以同时多个事件
btn2.addEventListener("click", function () {
    console.log("dom2");
})