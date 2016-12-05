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
            "Multiplication Table2", "Mult.2Table.html",
            "Sitemap", "sitemap.html");
    for(var i = 0; i < 20; i++){
        var li = document.createElement("li");
        ul.appendChild(li);
        var a = document.createElement("a");
        a.textContext = index[i]; 
        i++;
        a.href = index[i];
        li.appendChild(a);
    }
}