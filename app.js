
window.addEventListener('hashchange', updateActiveNavLink);

function updateActiveNavLink() {
    const activePage = window.location.hash;
    const navLinks = document.querySelectorAll('#nav_bar ul li a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === activePage) {
            link.classList.add('active'); 
        } else {
            link.classList.remove('active'); 
        }
    });
}

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
   
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
    else {
       alert("Message has been delivered scuuessfully");
        return true; // Allow form submission
        
    }

}
