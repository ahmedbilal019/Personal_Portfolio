function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
   const respond=document.getElementById('respond').innerHTML;
   
    const namePattern = /^[a-zA-Z\s]{1,15}$/; // Only letters, max-length 15
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Basic email pattern
    const messagePattern = /^[\s\S]{1,10}$/; // Minimum 10 characters


    if (!namePattern.test(name)) {
        alert("Please enter a valid name.");
        return false;
    }

  
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

   
    if (!messagePattern.test(message)) {
        alert("Message must be at least 10 characters long.");
        return false;
    }
   else{
    respond.style.display="flex";
     return true; // Allow form submission
     
   }
   
}