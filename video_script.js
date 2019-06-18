window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");

    document.querySelector("#pilot_video").addEventListener("click", afspilVideo);
    document.querySelector("#anders_video").addEventListener("click", afspilVideo);
}


function afspilVideo() {
    console.log("afspilVideo");


    document.querySelector("#pilot_video").removeEventListener("click", afspilVideo);
    document.querySelector("#anders_video").removeEventListener("click", afspilVideo);

    document.querySelector("#pilot_video").play();
    document.querySelector("#anders_video").play();
    document.querySelector("#pilot_video").addEventListener("click", pauseVideo);
    document.querySelector("#anders_video").addEventListener("click", pauseVideo);
}

function pauseVideo() {
    console.log("pauseVideo");
    document.querySelector("#pilot_video").removeEventListener("click", pauseVideo);
    document.querySelector("#anders_video").removeEventListener("click", pauseVideo);


    document.querySelector("#pilot_video").pause();
    document.querySelector("#anders_video").pause();
    document.querySelector("#pilot_video").addEventListener("click", afspilVideo);
    document.querySelector("#anders_video").addEventListener("click", afspilVideo);
}
