// Setting up menu exit and open 
let plusXbutton = document.querySelector('#plus_x_button');
let viewOnClickNav = document.querySelector('#viewonclicknav');

let showHidden = 'hidden';
plusXbutton.addEventListener('click', () => {
    if (showHidden == 'hidden') {
        viewOnClickNav.style.bottom = '0px';
        plusXbutton.style.transform= 'rotate(45deg)';
        showHidden = 'show';
    } else {
        viewOnClickNav.style.bottom = '-1000px';
        plusXbutton.style.transform= 'rotate(-90deg)';
        showHidden = 'hidden';
    }
});
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let serverRespBox = document.querySelector('#responseFromServer');
// if (serverRespBox.innerHTML == '') {
//     serverRespBox.style.display = 'none';
// } else {
//     serverRespBox.style.display = 'block';
//     console.log(' ' + serverRespBox.innerHTML + 'Working');
// }