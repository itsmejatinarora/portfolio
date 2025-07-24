function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

const roles = [ "Full Stack Developer", "Tech Enthusiast"];
let roleIndex = 0;
let roleElement = document.getElementById("role");

function updateRole() {
    roleElement.textContent = roles[roleIndex];
    roleIndex = (roleIndex + 1) % roles.length;
}
setInterval(updateRole, 2000);
updateRole();



 // Counter Animation
 function animateValue(id, start, end, duration) {
    let obj = document.getElementById(id);
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) clearInterval(timer);
    }, stepTime);
}

document.addEventListener("DOMContentLoaded", () => {
    animateValue("experience", 0, 2, 1500);
    animateValue("projects", 0, 6, 1500);
});



document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".skill-box").forEach(skill => {
        let percentage = skill.getAttribute("data-percentage");
        let progress = skill.querySelector(".progress");
        progress.style.width = percentage + "%";
    });
});