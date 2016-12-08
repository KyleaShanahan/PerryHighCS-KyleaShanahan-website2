function buildMap(id) {
    var sitemap = document.getElementById(id);
    var ul = document.createElement("ul");
    sitemap.appendChild(ul);
    var index = new Array("Home", "index.html",
            "Biography", "bio.html",
            "Breakout", "breakout.html",
            "popup", "popup.html",
            "ToDoList", "todolist.html",
            "TicTacToe", "tictactoe.html",
            "ChalkBoard", "Chalkboard.html",
            "Multiplication Table", "MultiplicationTable.html",
            "Slider", "Mult.2Table.html",
            "Sitemap", "sitemap.html");
    for(var i = 0; i < 20; i=i+2){
        var li = document.createElement("li");
        ul.appendChild(li);
        var a = document.createElement("a");
        a.textContent = index[i]; 
        a.href = index[i+1];
        li.appendChild(a);
    }
}