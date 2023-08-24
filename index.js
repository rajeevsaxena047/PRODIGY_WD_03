// for playing background music
let music = new Audio("audios/High-Tide.mp3");
music.play();
music.volume=0.9;

// declaring audios and variables
let turnAudio = new Audio("audios/pop-up.mp3");

let turn = "X";
let isgameover = false;

// function for changing the turn 
function changeTurn() {
    if(turn === "X"){
        return "0";
    }
    else if(turn === "0"){
        return "X";
    }
}

// function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext");
    let wins =[[0,1,2,1,5,0],[3,4,5,1,15,0],[6,7,8,1,25,0],[0,3,6,-9,15,90],[1,4,7,1,15,90],[2,5,8,11,15,90],[0,4,8,1,15,45],[2,4,6,1,15,135]];

    wins.forEach(e =>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!=="")){
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "150px";
            document.querySelector(".line").style.width = "28vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

// logic of game
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click' , ()=>{
        if(boxtext.innerText === ""){
            boxtext.innerText = turn;
            turnAudio.play();
            turn = changeTurn();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn of " + turn;
            }
        }
    })
})

// reset the game
reset.addEventListener("click" , ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText="";
    });
    turn = "X";
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText = "Turn of " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector(".line").style.width = "0";
})
