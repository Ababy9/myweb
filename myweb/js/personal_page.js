window.onload = function(){
    var oForm = document.getElementById('introForm');
    var oName = document.getElementById('name');
    var oPlace = document.getElementById('place');
    var oBirthday = document.getElementById('birthday');
    var oBloodtype = document.getElementById('bloodtype');
    var oIntro = document.getElementById('intro');
    //页面初始化时，若cookie存在，则填充
    if(getCookie('name')){
        oName.value = getCookie('name');
    }
    if(getCookie('place')){
        oPlace.value = getCookie('place');
    }
    if(getCookie('birthday')){
        oBirthday.value = getCookie('birthday');
    }
    if(getCookie('bloodtype')){
        oBloodtype.value = getCookie('bloodtype');
    }
    if(getCookie('intro')){
        oIntro.value = getCookie('intro');
    }

    //表单提交事件触发时，保存cookie
    oForm.onsubmit = function(){
        setCookie('name',oName.value,200);
        setCookie('place',oPlace.value,200);
        setCookie('birthday',oBirthday.value,200);
        setCookie('bloodtype',oBloodtype.value,200);
        setCookie('intro',oIntro.value,200); //保存帐号到cookie，有效期200天
        alert("提交成功！");
    };
};
//设置cookie
function setCookie(name,value,day){
    var date = new Date();
    date.setDate(date.getDate() + day);
    document.cookie = name + '=' + value + ';expires='+ date;
};
//获取cookie
function getCookie(name){
    var reg = RegExp(name+'=([^;]+)');
    var arr = document.cookie.match(reg);
    if(arr){
        return arr[1];
    }else{
        return '';
    }
};