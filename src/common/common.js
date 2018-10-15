(function  commonAlert() {
    let commonContain =  document.createElement("div");
    commonContain.setAttribute("id","commonAlert");
    commonContain.setAttribute("class",  "loginCaptcha");
    commonContain.style.display="none"
    let commonDt =  document.createElement("div");
    commonDt.setAttribute("id","commonAlertDt");
    let commonDiv =  document.createElement("div");
    commonDiv.appendChild(commonDt);
    commonContain.appendChild(commonDiv);
    let commonDivBg =  document.createElement("div");
    commonDivBg.setAttribute("class",  "commonBg");
    commonDivBg.setAttribute("id",  "commonBg");
    commonDivBg.style.display="none"
    let eleBody =  document.body;
    eleBody.appendChild(commonContain);
    eleBody.appendChild(commonDivBg);
})()

function alertError(error) {
    var eleDiv = document.getElementById("commonAlert");
    var eleDivDt = document.getElementById("commonAlertDt");
    var commBg = document.getElementById("commonBg");
    eleDiv.style.display = "table";
    commBg.style.display = "block";
    eleDivDt.innerHTML = error
    setTimeout(function () {
        eleDiv.style.display = "none";
        commBg.style.display = "none";
        eleDivDt.innerHTML = "";
    },2000)
}

function goHistory(th) {
    let sessionStatus = sessionStorage.getItem("oldUrl")?sessionStorage.getItem("oldUrl"):false;
}

function goHistoryBc(th) {
    th.$router.go(-1)
}

function setSession(th) {
    if(th.$store.state.isLogin){
        sessionStorage.setItem("oldUrl",window.location.href);
    }else{
        th.$router.push("login")
    }
}

function clearSession(key) {
    sessionStorage.removeItem(key)
}

function isLogin(th) {
    if(!th.$store.state.isLogin){
        th.$router.push('/login')
    }
}

function judeCss(dom,fun){
    function whichTransitionEvent(){
        var t;
        var el = document.createElement('fakeelement');
        var transitions = {
            'transition':'transitionend',
            'OTransition':'oTransitionEnd',
            'MozTransition':'transitionend',
            'WebkitTransition':'webkitTransitionEnd',

            'animationstart':'animationend',
            'webkitAnimationStart':'webkitAnimationEnd',
            'MSAnimationStart':'MSAnimationEnd',
        }
        for(t in transitions){
            if( el.style[t] !== undefined ){
                return transitions[t];
            }
        }
    }
    var transitionEvent = whichTransitionEvent();
    transitionEvent && dom.addEventListener(transitionEvent,function() {
        fun()
    });
}

function setCookie(key,val,time){//设置cookie方法
    var date=new Date(); //获取当前时间
    var expiresDays=time;  //将date设置为n天以后的时间
    date.setTime(date.getTime()+expiresDays*24*3600*1000); //格式化为cookie识别的时间
    document.cookie=key + "=" + val +";expires="+date.toGMTString();  //设置cookie
}

function getCookie(key) {//获取cookie方法
    /*获取cookie参数*/
    var getCookie = document.cookie.replace(/[ ]/g, "");  //获取cookie，并且将获得的cookie格式化，去掉空格字符
    var arrCookie = getCookie.split(";")  //将获得的cookie以"分号"为标识 将cookie保存到arrCookie的数组中
    var tips;  //声明变量tips
    for (var i = 0; i < arrCookie.length; i++) {   //使用for循环查找cookie中的tips变量
        var arr = arrCookie[i].split("=");   //将单条cookie用"等号"为标识，将单条cookie保存为arr数组
        if (key == arr[0]) {  //匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
            tips = arr[1];   //将cookie的值赋给变量tips
            break;   //终止for循环遍历
        }
    }
    return tips;
}

function delCookie(key){ //删除cookie方法
    var date = new Date(); //获取当前时间
    date.setTime(date.getTime()-10000); //将date设置为过去的时间
    document.cookie = key + "=v; expires =" +date.toGMTString();//设置cookie
}



export {
    alertError,
    goHistory,
    setSession,
    clearSession,
    goHistoryBc,
    isLogin,
    judeCss,
    getCookie,
    setCookie,
    delCookie
}

