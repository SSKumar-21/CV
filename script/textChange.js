const textElement = document.getElementById("TextChange");
const titles = [
  "Developer ",
  "AI Engineer ",
  "ML Specialist ",
  "Full‑Stack Developer ",
  "Data Scientist ",
  "Cybersecurity Enthusiast ",
  "Creative Technologist "
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentTitle = titles[titleIndex];
  const displayedText = isDeleting
    ? currentTitle.substring(0, charIndex--)
    : currentTitle.substring(0, charIndex++);

  textElement.textContent = displayedText;

  let typingSpeed = isDeleting ? 40 : 60;

  if (!isDeleting && charIndex === currentTitle.length) {
    typingSpeed = 1000; // pause before deleting
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    titleIndex = (titleIndex + 1) % titles.length;
    typingSpeed = 50; // pause before typing next
  }

  setTimeout(typeEffect, typingSpeed);
}

typeEffect();
