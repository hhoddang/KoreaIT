$(function(){
    // alert("ok")

    window.setTimeout("location.reload()",1000)

    var now = new Date();
    if((now.getHours()  == 11) && (now.getMinutes () == 06) && (now.getSeconds () == 00) ){
        $("table tr:nth-child(1)").addClass("on")
    }

    if((now.getHours()  == 11) && (now.getMinutes () == 06) && (now.getSeconds () == 05)){
        $("table tr:nth-child(2)").addClass("on")
    }

    if((now.getHours()  == 11) && (now.getMinutes () == 06) && (now.getSeconds () == 10) ){
        $("table tr:nth-child(3)").addClass("on")
    }

    if((now.getHours()  == 11) && (now.getMinutes () == 06) && (now.getSeconds () == 15) ){
        $("table tr:nth-child(4)").addClass("on")
    }

    if((now.getHours()  == 11) && (now.getMinutes () == 06) && (now.getSeconds () == 20) ){
        $("table tr:nth-child(5)").addClass("on")
    }

});    
