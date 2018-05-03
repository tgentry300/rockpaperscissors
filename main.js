const container = document.getElementById("container")

const userInput = prompt("Rock, Paper, or Scissors?").toLowerCase()


function addPhoto(photo) {

}

function attachImage(choice) {
    const imageContainer = document.createElement("div")
    imageContainer.classList.add("image-container")

    const heading = document.createElement("h3")
    heading.classList.add("image-heading")
    heading.textContent = choice
    imageContainer.appendChild(heading)

    const image = document.createElement("img")
    image.src = choice + ".jpg"
    image.classList.add("choice-image", choice)
    imageContainer.appendChild(image)

    container.appendChild(imageContainer)
}

function makediv(node) {
    const div = document.createElement("div")
    div.classList.add("element-wrapper")
    div.appendChild(node)
    container.appendChild(div)
}

const chance = Math.random()
let computerChoice
if (chance < 0.34) {
    computerChoice = "rock"
} else if (chance <= 0.67) {
    computerChoice = "paper"
} else {
    computerChoice = "scissors"
}



let compare = function (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!!!"
    }
    if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            return "You Win!"
        } else {
            return "You Lose!"
        }
    }
    if (userChoice === "scissors") {
        if (computerChoice === "paper") {
            return "You Win!"
        } else {
            return "You Lose!"
        }
    }
    if (userChoice === "paper") {
        if (computerChoice === "rock") {
            return "You Win!"
        } else {
            return "You Lose!"
        }
    }
}



makediv(document.createTextNode(compare(userInput, computerChoice)))

function putPhotosOnPage() {
    if (userInput === computerChoice) {
        attachImage("tie")
    } else {
        attachImage(userInput)
        attachImage(computerChoice)
    }
}

putPhotosOnPage()