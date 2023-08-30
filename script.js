console.log("Welcome To Tic Tac Toe")
let music = new Audio("")
let audioturn = new Audio("ting.mp3.mpeg")
let gameover = new Audio("gameover.mp3.mpeg")
let turn ="X" 
let isgameover = false;

//Function to chnage the turn
 const changeTurn = ()=>{
    return turn === "X"? "0": "X"
 }

 // Function to check for a Win
 const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 2, 4, 0],
        [3, 4, 5, 2, 11.6, 0],
        [6, 7, 8, 2, 19.5, 0],
        [0, 3, 6, -6.1, 12, 90],
        [1, 4, 7, 1.8, 12, 90],
        [2, 5, 8, 9.6, 12, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, -2, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=="") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.Line').style.width = "20vw"
            document.querySelector('.Line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
    

 }

 // Game Logic
 // music.play()
 let boxes = document.getElementsByClassName("box");
 Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
           turn = changeTurn();
            audioturn.play();
            checkWin(); 
            if(!isgameover)
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

        }
    })
 })

 //addig event listener for reset button
  reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"

  })