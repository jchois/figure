function changeLayout() {

    var element = document.getElementById("hours-min");
    element.classList.toggle("direction-column");
  }

function submit() {
    var t = document.getElementById('input-t');
    var b = document.getElementById('input-b');
    var l = document.getElementById('input-l');
    var r = document.getElementById('input-r');

    if(t.value==0 || b.value==0 || l.value==0 || r.value==0){

        document.getElementById("bad-req").style.display = "block";

    }
    else{
        if(t.value <= 0 || b.value <= 0 || l.value <= 0 || r.value <= 0 ){


            document.getElementById("bad-req").style.display = "block";
            document.getElementById("tittle-angle").innerHTML = "Add hours and minutes to get an angle";
        }
        else{
            if(t.value != b.value || l.value != r.value && t.value != l.value){
                document.getElementById("tittle-angle").innerHTML = "It's not a figure";
            }
            //square
            if(t.value == b.value && l.value == r.value && t.value == l.value){
                document.getElementById("bad-req").style.display = "none";
                document.getElementById("tittle-angle").innerHTML = "It's a square";
            }
            //rectangle
            else{
                if(t.value == b.value && l.value == r.value && t.value != l.value){
                    if(l.value > t.value){
                        document.getElementById("bad-req").style.display = "none";
                        document.getElementById("tittle-angle").innerHTML = "It's a rectangle, the left and right side are larger";
                    }
                    else{
                        if(l.value < t.value){
                            document.getElementById("bad-req").style.display = "none";
                            document.getElementById("tittle-angle").innerHTML = "It's a rectangle, the top and bottom side are larger";
                        }
                    }
                }
            }
        }
    }    

}




