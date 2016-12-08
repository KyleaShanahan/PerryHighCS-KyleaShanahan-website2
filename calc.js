
function Radius(){
    var r = parseFloat (document.getElementById("r").value);
    var ans = Math.PI * Math.pow(x , 2);
    answer.textContent = ans;
    var div = document.getElementById("ans");
    var button = document.createElement("button");
    button.onclick = "Round();";
    button.textContent = "Round Answer";
    div.appendChild(button);
}

function round(){
    var answer = document.getElementById("answer");
    answer.textContent = Math.round(document.getElementById("answer").value);
}
        