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







// Función para abrir el modal y mostrar el contenido completo
function openModal(divElement) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const modalPrice = document.getElementById("modal-price");

    // Elementos del div principal
    const imgElement = divElement.querySelector('img');
    const spanElement = divElement.querySelector('span');
    const pElements = divElement.querySelectorAll('p');

    // Mostrar el modal y asignar el contenido
    modal.style.display = "flex";
    modalImg.src = imgElement.src;
    modalTitle.textContent = spanElement.textContent;
    
    // Usa el contenido completo para el modal
    modalDesc.textContent = pElements[1].dataset.fullText;
    modalPrice.textContent = pElements[2].textContent;
}



// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Truncado de texto en el div principal
document.querySelectorAll('.info p:nth-child(2)').forEach(descriptionElement => {
    const charLimit = 100;
    const originalText = descriptionElement.textContent;

    // Guarda el texto completo en un atributo data-full-text para el modal
    descriptionElement.dataset.fullText = originalText;

    // Trunca el texto en el div principal si supera el límite de caracteres
    if (originalText.length > charLimit) {
        const truncatedText = originalText.substring(0, charLimit) + '...';
        descriptionElement.textContent = truncatedText;
    }
});
