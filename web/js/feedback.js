function countDown(){
    //获取初始时间
    var time = document.getElementById("Time");
    //获取到id为time标签中的数字时间
    if(time.innerHTML == 0){
        //等于0时清除计时，并跳转该指定页面
        window.location.href="main.html";
    }else{
        time.innerHTML = time.innerHTML-1;
    }
}
//1000毫秒调用一次
window.setInterval("countDown()",1000);