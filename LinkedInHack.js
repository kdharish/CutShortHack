const buttons = document.querySelectorAll('button');

// Map over each button and log its className
buttons.forEach((button, index) => {
  console.log(`Button ${index + 1}:`, button.className);
     button.click();
});


// Easy Apply ---
const applyButton = document.querySelector('button.jobs-apply-button.artdeco-button--3.artdeco-button--primary');

if (applyButton) {
    applyButton.click();


    setTimeout(() => {
const modalDiv = document.querySelector(".artdeco-modal.artdeco-modal--layer-default.jobs-easy-apply-modal");

if (modalDiv) {
  const applyButton = modalDiv.querySelector(".artdeco-button.artdeco-button--2.artdeco-button--primary.ember-view");

  if (applyButton) {
    applyButton.click(); // First click
    console.log("Apply button clicked!");

    // Wait for 5 seconds and check again
    setTimeout(() => {
      let applyButtonAgain = modalDiv.querySelector(".artdeco-button.artdeco-button--2.artdeco-button--primary.ember-view");

      if (applyButtonAgain) {
        applyButtonAgain.click();
        console.log("Apply button clicked again after 5 seconds!");
      } else {
        console.log("First button not found after 5 seconds. Searching for alternative button...");

        // Search for the alternative button
        let alternativeButton = modalDiv.querySelector(".rtdeco-button.artdeco-button--2.artdeco-button--primary.ember-view");

        if (alternativeButton) {
          alternativeButton.click();
          console.log("Alternative button clicked!");
        } else {
          console.log("Alternative button not found either.");
        }
      }

      // After 2 seconds, search for the original button again
      setTimeout(() => {
        let finalCheckButton = modalDiv.querySelector(".artdeco-button.artdeco-button--2.artdeco-button--primary.ember-view");
        
        if (finalCheckButton) {
          finalCheckButton.click();
          console.log("Final button clicked after 2 seconds!");
        } else {
          console.log("Final button not found.");
        }
      }, 2000); // 2 seconds delay

    }, 5000); // 5 seconds delay
  } else {
    console.log("Apply button not found inside the modal.");
  }
} else {
  console.log("Modal not found.");
}
}, 5000,)
} else {
  console.log("Button not found");
}
