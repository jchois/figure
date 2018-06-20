function changeLayout() {
    document.getElementById("hours-min").style.display = "flex";
    document.getElementById("hours-min").style.flexDirection = "column";
    document.getElementById("hours-min").style.margin = "-10px 0 0 0";
    document.getElementById("minutes").style.margin = "10px 0 15px 0";
    document.getElementById("box").style.height = "350px";
  }

function submit() {
    var h = document.getElementById('input-h');
    var m = document.getElementById('input-m');

    if(h.value == 0 || h.value > 12 || m.value == 0 || m.value > 60 ){

        alert("Error");
        document.getElementById("result").innerHTML = "0&ordm";
        document.getElementById("tittle-angle").innerHTML = "Add hours and minutes to get an angle";
    }
    else{
        document.getElementById("tittle-angle").innerHTML = "At " + h.value + " Hours with " + m.value + " Minutes there's an angle of: " ;
        document.getElementById("result").innerHTML = "15&ordm";
    }
    
    // if(h.value != 0 && h.value < 12|| m.value != 0 ){
    //    document.getElementById("result").innerHTML = "15&ordm";
    //}

    // h.value <= 12 || m.value <= 60
    // if (h <0 || m < 0 || h >12 || m > 60){
    //     alert("Error");
    // }

    /*
    if (h == 12) h = 0;
    if (m == 60) m = 0;
    */
}




