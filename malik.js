// ===== Menu Toggle =====
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// ===== Persistent Download Counter =====
const downloadBtn = document.getElementById('downloadBtn');
const downloadCountDisplay = document.getElementById('downloadCount');

// Load saved count from localStorage (default to 0)
let count = parseInt(localStorage.getItem('downloadCount')) || 0;
downloadCountDisplay.textContent = `Downloads: ${count}`;

if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
        count++;
        downloadCountDisplay.textContent = `Downloads: ${count}`;
        localStorage.setItem('downloadCount', count);
    });
}
