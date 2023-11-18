//Face parte din aia cu culoarea butoanelor
const changeColorButtons = document.querySelectorAll('.changeColorButton'); 
const personDataPhoto = document.querySelector('.personDataPhoto');
const motive = document.querySelector('.motive');
const programmingLanguagesIcons = document.querySelector('.programmingLanguagesIcons');

changeColorButtons[0].style.backgroundColor = '#313131'; // Default color

changeColorButtons[1].addEventListener('click', () =>{
    secondSignInView();
});

const secondSignInView = () => {
    motive.classList.add('motiveSecondSignInView');
    moto.classList.add('motoSecondSignInView');
    motoContinuare.classList.add('motoContinuareSecondSignInView');
    comentariu.classList.add('comentariuSecondSignInView');
    personDataText.classList.add('personDataTextSecondSignInView');
    personDataPhoto.classList.add('personDataPhotoSecondSignInView');
    carousel.classList.add('carouselSecondSignInView');
    programmingLanguagesIcons.classList.add('programmingLanguagesIconsSecondSignInView');
    
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

