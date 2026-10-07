let mageScore =0;
let knightScore=0;
let monkScore=0;

function chooseMage() {
    mageScore++;
}

function chooseKnight() {
    knightScoreScore++;
}

function chooseMonk() {
    monkScore++;
}

function showResult(){

    if (mageScore > knightScore && mageScore > monkScore){
        document.getElementById("result").textContent = "You are a Mage!";

    }
    else if (knightScore > mageScore && knightScore > monkScore){
        document.getElementById("result").textContent = "You are a Knight!";
    }
    else if (monkScore > mageScore && monkScore > knightScore){
        document.getElementById("result").textContent = "You are a Monk!";

    } else {
        document.getElementById("result").textContent = "You are a Balanced Adventurer!";
        
    }


}