// Step 1: Create a literal object named myDog
const myDog = {
    name: "Brian Griffin",
    show: "Family Guy",
    breed: "White Labrador",
    personality: "Intellectual and sarcastic",
    catchphrase: "I'm not just a dog; I'm a writer!",
    mySound: "When you hear me, you'll realize I'm smarter than most humans!",
};

// Display the dog's name and properties in a message
const literalOutput = document.getElementById("literalOutput");
literalOutput.innerHTML = `
    Meet <strong>${myDog.name}</strong>, the <strong>${myDog.breed}</strong> from "<strong>${myDog.show}</strong>".<br>
    <strong>Personality:</strong> ${myDog.personality}<br>
    <strong>Catchphrase:</strong> "${myDog.catchphrase}"<br>
    <strong>Sound:</strong> "${myDog.mySound}"
`;

// Step 2: Create a constructor for the dog object
function Dog(name, show, breed, personality, catchphrase, mySound, canTalk) {
    this.name = name;
    this.show = show;
    this.breed = breed;
    this.personality = personality;
    this.catchphrase = catchphrase;
    this.mySound = mySound;
    this.canTalk = canTalk;

    // Add a method to display a greeting
    this.myGreeting = function () {
        return `
            Hi, I'm <strong>${this.name}</strong> from "<strong>${this.show}</strong>"!<br>
            I'm a <strong>${this.breed}</strong> and my personality is <strong>${this.personality}</strong>.<br>
            My catchphrase is "<strong>${this.catchphrase}</strong>".<br>
            About my sound: "<strong>${this.mySound}</strong>".<br>
            Can I talk? <strong>${this.canTalk ? "Yes, I can!" : "No, I can't."}</strong>
        `;
    };
}

// Create an object using the constructor
const myDogConst = new Dog(
    "Brian Griffin",
    "Family Guy",
    "White Labrador",
    "Intellectual and sarcastic",
    "I'm not just a dog; I'm a writer!",
    "When you hear me, you'll realize I'm smarter than most humans!",
    true // Brian Griffin can talk in the show
);

// Call the object's method to display the greeting
const constructorOutput = document.getElementById("constructorOutput");
constructorOutput.innerHTML = myDogConst.myGreeting();