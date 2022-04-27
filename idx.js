for (let i = 0; i < 7; i++) {
    document.querySelectorAll("img")[i].addEventListener("click", function () {
        var filename = document.querySelectorAll("img")[i].getAttribute("name");
        let audio = new Audio(filename + ".mp3");
        audio.play();
    })
}

document.addEventListener("keypress", function (e) {
    switch (e.key) {
        case 'w':
            let audio1 = new Audio("tom1.mp3");
            audio1.play();
            break;
        case 'a':
            let audio2 = new Audio("tom2.mp3");
            audio2.play();
            break;
        case 's':
            let audio3 = new Audio("tom3.mp3");
            audio3.play();
            break;
        case 'd':
            let audio4 = new Audio("tom4.mp3");
            audio4.play();
            break;
        case 'j':
            let audio5 = new Audio("snare.mp3");
            audio5.play();
            break;
        case 'k':
            let audio6 = new Audio("crash.mp3");
            audio6.play();
            break;
        case 'l':
            let audio7 = new Audio("kick.mp3");
            audio7.play();
            break;

    }

})