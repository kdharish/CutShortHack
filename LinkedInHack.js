const buttons = document.querySelectorAll('button');

// Map over each button and log its className
buttons.forEach((button, index) => {
  console.log(`Button ${index + 1}:`, button.className);
     button.click();
});
