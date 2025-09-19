<script>

// Mobile Menu Toggle

const menuToggle = document.querySelector('.menu-toggle');

const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {

    navLinks.classList.toggle('active');

});

// Smooth Scroll Effect

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href'))

            .scrollIntoView({ behavior: 'smooth' });

    });

});

// Simple Form Validation

const form = document.querySelector('form');

form.addEventListener('submit', function(e) {

    e.preventDefault();

    const name = document.getElementById('name').value.trim();

    const email = document.getElementById('email').value.trim();

    const message = document.getElementById('message').value.trim();

    if(!name || !email || !message){

        alert("Please fill all fields!");

        return;

    }

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){

        alert("Enter a valid email!");

        return;

    }

    alert("Message sent successfully ✅");

    form.reset();

});

</script>