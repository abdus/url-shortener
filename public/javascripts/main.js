let plusXbutton = document.querySelector('#plus_x_button');
let viewOnClickNav = document.querySelector('#viewonclicknav');

plusXbutton.addEventListener('click', () => {
    if (viewOnClickNav.style.display == 'block') {
        viewOnClickNav.style.display = 'none';
        plusXbutton.style.transform= 'rotate(-90deg)';
    } else {
        viewOnClickNav.style.display = 'block';
        plusXbutton.style.transform= 'rotate(45deg)';
    }
});