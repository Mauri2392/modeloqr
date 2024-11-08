const navLinks = document.querySelectorAll('.nav-link');

// Añadir clase 'active' al enlace clickeado
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

// Actualizar la clase 'active' en función del scroll
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navbarHeight = 60; // Altura del navbar en píxeles
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - navbarHeight - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

// Desplazamiento suave al hacer click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const navbarHeight = 60; // Altura del navbar en píxeles
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const targetPosition = targetElement.offsetTop - navbarHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Funciones para el modal
function openModal(divElement) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const modalPrice = document.getElementById("modal-price");

    const imgElement = divElement.querySelector('img');
    const spanElement = divElement.querySelector('span');
    const pElements = divElement.querySelectorAll('p');

    modal.style.display = "flex";
    modalImg.src = imgElement.src;
    modalTitle.textContent = spanElement.textContent; // Asigna el título
    modalDesc.textContent = pElements[1].textContent; // Asigna la descripción
    modalPrice.textContent = pElements[2].textContent; // Asigna el precio
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
