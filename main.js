const userInput = prompt("Rock, Paper, or Scissors?")

function addPhoto(photo) {
    
}

function makediv(content) {
    div = document.createElement("div")
    div.textContent = content
    document.getElementById("container").appendChild(div)
}
let computerChoice = Math.random()
if (computerChoice < 0.34) {
    computerChoice = "rock"
} else if (computerChoice <= 0.67) {
    computerChoice = "paper"
} else {
    computerChoice = "scissors"
}
let compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        return "It's a tie!!!"
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors"){
            return "You Win!"
    } else {
        return "You Lose!"
    }
}
    if (choice1 === "scissors") {
       if (choice2 === "paper") {
            return "You Win!"
        } else {
            return "You Lose!"
        }
    }
    if (choice1 === "paper") {
            if (choice2 === "rock") {
                return "You Win!"
            } else {
                return "You Lose!"
            }
        }
    }



makediv(compare(userInput, computerChoice))