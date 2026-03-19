// =========================
// 🎯 TYPING EFFECT
// =========================

const text = [
"Digital Marketing Student",
"Social Media Manager",
"Future Marketing Expert"
];

let index = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

if(typingElement){
typingElement.textContent = "";

function typeEffect(){
if(charIndex < text[index].length){
typingElement.textContent += text[index].charAt(charIndex);
charIndex++;
setTimeout(typeEffect,100);
}else{
setTimeout(eraseEffect,1500);
}
}

function eraseEffect(){
if(charIndex > 0){
typingElement.textContent = text[index].substring(0,charIndex-1);
charIndex--;
setTimeout(eraseEffect,50);
}else{
index = (index+1) % text.length;
setTimeout(typeEffect,500);
}
}

typeEffect();
}

// =========================
// 🔝 BACK TO TOP
// =========================

const topBtn = document.getElementById("topBtn");

if(topBtn){
topBtn.onclick = () => {
window.scrollTo({ top:0, behavior:"smooth" });
};
}

// =========================
// 🌙 DARK MODE
// =========================

const themeBtn = document.getElementById("themeBtn");

if(themeBtn){
themeBtn.onclick = () => {
document.body.classList.toggle("dark-mode");
};
}

// =========================
// 📊 SKILLS ANIMATION
// =========================

const skills = document.querySelectorAll(".bar span");

window.addEventListener("scroll", () => {
skills.forEach(skill => {
if(skill.getBoundingClientRect().top < window.innerHeight){
skill.style.width = skill.getAttribute("data-width");
}
});
});

// =========================
// ✉️ CONTACT FORM
// =========================

const form = document.getElementById("contactForm");
const message = document.getElementById("success-message");

if(form){
form.addEventListener("submit", function(e){
e.preventDefault();

message.style.display = "block";

setTimeout(() => {
message.style.display = "none";
}, 3000);

form.reset();
});
}

// =========================
// ✨ PARTICLES BACKGROUND
// =========================

const canvas = document.getElementById("particles");

if(canvas){
const ctx = canvas.getContext("2d");

function resizeCanvas(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let particles = [];

class Particle{
constructor(){
this.x = Math.random()*canvas.width;
this.y = Math.random()*canvas.height;
this.size = Math.random()*3+1;
this.speedX = Math.random()*1-0.5;
this.speedY = Math.random()*1-0.5;
}

update(){
this.x += this.speedX;
this.y += this.speedY;
}

draw(){
ctx.fillStyle="#d9b08c";
ctx.beginPath();
ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
ctx.fill();
}
}

function init(){
particles = [];
for(let i=0;i<80;i++){
particles.push(new Particle());
}
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
particles.forEach(p=>{
p.update();
p.draw();
});
requestAnimationFrame(animate);
}

init();
animate();
}
