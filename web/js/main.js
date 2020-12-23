// 轮播图
var index=0;
function ChangeImg() {
    index++;
    var a=document.getElementsByClassName("img-slide");
    if(index>=a.length) index=0;
    for(var i=0;i<a.length;i++){
        a[i].style.display='none';
    }
    a[index].style.display='block';
}
setInterval(ChangeImg,2000);

//search
window.onload=function search() {
    var inp = document.getElementsByTagName("input");
    var oP = document.getElementById("box");

    inp[1].onclick = function () {
        var str = inp[0].value;
        if (!str) return; //若内容不存在即刷新页面
        oP.innerHTML = oP.innerHTML.split(str).join('<span>' + str + '</span>');
    }
};