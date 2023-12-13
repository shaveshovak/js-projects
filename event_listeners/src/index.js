const redirectToBootstrap = () => {
    // Redirect to the specified URL
    // window.location.href = "https://getbootstrap.com";

    // Open the specified URL in a new tab
    window.open("https://getbootstrap.com", "_blank");
}

// addEventListener
// Add click event listeners to buttons based on their class
document.addEventListener('DOMContentLoaded', function() {
    var redirectButtons = document.querySelectorAll('.redirect');

    for (var i = 0; i < redirectButtons.length; i++) {
      redirectButtons[i].addEventListener('click', function() {
        redirectToBootstrap();
      });
    }
});

// Here are some reasons why you might use DOMContentLoaded:
// Execution Timing: By waiting for the DOMContentLoaded event, you ensure that your JavaScript code runs after the HTML document has been fully parsed. This can prevent issues where your code tries to interact with elements that haven't been created yet.
// Avoiding Render Blocking: Placing your script tags at the end of the HTML document just before the closing </body> tag is one way to ensure that the HTML is parsed before the script is executed. However, in some cases, you might want to include your scripts in the <head> for various reasons (e.g., dependency order, third-party scripts). In such cases, using DOMContentLoaded allows you to defer the execution until after the HTML is ready.
// Separating Concerns: It helps separate the concerns of HTML structure and JavaScript behavior. Code inside the DOMContentLoaded event listener typically deals with setting up event handlers, modifying the DOM, or performing other actions that depend on the initial HTML structure.

// Validate Form
const validateForm = () => {
    // Get the input value
    const  nameInput = document.querySelector('#name').value;

    // Check if the input is empty
    if (nameInput.trim() === '') {
      // Display an alert if the input is empty
      alert('Please enter a name before submitting the form.');
      // Prevent the form from submitting
      return false;
    }

    // Allow the form to submit if the input is not empty
    return true;
}

// OnKeyUp

// Get the input element
const  nameInput = document.querySelector('#name')

// Add an event listener for the 'input' event
nameInput.addEventListener('input', function() {
  // Log the current value of the input to the console
  console.log(nameInput.value);
});