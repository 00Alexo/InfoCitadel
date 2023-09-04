const body = document.querySelector('body');
const divPrincipal = document.querySelector('.divPrincipal');
const textSignInText = document.querySelector('.textSignInText');
const inputsDiv = document.querySelector('.inputsDiv');
const divForSubmit = document.querySelector('.divForSubmit');
const carousel = document.querySelector('.carousel');
const carouselButtons = document.querySelector('.carouselButtons');
const comments = document.querySelector('.comments');
const personDataText = document.querySelector('.personDataText');
const comentariu = document.querySelector('.comentariu');
const siteNameText = document.querySelector('.siteNameText');
const moto = document.querySelector('.motop');
const motoContinuare = document.querySelector('.motoContinuare');
const changeBootstrapButton = document.querySelector('.btn');
const changeThemeButton = document.querySelector('.changeThemeButton');

function toggleNight1337BlueTheme() {
    isNight1337BlueThemeActive = !isNight1337BlueThemeActive;
    body.classList.toggle('Night1337BlueBody');
    divPrincipal.classList.toggle('Night1337BlueDivPrincipal');
    textSignInText.classList.toggle('Night1337BluetextSignInText');
    inputsDiv.classList.toggle('Night1337BlueinputsDiv');
    divForSubmit.classList.toggle('Night1337BluedivForSubmit');
    carousel.classList.toggle('Night1337Bluecarousel');
    carouselButtons.classList.toggle('Night1337BluecarouselButtons');
    comments.classList.toggle('Night1337Bluecomments');
    personDataText.classList.toggle('Night1337BluepersonDataText');
    comentariu.classList.toggle('Night1337Bluecomentariu');
    siteNameText.classList.toggle('Night1337BluesiteNameText');
    moto.classList.toggle('Night1337Bluemoto');
    motoContinuare.classList.toggle('Night1337BluemotoContinuare');
    changeBootstrapButton.classList.toggle('btn-success');
    changeBootstrapButton.classList.toggle('btn-primary');
}

changeThemeButton.addEventListener('click', toggleNight1337BlueTheme);

