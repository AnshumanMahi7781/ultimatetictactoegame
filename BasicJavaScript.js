let AudioTurn = new Audio("./touchSound.mp3");
let GameOverAudio = new Audio("./gameOver.mp3");
let turn= "X";
let gameOver= false;

const changeTurn =()=>{
    return turn=== "X"?"0": "X"
}

const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName('boxText');
    let wins = [
        [0, 1, 2, 0, 5, 0],
        [3, 4, 5, 0, 15, 0],
        [6, 7, 8, 0, 25, 0],
        [0, 3, 6, -10, 15, 90],
        [1, 4, 7, 0, 15, 90],
        [2, 5, 8, 10, 15, 90],
        [0, 4, 8, 0, 15, 45],
        [2, 4, 6, 0, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !=="")) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won ";
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "100px";
            document.querySelector('.line').style.width = "30vw";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`;
            gameOver= true;
            GameOverAudio.play();
        }
    })

}

// 

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{

    let boxtext = element.querySelector('.boxText')
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === '')
        {
            boxtext.innerText = turn;
            turn=changeTurn();
            AudioTurn.play();
            checkWin();
            if(!gameOver)
            {
                document.getElementsByClassName('info')[0].innerText = "Turn For "+ turn;
            }
           
           

        }
    })

})


reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    gameOver= false; 
    document.getElementsByClassName('info')[0].innerText = "Turn For "+ turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px"
    document.querySelector('.line').style.width = "0vw";
   

})