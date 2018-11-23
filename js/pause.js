document.onkeydown = checkKey;
var pauseWindow = document.getElementById('pauseWindow');
var pauseFlag = 0;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '80' && pauseFlag == 0) {
            console.log("Flag:" + pauseFlag);
            pauseWindow.setAttribute('visible','true');
            pauseFlag = 1;
            console.log("Pause game");
    }
    else if (e.keyCode == '80' && pauseFlag == 1){
            console.log("Flag:" + pauseFlag);
            pauseWindow.setAttribute('visible','false');
            pauseFlag = 0;
            console.log("Unpause game"); 
    }

    if (e.keyCode == '81' && pauseFlag == 1) {
            window.location.replace("index.html");
            console.log("Exit game");
    }
}