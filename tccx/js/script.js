document.addEventListener("DOMContentLoaded", function() {
    const mainContent = document.querySelector("main");
    mainContent.classList.add("visible");
});


  // Seleciona o botão do hambúrguer e o menu
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');

  // Adiciona o evento de clique ao botão do hambúrguer
  hamburger.addEventListener('click', () => {
      // Alterna a classe 'active' no botão do hambúrguer
      hamburger.classList.toggle('active');

      // Alterna a classe 'show' no menu
      navMenu.classList.toggle('show');
  });


/* ------ */
const slider = document.querySelector('.themes-wrapper');
let isDown = false;
let startX;
let scrollLeft;
let scrollSpeed = 1.5; // Velocidade do scroll automático
let autoScrollDirection = 1; // Direção do scroll automático (1 para direita, -1 para esquerda)

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1; // Velocidade de arrasto
    slider.scrollLeft = scrollLeft - walk;
});

function autoScroll() {
    if (!isDown) {
        slider.scrollLeft += scrollSpeed;

        // Verifica se chegou ao final da cópia
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
            slider.scrollLeft = 0; // Volta para o início sem interrupções visíveis
        }
    }
    requestAnimationFrame(autoScroll);
}


// Inicia o loop de scroll automático
autoScroll();


