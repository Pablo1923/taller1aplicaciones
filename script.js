const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

window.addEventListener('DOMContentLoaded', (event) => {

const sections = Array.from(document.getElementsByClassName('section'));

for (let section of sections) {
observer.observe(section);
}

});

document.addEventListener("DOMContentLoaded", function() {
    const home = document.getElementById('home');
    const profile = document.getElementById('profile');
    const contact = document.getElementById('contact');

    home.addEventListener("click", function(){
        home.classList.add('hotbar_active');
        profile.classList.remove('hotbar_active');
        contact.classList.remove('hotbar_active');
    });

    profile.addEventListener("click", function(){
        home.classList.remove('hotbar_active');
        profile.classList.add('hotbar_active');
        contact.classList.remove('hotbar_active');
    });

    contact.addEventListener("click", function(){
        home.classList.remove('hotbar_active');
        profile.classList.remove('hotbar_active');
        contact.classList.add('hotbar_active');
    });
});


