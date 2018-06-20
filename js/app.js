function changeLayout() {
    // var x = document.getElementById("hours-min").style.flexDirection;

    // if (x == "row") {
    //     document.getElementById("hours-min").style.flexDirection = "column";
    //     document.getElementById("hours-min").style.margin = "-10px 0 0 0";
    //     document.getElementById("minutes").style.margin = "10px 0 15px 0";
    //     document.getElementById("box").style.height = "350px";
        
    // } else {
    //     document.getElementById("hours-min").style.flexDirection = "row";
    //     document.getElementById("box").style.height = "320px";
    //     document.getElementById("hours-min").style.alignItems= "baseline";
    // }

    var element = document.getElementById("hours-min");
    element.classList.toggle("direction-column");
  }

function submit() {
    var h = document.getElementById('input-h');
    var m = document.getElementById('input-m');

    if(h.value==0 && m.value==0){
        document.getElementById("result").innerHTML = "0&ordm";
        document.getElementById("tittle-angle").innerHTML = "At <span style=color:#46B02C;>  " +  h.value + " Hours </span> with <span style=color:#46B02C;> " + m.value + " Minutes</span> there's an angle of: " ;
    }
    else{
    if(h.value <= 0 || h.value > 12 || h.value >= e || m.value <= 0 || m.value > 60 || m.value >= e ){


        document.getElementById("bad-req").style.display = "block";
        document.getElementById("result").innerHTML = "0&ordm";
        document.getElementById("tittle-angle").innerHTML = "Add hours and minutes to get an angle";
    }
    else{
        //var final = Math.abs((h.value*(m.value/5)*6)-(m.value*6));
        var final = Math.abs((0.5 * m.value) + (30 * (h.value % 12)) - (6 * m.value));

        document.getElementById("bad-req").style.display = "none";
        document.getElementById("tittle-angle").innerHTML = "At <span style=color:#46B02C;>  " +  h.value + " Hours </span> with <span style=color:#46B02C;> " + m.value + " Minutes</span> there's an angle of: " ;
        document.getElementById("result").innerHTML = + final + "&ordm";
    }
    }    


    /*
    if (h == 12) h = 0;
    if (m == 60) m = 0;
    */
}




