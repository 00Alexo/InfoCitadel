//Face parte din aia cu culoarea butoanelor
const changeColorButtons = document.querySelectorAll('.changeColorButton'); 
const personDataPhoto = document.querySelector('.personDataPhoto');
const motive = document.querySelector('.motive');
const programmingLanguagesIcons = document.querySelector('.programmingLanguagesIcons');
const photoPersonDataPhoto = document.querySelector('.photoPersonDataPhoto');
const occupationPersonDataText = document.querySelector('.occupationPersonDataText');
const namePersonDataText = document.querySelector('.namePersonDataText');

changeColorButtons[0].style.backgroundColor = '#313131'; // Default color

changeColorButtons[2].addEventListener('click', () =>{
    carousel.classList.remove('carouselFirstSignInView');
    carousel.classList.remove('carouselSecondSignInView');
    carousel.classList.remove('carouselThirdSignInView');
    mesaj.innerHTML = ' ';
    let stringAnimatedText = "Cu o varietate bogată de informații și o structură navigabilă, acest site devine destinația perfectă pentru descoperiri fascinante.";
    charAnimatedText = stringAnimatedText.split('');
    mesaji=0;
    thirdSignInView();
});

changeColorButtons[1].addEventListener('click', () =>{
    carousel.classList.remove('carouselFirstSignInView');
    carousel.classList.remove('carouselSecondSignInView');
    carousel.classList.remove('carouselThirdSignInView');
    mesaj.innerHTML = ' ';
    stringAnimatedText = "Cand am descoperit acest site, m-am indoit de capacitatile mele ca web developer si mi-am dat seama ca dezvoltatorul este un geniu!!";
    charAnimatedText = stringAnimatedText.split('');
    mesaji=0;
    secondSignInView();
});

changeColorButtons[0].addEventListener('click', () =>{
    carousel.classList.remove('carouselFirstSignInView');
    carousel.classList.remove('carouselSecondSignInView');
    carousel.classList.remove('carouselThirdSignInView');
    mesaj.innerHTML = ' ';
    let stringAnimatedText = "Site-ul acestui prieten este o sursă minunată. Plin de informații valoroase și ușor de navigat, te va captiva cu siguranță.";
    charAnimatedText = stringAnimatedText.split('');
    mesaji=0;
    firstSignInView();
});

const thirdSignInView = () =>{
    setTimeout(() =>{
    motive.classList.add('motiveSecondSignInView');
    personDataPhoto.classList.add('personDataPhotoSecondSignInView');
    programmingLanguagesIcons.classList.add('programmingLanguagesIconsSecondSignInView');
    photoPersonDataPhoto.src=('firstPage/Photos/EnderDatslt.png');
    occupationPersonDataText.innerHTML = 'Game Developer';
    namePersonDataText.innerHTML = 'EnderDatslt';
    moto.innerHTML = 'Limbajele pionierilor, <br>codul primelor descoperiri.';
    motoContinuare.innerHTML = 'În zilele limbajelor precum Fortran și în era mașinii ENIAC, <br> codul a fost o simfonie a cunoașterii, împletind matematica <br>și electricitatea pentru a da naștere primei revoluții digitale.';
    animatedText();
    }, 100);
    setTimeout(() => {
        carousel.classList.add('carouselThirdSignInView');
    }, 10);
}

const secondSignInView = () => {
    setTimeout(() =>{
    motive.classList.add('motiveSecondSignInView');
    personDataPhoto.classList.add('personDataPhotoSecondSignInView');
    programmingLanguagesIcons.classList.add('programmingLanguagesIconsSecondSignInView');
    photoPersonDataPhoto.src=('firstPage/Photos/veryadelin.png');
    occupationPersonDataText.innerHTML = 'Student';
    namePersonDataText.innerHTML = 'xndadelin';
    moto.innerHTML = 'Incepe aventura <br>nesfarsita cu noi!';
    motoContinuare.innerHTML = "Descoperă fascinanta lume a algoritmicii! Alătură-te <br>comunității și explorează cele mai frumoase limbaje <br>și provocări. Începe aventura ta digitală astăzi!";
    animatedText();
    }, 100);
    setTimeout(() => {
        carousel.classList.add('carouselSecondSignInView');
    }, 10);
}

const removesecondSignInView = () => {
    motive.classList.remove('motiveSecondSignInView');
    moto.classList.remove('motoSecondSignInView');
    motoContinuare.classList.remove('motoContinuareSecondSignInView');
    comentariu.classList.remove('comentariuSecondSignInView');
    personDataPhoto.classList.remove('personDataPhotoSecondSignInView');
    programmingLanguagesIcons.classList.remove('programmingLanguagesIconsSecondSignInView');
}

const firstSignInView = () => {
    setTimeout(() =>{
    removesecondSignInView();
    photoPersonDataPhoto.src=('firstPage/Photos/AlexoProfilePicture.png');
    occupationPersonDataText.innerHTML = 'Web Developer';
    namePersonDataText.innerHTML = 'SuperYang';
    moto.innerHTML = 'Codifică pasiunea, rezolvă provocările cu stil.';
    motoContinuare.innerHTML = 'Descopera cele mai frumoase limbaje si probleme <br>alaturi de ceilalti membri ai comunitatii, <br>nu ezita, esti binevenit oricand!<br>';
    animatedText();
    }, 100);
    setTimeout(() => {
    carousel.classList.add('carouselFirstSignInView');
    }, 10)
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

