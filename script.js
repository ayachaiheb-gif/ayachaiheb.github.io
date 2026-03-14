const form = document.getElementById("contactForm");
const message = document.getElementById("success-message");

form.addEventListener("submit", function(e){
e.preventDefault();

message.style.display = "block";

form.reset();
});
