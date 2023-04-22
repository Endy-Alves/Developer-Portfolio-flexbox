document.getElementById("artigo").onclick = function() {
    var div = document.getElementById("menu-hover");
    if(div.style.display === "none") {
        div.style.display = "inline-flex";
    } else {
        div.style.display = "none";
    }
}