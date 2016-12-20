function buildMap(id) {
    var sitemap = document.getElementById(id);
    var ul = document.createElement("ul");
    ul.className = "Nav";
    sitemap.appendChild(ul);

    var index = new Array("Home", "index.html",
            "Biography", "bio.html",
            "Breakout", "breakout.html",
            "popup", "popup.html",
            "Sitemap", "sitemap.html"
        );
    for (var i = 0; i < 10; i = i + 2) {
        var li = document.createElement("li");
        li.className = "Nav";
        ul.appendChild(li);
        var a = document.createElement("a");
        a.textContent = index[i];
        a.href = index[i + 1];
        li.appendChild(a);
    }

    var dropdown = new Array(
            "ToDoList", "todolist.html",
            "TicTacToe", "tictactoe.html",
            "ChalkBoard", "Chalkboard.html",
            "Multiplication Table", "MultiplicationTable.html",
            "Slider", "Mult.2Table.html",
            "Crosshair", "crosshair.html"
            );

    var li = document.createElement("li");
    li.className = "dropdown";
    ul.appendChild(li);
    var a = document.createElement("a");
    a.textContent = "Tools";
    a.href = "#proj";
    a.className = "dropbtn";
    li.appendChild(a);
    var div = document.createElement("div");
    div.className = "dropdown-content";
    li.appendChild(div);
    for (var i = 0; i < 12; i = i + 2) {
        var li = document.createElement("li");
        div.appendChild(li);
        var a = document.createElement("a");
        a.textContent = dropdown[i];
        a.href = dropdown[i + 1];
        div.appendChild(a);
    }
}


