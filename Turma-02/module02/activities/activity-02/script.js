// Inicialização do Swiper.js
const swiper = new Swiper('.mySwiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
});

// Inicialização do AOS.js
AOS.init({
    once: true,
});

// Mock de dados de serviços
const mockData = [
    { name: "Cibersegurança", description: "Serviços especializados em proteger seus dados e sistemas contra ameaças digitais. Realizo auditorias de segurança, implementação de firewalls, detecção e resposta a incidentes, além de consultoria para a criação de políticas de segurança eficazes." },
    { name: "Desenvolvimento Full Stack", description: "Criação de sites e aplicações web robustas e eficientes, desde o design da interface do usuário até a funcionalidade do backend. Utilizo tecnologias modernas para garantir que seu projeto esteja sempre à frente no mercado." },
    { name: "Suporte Técnico", description: "Atendimento especializado para resolução de problemas técnicos, manutenção de sistemas e suporte ao usuário. Disponível para assistência remota e presencial, garantindo que seus sistemas funcionem perfeitamente o tempo todo." },
];

const servicesContainer = document.getElementById('services-container');
mockData.forEach(service => {
    servicesContainer.innerHTML += `
        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${service.name}</h5>
                    <p class="card-text">${service.description}</p>
                </div>
            </div>
        </div>`;
});

// URL da API fictícia para testemunhos
const testimonialsApiUrl = 'https://jsonplaceholder.typicode.com/users'; // Use a URL da sua API real

async function fetchTestimonials() {
    try {
        const response = await fetch(testimonialsApiUrl);
        if (!response.ok) {
            throw new Error('Erro na rede ao buscar dados');
        }
        const testimonials = await response.json();
        populateTestimonials(testimonials);
    } catch (error) {
        console.error('Erro:', error);
    }
}

function populateTestimonials(testimonials) {
    const testimonialContainer = document.getElementById('testimonial-container');
    testimonialContainer.innerHTML = ''; // Limpa o conteúdo anterior

    testimonials.forEach((testimonial, index) => {
        testimonialContainer.innerHTML += `
            <div class="col-md-6" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="card">
                    <img src="https://via.placeholder.com/150" class="card-img-top" alt="${testimonial.name}">
                    <div class="card-body">
                        <blockquote class="blockquote">
                            <p>"${testimonial.company.name} oferece um ótimo serviço!"</p> <!-- Exemplo de depoimento -->
                            <footer class="blockquote-footer">${testimonial.name}</footer>
                        </blockquote>
                    </div>
                </div>
            </div>`;
    });
}

// Chama a função ao carregar a página
fetchTestimonials();

// Validação e envio do formulário
emailjs.init('YOUR_USER_ID'); // Substitua pelo seu USER_ID do EmailJS

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Validação
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !phone || !message) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Validação de e-mail
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return;
    }

    // Envio do formulário via EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        name: name,
        email: email,
        phone: phone,
        message: message
    })
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Mensagem enviada com sucesso!');
    }, (error) => {
        console.log('FAILED...', error);
        alert('Falha ao enviar mensagem. Tente novamente mais tarde.');
    });
});
