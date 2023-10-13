let numberDisplay = document.querySelector(".text-wrapper-2");   
        let increaseButton = document.querySelector(".vector");
        let decreaseButton = document.querySelector(".img");

        let number = 1; // Initialize the number to 1

        // Function to update and display the number
        function updateNumber() {
        numberDisplay.textContent = number;
        }

        // Event listener for the increase button
        increaseButton.addEventListener('click', function () {
        number++;
        updateNumber();
        });

        // Event listener for the decrease button
        decreaseButton.addEventListener('click', function () {
        if (number > 0) {
        number--;
        updateNumber();
        }
        });

        // Initial display
        updateNumber();


        let num = document.querySelector("#num");   
        let increase = document.querySelector("#add");
        let decrease = document.querySelector("#minus");

        let numb = 1; // Initialize the number to 1

        // Function to update and display the number
        function updateNumb() {
        num.textContent = numb;
        }

        // Event listener for the increase button
        increase.addEventListener('click', function () {
        numb++;
        updateNumb();
        });

        // Event listener for the decrease button
        decrease.addEventListener('click', function () {
        if (numb > 0) {
        numb--;
        updateNumb();
        }
        });

        // Initial display
        updateNumb();