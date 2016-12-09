
function Radius(){
    var r = parseFloat (document.getElementById("r").value);
    ans = Math.PI * Math.pow(r, 2);
    var answer = document.getElementById("answer");
    answer.textContent = ans;
    var div = document.getElementById("ans");

    if(sc == 0){
       var button = document.createElement("button");
    button.onclick = "Round();";
    button.textContent = "Round Answer";
    div.appendChild(button); 
    } else {
        //finish if statement
    }
}

function round(){
    var answer = document.getElementById("answer");
    answer.textContent = Math.round(document.getElementById("answer").value);
}
        