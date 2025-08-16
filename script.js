
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

const roles = [ "Python Full Stack Developer", "Tech Enthusiast"];
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

// skills section animation
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".skill-box").forEach(skill => {
    const percentage = parseInt(skill.getAttribute("data-percentage"));
    const progress = skill.querySelector(".progress");

    if (!progress) return;

    let current = 0;
    const duration = 1500; // total animation time in ms
    const stepTime = 15;   // smaller = smoother
    const increment = percentage / (duration / stepTime);

    const animate = setInterval(() => {
      current += increment;
      if (current >= percentage) {
        current = percentage;
        clearInterval(animate);
      }
      progress.style.width = `${current}%`;
    }, stepTime);
  });
});



// footer section 
// Set the current year dynamically
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
});




// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}