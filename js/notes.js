    var oView = document.getElementsByClassName("message_bottom_center")[0];
    var oTitle01 = document.getElementById("title01");
    var num = 0;
    //点击标题后，查看数加1
    oTitle01.onclick = function () {
        oView.innerHTML = num;
        num += 1;
    }
    