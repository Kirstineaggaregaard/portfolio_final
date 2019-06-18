window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    document.querySelector(".vinder").addEventListener("click", afspilVinder);
    document.querySelector(".taber").addEventListener("click", afspilTaber);



}

function afspilVinder() {
    console.log("afspil vinder");
    document.querySelector("#game_complete").play();
}

function afspilTaber() {
    console.log("afspil taber");
    document.querySelector("#game_over").play();
}

