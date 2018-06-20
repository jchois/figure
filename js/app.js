function changeLayout() {
    var x = document.getElementById("hours-min").style.flexDirection;

    if (x == "row") {
        //x.style.backgroundColor = "red";
        document.getElementById("hours-min").style.flexDirection = "column";
        document.getElementById("hours-min").style.margin = "-10px 0 0 0";
        document.getElementById("minutes").style.margin = "10px 0 15px 0";
        document.getElementById("box").style.height = "350px";
        
    } else {
        document.getElementById("hours-min").style.flexDirection = "row";
        document.getElementById("box").style.height = "320px";
        document.getElementById("hours-min").style.alignItems= "baseline";
    }
    /*
    document.getElementById("hours-min").style.display = "flex";
    document.getElementById("hours-min").style.flexDirection = "column";
    document.getElementById("hours-min").style.margin = "-10px 0 0 0";
    document.getElementById("minutes").style.margin = "10px 0 15px 0";
    document.getElementById("box").style.height = "350px";
    */
  }

function submit() {
    var h = document.getElementById('input-h');
    var m = document.getElementById('input-m');

    if(h.value == 0 || h.value > 12 || m.value == 0 || m.value > 60 ){

        document.getElementById("bad-req").style.display = "block";
        document.getElementById("result").innerHTML = "0&ordm";
        document.getElementById("tittle-angle").innerHTML = "Add hours and minutes to get an angle";
    }
    else{
        var final = Math.abs((h.value*(m.value/5)*6)-(m.value*6));

        document.getElementById("bad-req").style.display = "none";
        document.getElementById("tittle-angle").innerHTML = "At " + h.value + " Hours with " + m.value + " Minutes there's an angle of: " ;
        document.getElementById("result").innerHTML = + final + "&ordm";
    }
    

    /*
    if (h == 12) h = 0;
    if (m == 60) m = 0;
    */
}




