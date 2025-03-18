        // Step 1: Create a constructor for the dog object
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
                let talkMessage = this.canTalk ? "I can talk!" : "I cannot talk.";
                return `
                    Hi, I'm <strong>${this.name}</strong> from "<strong>${this.show}</strong>"!<br>
                    I'm a <strong>${this.breed}</strong> and my personality is <strong>${this.personality}</strong>.<br>
                    My catchphrase is "<strong>${this.catchphrase}</strong>".<br>
                    About my sound: "<strong>${this.mySound}</strong>".<br>
                    <strong>${talkMessage}</strong>
                `;
            };
        }

        // Step 2: Create two new dog objects using the constructor
        const dog1 = new Dog(
            "Brian Griffin",
            "Family Guy",
            "White Labrador",
            "Intellectual and sarcastic",
            "I'm not just a dog; I'm a writer!",
            "When you hear me, you'll realize I'm smarter than most humans!",
            true // Brian Griffin can talk
        );

        const dog2 = new Dog(
            "Scooby-Doo",
            "Scooby-Doo, Where Are You!",
            "Great Dane",
            "Cowardly but lovable",
            "Scooby-Dooby-Doo!",
            "When you hear me, you might laugh because I'm scared of everything!",
            false // Scooby-Doo cannot talk (he only says his catchphrase)
        );

        // Step 3: Store the dogs in an array for easy access
        const dogs = [dog1, dog2];

        // Step 4: Display all dogs and their properties using a for...in loop
        console.log("List of Dogs:");
        for (let i = 0; i < dogs.length; i++) {
            console.log(`Dog ${i + 1}:`);
            for (let key in dogs[i]) {
                if (typeof dogs[i][key] !== "function") { // Skip methods
                    console.log(`${key}: ${dogs[i][key]}`);
                }
            }
            console.log("-------------------");
        }

        // Step 5: Prompt the user to select a dog by name
        const userInput = prompt("Enter the name of the dog you want to select (Brian Griffin or Scooby-Doo):");
        const selectedOutput = document.getElementById("selectedOutput");
        const errorMessage = document.getElementById("errorMessage");

        // Step 6: Find the selected dog and display its information
        let selectedDog = dogs.find(dog => dog.name.toLowerCase() === userInput.toLowerCase());

        if (selectedDog) {
            selectedOutput.innerHTML = selectedDog.myGreeting();
            errorMessage.textContent = ""; // Clear any previous error message
        } else {
            selectedOutput.textContent = ""; // Clear any previous output
            errorMessage.textContent = `Error: The dog "${userInput}" does not exist in our list.`;
        }
