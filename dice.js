let playerCard1=document.querySelectorAll("span")[0];
let playerCard2=document.querySelectorAll("span")[1];
let computerCard1=document.querySelectorAll("span")[2];
let computerCard2=document.querySelectorAll("span")[3];
let playerTotal=document.querySelectorAll("h2")[0];
let computerTotal=document.querySelectorAll("h2")[1];
let startbtn=document.querySelector("button");

let playersum=0;
let computersum=0;
let result=document.querySelector("h6");
let pname=document.querySelector("input");

function randomNumber(){
    let number =Math.floor(Math.random()*6 +1);
    console.log(number);
    return number;

}
startbtn.addEventListener("click",()=>{
    let playernumber1=randomNumber();
    let playernumber2=randomNumber();
    let computernumber1=randomNumber();
    let computernumber2=randomNumber();
    
    playerCard1.innerHTML=playernumber1;
    playerCard2.innerHTML=playernumber2;
    computerCard1.innerHTML=computernumber1;
    computerCard2.innerHTML=computernumber2;
    
    playersum=playernumber1+playernumber2;
    computersum=computernumber1+computernumber2;
    playerTotal.innerHTML=`Total : ${playersum}`;
    computerTotal.innerHTML=`Total : ${computersum}`;
    
    if (playersum > computersum){
        result.innerHTML=` you won the game`;
        result.style.color=`green`;
    }else if(playersum < computersum) {
        result.innerHTML=`sorry, you loss the game`;
        result.style.color='red';
    
    }else{
        result.innerHTML=`tough fight`;
        result.style.color='white';
    }
    });