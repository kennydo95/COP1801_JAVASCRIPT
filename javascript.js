// Task 1: For Loop to Count and Check Odd/Even
let oddEvenOutput = document.getElementById("oddEvenOutput");
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        oddEvenOutput.innerHTML += `<p>Count ${i} is even</p>`;
    } else {
        oddEvenOutput.innerHTML += `<p>Count ${i} is odd</p>`;
    }
}

// Task 2: Do While Loop with User Input
function runDoWhileLoop() {
    let userInput = document.getElementById("userInput").value;
    let myNum = parseInt(userInput);
    let doWhileOutput = document.getElementById("doWhileOutput");
    doWhileOutput.innerHTML = ""; // Clear previous output

    if (myNum >= 5 && myNum <= 20) {
        let counter = 1;
        do {
            doWhileOutput.innerHTML += `<p>Loop Counter: ${counter}</p>`;
            counter++;
        } while (counter <= myNum);
    } else {
        doWhileOutput.innerHTML = "<p>Please enter a number between 5 and 20.</p>";
    }
}

// Task 3: Display Array Values
let subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];
let arrayOutput = document.getElementById("arrayOutput");
subjects.forEach((subject) => {
    arrayOutput.innerHTML += `<p>${subject}</p>`;
});

// Task 4: Display Array Values Separated by Commas
let arrayCommaOutput = document.getElementById("arrayCommaOutput");
arrayCommaOutput.innerHTML = subjects.join(", ");