// Event listener function to play sound if event.code matches the key pressed

document.addEventListener("keydown", function(event){
    if (event.code == "KeyQ") {
        let audio = new Audio("audio/Q.wav");
        audio.play();
        document.getElementById("drumpad1").style.backgroundColor = "pink";
    } else if (event.code == "KeyW") {
        let audio = new Audio("audio/W.wav");
        audio.play();
        document.getElementById("drumpad4").style.backgroundColor = "pink";
    } else if (event.code == "KeyE") {
        let audio = new Audio("audio/E.wav");
        audio.play();
        document.getElementById("drumpad7").style.backgroundColor = "pink";
    } else if (event.code == "KeyA") {
        let audio = new Audio("audio/A.wav");
        audio.play();
        document.getElementById("drumpad2").style.backgroundColor = "pink";
    } else if (event.code == "KeyS") {
        let audio = new Audio("audio/S.wav");
        audio.play();
        document.getElementById("drumpad5").style.backgroundColor = "pink";
    } else if (event.code == "KeyD") {
        let audio = new Audio("Audio/D.wav");
        audio.play();
        document.getElementById("drumpad8").style.backgroundColor = "pink";
    } else if (event.code == "KeyZ") {
        ;
        let audio = new Audio("audio/Z.wav");
        audio.play();
        document.getElementById("drumpad3").style.backgroundColor = "pink";
    } else if (event.code == "KeyX") {
            let audio = new Audio("audio/X.wav");
            audio.play();
            document.getElementById("drumpad6").style.backgroundColor = "pink";
    } else if (event.code == "KeyC") {
            let audio = new Audio("audio/C.wav");
            audio.play();
            document.getElementById("drumpad9").style.backgroundColor = "pink";
    }
});

// Event listener function to change drum pad colour event.code matches the key pressed

document.addEventListener("keyup", function(event){
    if (event.code == "KeyQ") {
        document.getElementById("drumpad1").style.backgroundColor = "#211f22";
    } else if (event.code == "KeyW") {
        document.getElementById("drumpad4").style.backgroundColor = "#211f22";
    } else if (event.code == "KeyE") {
        document.getElementById("drumpad7").style.backgroundColor = "#211f22";
    } else if (event.code == "KeyA") {
        document.getElementById("drumpad2").style.backgroundColor = "#211f22";
    } else if (event.code == "KeyS") {
        document.getElementById("drumpad5").style.backgroundColor = "#211f22";
    } else if (event.code == "KeyD") {
        document.getElementById("drumpad8").style.backgroundColor = "#211f22";
    } else if (event.code == "KeyZ") {
        document.getElementById("drumpad3").style.backgroundColor = "#211f22";
    } else if (event.code == "KeyX") {
        document.getElementById("drumpad6").style.backgroundColor = "#211f22";
    } else if (event.code == "KeyC") {
        document.getElementById("drumpad9").style.backgroundColor = "#211f22";
    }
});





