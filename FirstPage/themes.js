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
const MyNavbar = document.querySelector('.MyNavbar');
const changeBootstrapButton = document.querySelector('.btn');
const changeThemeButtonNight1337Blue = document.querySelector('.changeThemeButtonNight1337Blue');
let valueNight1337Blue = changeThemeButtonNight1337Blue.getAttribute('data-value');
const changeThemeButtonDefault = document.querySelector('.changeThemeButtonDefault');
let valueDefault = changeThemeButtonDefault.getAttribute('data-value');
const changeThemeButtonChatGPT = document.querySelector('.changeThemeButtonChatGPT');
let valuechatGPT = changeThemeButtonChatGPT.getAttribute('data-value');

let backgroundAnimation = document.querySelector('.background-animation');
let lines = document.querySelector('.lines'); 


let temaActiva;


 
const removeChatGPTTheme = () =>{
    body.classList.remove('chatGPTBody');
    divPrincipal.classList.remove('chatGPTDivPrincipal');
    textSignInText.classList.remove('chatGPTtextSignInText');
    inputsDiv.classList.remove('chatGPTinputsDiv');
    divForSubmit.classList.remove('chatGPTdivForSubmit');
    carousel.classList.remove('chatGPTcarousel');
    carouselButtons.classList.remove('chatGPTcarouselButtons');
    comments.classList.remove('chatGPTcomments');
    personDataText.classList.remove('chatGPTpersonDataText');
    comentariu.classList.remove('chatGPTcomentariu');
    siteNameText.classList.remove('chatGPTsiteNameText');
    moto.classList.remove('chatGPTmoto');
    motoContinuare.classList.remove('chatGPTmotoContinuare');
    changeBootstrapButton.classList.remove('btn-dark');
};
const removeNight1337BlueTheme = () => {
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
    MyNavbar.classList.remove('Night1337BlueMyNavbar');
    motoContinuare.classList.remove('Night1337BluemotoContinuare');
    changeBootstrapButton.classList.remove('btn-primary');
    backgroundAnimation.style.display="none";
};

function toggleNight1337BlueTheme() {
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
    MyNavbar.classList.add('Night1337BlueMyNavbar');
    motoContinuare.classList.add('Night1337BluemotoContinuare');
    changeBootstrapButton.classList.remove('btn-dark');
    changeBootstrapButton.classList.add('btn-primary');
    backgroundAnimation.style.display="block";
    lines.style.display="none";
    localStorage.setItem('theme', temaActiva);
        removeChatGPTTheme();
    changeColorButtons[0].style.backgroundColor = 'black';
    changeColorButtons[1].style.backgroundColor = 'white';
    changeColorButtons[2].style.backgroundColor = 'white';
}

function togglechatGPTTheme() {
    temaActiva = valuechatGPT;
    body.classList.add('chatGPTBody');
    divPrincipal.classList.add('chatGPTDivPrincipal');
    textSignInText.classList.add('chatGPTtextSignInText');
    inputsDiv.classList.add('chatGPTinputsDiv');
    divForSubmit.classList.add('chatGPTdivForSubmit');
    carousel.classList.add('chatGPTcarousel');
    carouselButtons.classList.add('chatGPTcarouselButtons');
    comments.classList.add('chatGPTcomments');
    personDataText.classList.add('chatGPTpersonDataText');
    comentariu.classList.add('chatGPTcomentariu');
    siteNameText.classList.add('chatGPTsiteNameText');
    moto.classList.add('chatGPTmoto');
    motoContinuare.classList.add('chatGPTmotoContinuare');
    changeBootstrapButton.classList.remove('btn-dark');
    changeBootstrapButton.classList.add('btn-dark');
    lines.style.display="none";
    localStorage.setItem('theme', temaActiva);
        removeNight1337BlueTheme();
    changeColorButtons[0].style.backgroundColor = 'black';
    changeColorButtons[1].style.backgroundColor = 'white';
    changeColorButtons[2].style.backgroundColor = 'white';
    }

function toggleDefaultTheme() {
    temaActiva = valueDefault;
        removeNight1337BlueTheme();
        removeChatGPTTheme();
    lines.style.display="block";
    changeBootstrapButton.classList.add('btn-dark'); 
    localStorage.setItem('theme', temaActiva);
    changeColorButtons[0].style.backgroundColor = '#313131';
    changeColorButtons[1].style.backgroundColor = 'white';
    changeColorButtons[2].style.backgroundColor = 'white';
}



changeThemeButtonNight1337Blue.addEventListener('click', toggleNight1337BlueTheme);
changeThemeButtonChatGPT.addEventListener('click', togglechatGPTTheme);
changeThemeButtonDefault.addEventListener('click', toggleDefaultTheme);



const verificareTemaOnPageLoad = () =>{
    temaActiva = localStorage.getItem('theme');
    if (temaActiva == valueNight1337Blue) {
        toggleNight1337BlueTheme();
    }else if(temaActiva == valuechatGPT) {
        togglechatGPTTheme();
    }else{
        toggleDefaultTheme();
    }
}
verificareTemaOnPageLoad(); 
