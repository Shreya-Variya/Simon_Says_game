let gameSeq = [];
let userSeq = [];

let btns = ["red","green","blue","yellow"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2"); 

document.addEventListener("keypress", function () {
    if(started == false)
    {
        started = true;
        levelup();
    }
});

let start = document.querySelector(".start");

start.addEventListener("click", function () {
    if(started == false)
    {
        started = true;
        levelup();
    }
});

function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    btnFlash(randomBtn);
}

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    },250);
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx])
    {
        if(userSeq.length == gameSeq.length)
        {
            setTimeout(levelup(), 1000);
        }
    }
    else
    {
        h2.innerHTML = `Game Over ! Your score was <b>${level}</b> <br> Press any key to start the game or press start button `;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "black";
        }, 150); 
        reset();
    }
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn)
{
    btn.addEventListener("click",btnPress);
}

