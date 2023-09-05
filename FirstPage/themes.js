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
const changeThemeButtonNight1337Blue = document.querySelector('.changeThemeButtonNight1337Blue');
const valueNight1337Blue = changeThemeButtonNight1337Blue.getAttribute('data-value');
const changeThemeButtonDefault = document.querySelector('.changeThemeButtonDefault');
const valueDefault = changeThemeButtonDefault.getAttribute('data-value');
let temaActiva;

const verificareTemaOnPageLoad = () =>{
    temaActiva = localStorage.getItem('theme');
    if (temaActiva == valueNight1337Blue) {
        toggleNight1337BlueTheme();
    }else{
        toggleDefaultTheme();
    }
}
verificareTemaOnPageLoad();

function toggleNight1337BlueTheme() {
    isNight1337BlueThemeActive = !isNight1337BlueThemeActive;
    temaActiva = valueNight1337Blue;
    body.classList.add('Night1337BlueBody');
    divPrincipal.classList.add('Night1337BlueDivPrincipal');
    textSignInText.classList.add('Night1337BluetextSignInText');
    inputsDiv.classList.add('Night1337BlueinputsDiv');
    divForSubmit.classList.add('Night1337BluedivForSubmit');
    carousel.classList.add('Night1337Bluecarousel');
    carouselButtons.classList.add('Night1337BluecarouselButtons');
    comments.classList.add('Night1337Bluecomments');
    personDataText.classList.add('Night1337BluepersonDataText');
    comentariu.classList.add('Night1337Bluecomentariu');
    siteNameText.classList.add('Night1337BluesiteNameText');
    moto.classList.add('Night1337Bluemoto');
    motoContinuare.classList.add('Night1337BluemotoContinuare');
    changeBootstrapButton.classList.remove('btn-success');
    changeBootstrapButton.classList.add('btn-primary');
    localStorage.setItem('theme', temaActiva);
}

function toggleDefaultTheme() {
    isNight1337BlueThemeActive = false;
    temaActiva = valueDefault;
    body.classList.remove('Night1337BlueBody');
    divPrincipal.classList.remove('Night1337BlueDivPrincipal');
    textSignInText.classList.remove('Night1337BluetextSignInText');
    inputsDiv.classList.remove('Night1337BlueinputsDiv');
    divForSubmit.classList.remove('Night1337BluedivForSubmit');
    carousel.classList.remove('Night1337Bluecarousel');
    carouselButtons.classList.remove('Night1337BluecarouselButtons');
    comments.classList.remove('Night1337Bluecomments');
    personDataText.classList.remove('Night1337BluepersonDataText');
    comentariu.classList.remove('Night1337Bluecomentariu');
    siteNameText.classList.remove('Night1337BluesiteNameText');
    moto.classList.remove('Night1337Bluemoto');
    motoContinuare.classList.remove('Night1337BluemotoContinuare');
    changeBootstrapButton.classList.remove('btn-primary');
    changeBootstrapButton.classList.add('btn-success'); 
    localStorage.setItem('theme', temaActiva);
}


changeThemeButtonNight1337Blue.addEventListener('click', toggleNight1337BlueTheme);
changeThemeButtonDefault.addEventListener('click', toggleDefaultTheme);

