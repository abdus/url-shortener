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

//      Input field validation

// Check if the page is home page 
if (window.location.pathname === '/') {
    let urlInput = document.querySelector('#longURL');
    let urlForm = document.querySelector('#shortUrlForm');
    let errorMessage = document.querySelector('.errorMessage');
    let responseFromServer = document.querySelector('#responseFromServer');
    let copyButton = document.querySelector('#copy-button');
    let hiddenInput4data = document.querySelector('#hiddenInputForData');
    
    if (responseFromServer.innerHTML === '') {
        responseFromServer.style.display = 'none';
        copyButton.style.display = 'none';
    } else {
        responseFromServer.style.display = 'inline';
        copyButton.style.display = 'inline';
    }

    function isValid() {
        let isHTTP = urlInput.value.split('/')[0];
        if (isHTTP === 'https:' || isHTTP === 'http:') {
            isHTTP = true;
        }
        let isDomainValid = urlInput.value.split('.');
        if (isDomainValid.length >= 2) {
            isDomainValid = true;
        }
        if (isHTTP === true && isDomainValid === true) return true;
        errorMessage.innerHTML = 'Error: URL must be start with http:// or https://';
        setTimeout(() => {
            errorMessage.innerHTML = '';
        }, 3000);
        return false;
    }
    // function for selecting div
    function copyDivToClipboard() {
        hiddenInput4data.select();
        document.execCommand('copy');
        alert('Copied to clipboard');
    }
}