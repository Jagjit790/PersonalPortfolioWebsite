
window.addEventListener("load", function () {
  // Set delay in milliseconds (e.g., 3000ms = 3 seconds)
  const delay = 3500;

  setTimeout(function () {
    document.getElementById("preloader").style.display = "none";
    document.body.classList.add("loaded");
  }, delay);
});



document.querySelector(".button").addEventListener("click", function() {
 
    let name = document.getElementById("name").value.trim();
    let email = document.querySelector('input[placeholder="Enter Your Email"]').value.trim();
    let subject = document.getElementById("Subject").value.trim();
    let message = document.querySelector("textarea").value.trim();

 
    if (!name || !email || !subject || !message) {
        alert("⚠️ Please fill in all fields before sending.");
        return;
    }


    let whatsappNumber = "918146264594";  

    
    let whatsappMessage = 
        `Hello, I would like to contact you:%0A
Name: ${name}%0A
Email: ${email}%0A
Subject: ${subject}%0A
Message: ${message}`;

   
    let whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");

     // Clear the form
    document.getElementById("submit_form").reset();
});



