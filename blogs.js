 // Simple form validation for quiz
        document.querySelectorAll('.quiz-option input').forEach(item => {
            item.addEventListener('change', event => {
                let checked = document.querySelectorAll('.quiz-option input:checked').length;
                let resultText = document.querySelector('.quiz-box p.mt-4 + p');
                
                if (checked >= 2) {
                    resultText.innerHTML = "Based on your answers, you would definitely benefit from seeing a physiotherapist in Naihati. Consider booking an appointment soon to address these issues.";
                } else if (checked == 1) {
                    resultText.innerHTML = "You might benefit from a physiotherapy consultation, especially if this issue significantly affects your daily life.";
                } else {
                    resultText.innerHTML = "You may not need physiotherapy at this time, but remember preventive care is always beneficial.";
                }
            });
        });
const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenu = document.getElementById("close-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.style.display = "flex";
  });

  closeMenu.addEventListener("click", () => {
    mobileMenu.style.display = "none";
  });