var Timer = undefined;
var Timer1 = undefined;
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
var highScore = localStorage.getItem("Hscore") ? parseInt(localStorage.getItem("Hscore")) : 0;


window.onload = function () {
    debugger;
    if (localStorage.getItem("Lscore") != null) {
        LastScore.innerHTML = localStorage.getItem("Lscore").toString();
    }

    if (localStorage.getItem("Hscore") != null) {
        HighestScore.innerHTML = localStorage.getItem("Hscore").toString();
    }
    document.addEventListener("mousemove", function (e) {
        var l1 = document.getElementById("lblX");
        var l2 = document.getElementById("lblY");

        var cx = e.clientX;
        var cy = e.clientY;

        l1.innerHTML = cx;
        l2.innerHTML = cy;

    })

}

//Start Button
function btn1Click() {
    if (Timer == undefined) {
        Timer = setInterval(bubbleFun, 1000);
    }
    if (Timer1 == undefined) {
        Timer1 = setInterval(Movebubble, 10);
    }
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "inline-block";
    document.getElementById("btn3").style.display = "inline-block";
}

// Create Bubble
function bubbleFun() {
    var width = window.innerWidth;
    var height = window.innerHeight;

    var Xpos = Math.floor(Math.random() * (width - 100));
    var Ypos = Math.floor(Math.random() * (height - 100));
    var char = Math.floor(Math.random() * letters.length);

    var bubble = document.createElement("span");
    bubble.className = "bubble1";
    bubble.style.left = Xpos + "px";
    bubble.style.bottom = "0px";
    bubble.innerHTML = letters[char];
    document.getElementById("bodyId").appendChild(bubble);
}


//Move Top Bubble
var skippbubble = 1;
function Movebubble() {
    var bubbl = document.querySelectorAll(".bubble1");
    // var Wheight = window.innerHeight - 60;
    for (let i = 0; i < bubbl.length; i++) {
        var singleKey = bubbl[i];
        var BottomPos = parseInt(singleKey.style.bottom);
        singleKey.style.bottom = (BottomPos + 1) + "px";
        // console.log(BottomPos);

        if (BottomPos > 800) {
            document.getElementById("bodyId").removeChild(singleKey);

            var boxes = document.querySelectorAll(".box");

            count++;
            if (count <= boxes.length) {
                Tscore.innerHTML = ": " + skippbubble++;
                boxes[count - 1].classList.add("BGcolor");
            }
            if (count == 7) {
                alert("Game Over");
                clearInterval(Timer1);
                Timer1 = undefined;
                window.location.reload();

                (localStorage.getItem("Lscore"), score)
                if (score > highScore) {
                    highScore = score;
                    HighestScore.innerHTML = highScore;
                    localStorage.setItem("Hscore", highScore);
                }
            }
        }
    }
}

// Remove Bubble Event
var score = 0;
var count = 0;
function RemoveBubble(event) {
    var key = event.key;
    var bubbleId = document.querySelectorAll(".bubble1");

    for (let i = 0; i < bubbleId.length; i++) {
        const singlebubble = bubbleId[i];

        if (Timer1 == undefined) {

        }

        else {
            if (singlebubble.innerHTML == key) {
                document.getElementById("bodyId").removeChild(singlebubble);
                score++;
                NewScore.innerHTML = score;
                var t1 = NewScore.innerHTML;
                localStorage.setItem("Lscore", t1);

                if (score > highScore) {
                    highScore = score;
                    // HighestScore.innerHTML = highScore;
                    localStorage.setItem("Hscore", highScore);
                }
            }
        }
    }
    console.log(singlebubble);
}

//stop button
function btn2Click() {
    clearInterval(Timer1);
    Timer1 = undefined;
    clearInterval(Timer);
    Timer = undefined;
    document.getElementById("btn1").style.display = "inline-block";
}

//restart button
function btn3Click() {
    if (score > highScore) {
        highScore = score;
        HighestScore.innerHTML = highScore;
        localStorage.setItem("Hscore", highScore);
    }
    window.location.reload();
}