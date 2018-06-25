
function submit() {
    var t = document.getElementById('input-t');
    var b = document.getElementById('input-b');
    var l = document.getElementById('input-l');
    var r = document.getElementById('input-r');

    if(t.value==0 || b.value==0 || l.value==0 || r.value==0){

        document.getElementById("bad-req").style.display = "block";
        document.getElementById("a-br").innerHTML = 'One or more fields are empty or with "0" ';
        document.getElementById("tittle-angle").innerHTML = "Square / Rectangle";

    }
    else{
        if(t.value < 0 || b.value < 0 || l.value < 0 || r.value < 0 ){


            document.getElementById("bad-req").style.display = "block"; 
            document.getElementById("a-br").innerHTML = "There is a negative number";

        }
        else{
            //square
            if(t.value == b.value && l.value == r.value && t.value == l.value){
                document.getElementById("bad-req").style.display = "none";
                document.getElementById("tittle-angle").innerHTML = "It's a square";
            }
            //rectangle
            else{

                if(t.value == b.value && l.value == r.value && t.value != l.value){
                    
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
                else{
                    if(t.value == b.value && l.value != r.value){
                        document.getElementById("bad-req").style.display = "block";
                        document.getElementById("tittle-angle").innerHTML = "The left or right side is wrong";
                        document.getElementById("a-br").innerHTML = "Bad Request";
                    }
                    else{
                        if(t.value != b.value && l.value == r.value){
                            document.getElementById("bad-req").style.display = "block";
                            document.getElementById("tittle-angle").innerHTML = "The top or bottom side is wrong";
                            document.getElementById("a-br").innerHTML = "Bad Request";
                        }
                        else{
                            if(t.value != b.value && l.value != r.value){
                                document.getElementById("bad-req").style.display = "block";
                                document.getElementById("tittle-angle").innerHTML = "The values are different, you can't form a figure";
                                document.getElementById("a-br").innerHTML = "Bad Request";
                            }
                        }
                    }
                    
                }

                
            }
        }
    }    

}




