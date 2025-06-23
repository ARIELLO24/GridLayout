// script.js - Interações básicas

document.addEventListener('DOMContentLoaded', function () {
    // Tabs na página de detalhes
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons and contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                // Add active class to clicked button and corresponding content
                button.classList.add('active');
                const tabId = button.textContent.toLowerCase();
                document.querySelector(`.tab-content.${tabId}`).classList.add('active');
            });
        });
    }

    // Efeito de hover nos cards de filme
    const movieCards = document.querySelectorAll('.movie-card');
    movieCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('.card-overlay').style.opacity = '1';
        });

        card.addEventListener('mouseleave', () => {
            card.querySelector('.card-overlay').style.opacity = '0';
        });
    });

    // Validação do formulário de contato
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Validação básica
            const name = this.querySelector('#name').value;
            const email = this.querySelector('#email').value;
            const subject = this.querySelector('#subject').value;
            const message = this.querySelector('#message').value;

            if (name && email && subject && message) {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                this.reset();
            } else {
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        });
    }
});