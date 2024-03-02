// Get references to HTML elements
const input = document.getElementById('input'); // Input field for weight in pounds
const error = document.getElementById('error'); // Error message display area
const result = document.getElementById('result'); // Result display area

// Function to convert weight from pounds to kilograms
function convertWeight()
{
    // Get the value entered by the user and convert it to a floating-point number
    const weightInPounds = parseFloat(input.value);



    // Check if the entered value is not a valid positive number
    if (isNaN(weightInPounds) || weightInPounds <= 0)
    {


        // Display error message if input is invalid
        error.innerText = "Please enter a valid positive number!";
        result.innerText = ""; // Clear any previous result



        // Set timeout to clear error message and input after 2 seconds
        errorTime = setTimeout(() =>
        {
            error.innerText = "";
            input.value = "";
        }, 2000);



    }
    else
    {
        // If input is valid, calculate weight in kilograms and display result
        const weightInKilograms = (weightInPounds / 2.2).toFixed(2); // Convert pounds to kilograms and round to 2 decimal places
       
       
        result.innerText = weightInKilograms + " kg"; // Display converted weight in kilograms
        error.innerText = ""; // Clear any previous error message



        // Set timeout to clear result message and input after 10 seconds
        resultTime = setTimeout(() =>
        {
            result.innerText = "";
            input.value = "";
        }, 10000);



    }

}


// Add event listener to input field to call convertWeight function when input changes
input.addEventListener("input", convertWeight);
