// const menubtn = document.getElementById('targetEl');
// const navul = document.getElementById('triggerEl');
// let openMenu = false;

// menubtn.addEventListener( "click", () => {
//     if (!openMenu) {
//         menubtn.classList.add('open');
//         navul.classList.add('flex');
//         openMenu = true;
//     } else {
//         menubtn.classList.remove('open');
//         navul.classList.remove('flex');
//         openMenu = false
//     }

// });

const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)