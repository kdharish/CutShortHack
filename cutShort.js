function interactWithElements() {
    // Step 1: Find and click the first button
    const button = document.querySelector('.sc-8c2323fe-0.hwKSIH');
    if (button) {
        button.click();
        console.log('Button clicked, waiting for 1 second...');
        setTimeout(() => {
            // Step 2: Try to find the div with class 'sc-d023fd03-0 iysbVo'
            let div = document.querySelector('.sc-d023fd03-0.iysbVo');
            if (!div) {
                console.log('Div not found, waiting for 1 second and trying again...');
                setTimeout(() => {
                    myFunction();
                }, 1000); // Retry after 1 second
            } else {
                console.log('Div found immediately!');
                myFunction();
            }
        }, 1000); // Wait for 1 second before checking for the div
    } else {
        console.log('Button not found.');
    }
}
function myFunction() {
var aboutMe = `Dear HR,

I hope you are doing well. I am reaching out to express my interest in suitable MERN Stack Developer opportunities. With over 4 years of experience in MongoDB, Express.js, React.js, and Node.js, I have worked extensively on building scalable applications, implementing event-driven architectures, and optimizing performance. Additionally, I have experience with multi-rate limiting strategies for secure API development.

Currently, I am serving my notice period, which will end on May 28, 2025. I am actively exploring opportunities where I can contribute my skills and grow in a dynamic environment. I would love to connect and discuss potential roles that align with my experience.

Looking forward to hearing from you!

Best regards,
Harish Kumar+91 931XXXXXX45`
setTimeout(() => {
    let div = document.querySelector('.sc-d023fd03-0.iysbVo');
    if (div) {
        console.log('Div found!');
        // Step 3: Find the textarea and paste 'hello world' into it
        const textArea = document.querySelector('.sc-989085ec-0.dOBxUZ');
        if (textArea) {
            textArea.value = aboutMe;
            console.log('Text pasted into the textarea');
            
            // Step 4: Find the button again and click it
            setTimeout(() => {
const buttonInsideDiv = div.querySelector('button[class*="sc-8c2323fe-0"]'); // Find the button inside the div
            if (buttonInsideDiv) {
                buttonInsideDiv.click();
                console.log('Button inside div clicked again after pasting text');
            } else {
                console.log('Button not found inside the div after pasting text.');
            }
        } ,1000);
        } else {
            console.log('Textarea not found.');
        }
    } else {
        console.log('Div still not found after waiting 1 second.');
    }
}, 1000);
}

// Run the script
function runScript() {
    setInterval(() => {
        interactWithElements(); 
    }, 5000);
       }
runScript();
