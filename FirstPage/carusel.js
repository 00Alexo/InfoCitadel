//Face parte din aia cu culoarea butoanelor
const changeColorButtons = document.querySelectorAll('.changeColorButton'); 
const personDataPhoto = document.querySelector('.personDataPhoto');
const motive = document.querySelector('.motive');
const programmingLanguagesIcons = document.querySelector('.programmingLanguagesIcons');
const photoPersonDataPhoto = document.querySelector('.photoPersonDataPhoto');
const occupationPersonDataText = document.querySelector('.occupationPersonDataText');
const namePersonDataText = document.querySelector('.namePersonDataText');

changeColorButtons[0].style.backgroundColor = '#313131'; // Default color

changeColorButtons[1].addEventListener('click', () =>{
    mesaj.innerHTML = ' ';
    stringAnimatedText = "Cand am descoperit acest site, m-am indoit de capacitatile mele ca web developer si mi-am dat seama ca dezvoltatorul este un geniu!!";
    charAnimatedText = stringAnimatedText.split('');
    mesaji=0;
    secondSignInView();
});

changeColorButtons[0].addEventListener('click', () =>{
    mesaj.innerHTML = ' ';
    let stringAnimatedText = "Site-ul acestui prieten este o sursă minunată. Plin de informații valoroase și ușor de navigat, te va captiva cu siguranță.";
    charAnimatedText = stringAnimatedText.split('');
    mesaji=0;
    firstSignInView();
});

const secondSignInView = () => {
    motive.classList.add('motiveSecondSignInView');
    moto.classList.add('motoSecondSignInView');
    motoContinuare.classList.add('motoContinuareSecondSignInView');
    comentariu.classList.add('comentariuSecondSignInView');
    personDataPhoto.classList.add('personDataPhotoSecondSignInView');
    carousel.classList.add('carouselSecondSignInView');
    programmingLanguagesIcons.classList.add('programmingLanguagesIconsSecondSignInView');
    photoPersonDataPhoto.src=('firstPage/Photos/veryadelin.png');
    occupationPersonDataText.innerHTML = 'Student';
    namePersonDataText.innerHTML = 'xndadelin';
    animatedText();
}

const firstSignInView = () => {
    motive.classList.remove('motiveSecondSignInView');
    moto.classList.remove('motoSecondSignInView');
    motoContinuare.classList.remove('motoContinuareSecondSignInView');
    comentariu.classList.remove('comentariuSecondSignInView');
    personDataPhoto.classList.remove('personDataPhotoSecondSignInView');
    carousel.classList.remove('carouselSecondSignInView');
    programmingLanguagesIcons.classList.remove('programmingLanguagesIconsSecondSignInView');
    photoPersonDataPhoto.src=('firstPage/Photos/AlexoProfilePicture.png');
    occupationPersonDataText.innerHTML = 'Web Developer';
    namePersonDataText.innerHTML = 'SuperYang';
    animatedText();
}


changeColorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Schimba culoarea la butonul apasat
        if (temaActiva == valueNight1337Blue){
            button.style.backgroundColor = 'black';
        }else if (temaActiva == valuechatGPT){
            button.style.backgroundColor = 'black';
        }
        else{
            button.style.backgroundColor = '#313131';
        }

        // Culoarea la butoanele care nu au fost apasate ramane identica (obligatoriu, fara el butoanele vechi apasate nu se schimba la loc)
        changeColorButtons.forEach((otherButton) => {
            if (otherButton != button) {
                if (temaActiva == valueNight1337Blue){
                    otherButton.style.backgroundColor = 'white';
                }else if(temaActiva == valuechatGPT){
                    otherButton.style.backgroundColor = 'white';
                }
                else{
                    otherButton.style.backgroundColor = 'rgb(133, 179, 179)';
                }
            }
        });
    });
    
});

