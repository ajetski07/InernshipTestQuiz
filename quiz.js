const textElement = document.getElementById("q1-text");
const optionButtonElement = document.getElementById("option-buttons");

function startQuiz() {
    showTextNode(1);
};

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text

    while (optionButtonElement.firstChild) {
        optionButtonElement.removeChild(optionButtonElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement("button")
            button.innerText = option.text
            button.classList.add("btn")
            button.addEventListener("click", () => selectOption(option))
            optionButtonElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

// function selectOption(option) {
//     const nextTextNodeId = option.nextText
//     if (nextTextNodeId <= 0) {
//         return startGame()
//     }
//     state = Object.assign(state, option.setState)
//     showTextNode(nextTextNodeId)
// }

const textNodes = [
    {
        id: 1,
        text: "In what year was HTML first written?",
        options: [
            {
                text: "1993"
            },
            {
                text: "1974"
            },
            {
                text: "1987"
            },
            {
                text: "2001"
            }
        ]
    }
];

startQuiz();