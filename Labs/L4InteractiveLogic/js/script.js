let mageScore =0;
let knightScore=0;
let monkScore=0;

let answered = [false, false, false]


function chooseMage(question, button) {
    if(answered[question] == false)
    {
        mageScore++;
        answered[question] = true;
        button.style.backgroundColor = "#ff8b8b";
        
    }
  
}

function chooseKnight(question, button) {
    if(answered[question] == false)
    {
        knightScore++;
        answered[question] = true;
        button.style.backgroundColor = "#ff8b8b";
    }
}

function chooseMonk(question, button) {
    if(answered[question] == false)
    {
        monkScore++;
        answered[question] = true;
        button.style.backgroundColor = "#ff8b8b";
    }
}

function showResult(){

    console.log(mageScore, knightScore, monkScore)

    if(answered.every(value => value === true)){

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
    else{
        document.getElementById("result").textContent = "Please answer all the questions.";
    }

    

}