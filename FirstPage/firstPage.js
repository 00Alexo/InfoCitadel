//Face parte din aia cu culoarea butoanelor
const changeColorButtons = document.querySelectorAll('.changeColorButton'); 
//Astea s pentru animatia cu textul din comentarii
const stringAnimatedText = "A fost odata ca-n povesti, a fost ca niciodata, un site prea frumos de mi-a rupt inimioara toata! Multumesc si te iubesc..."
let charAnimatedText = stringAnimatedText.split('');
const mesaj = document.getElementById("mesaj");
let mesaji=0;

const animatedText= () => {
if (mesaji < charAnimatedText.length){
    mesaj.innerHTML += charAnimatedText[mesaji];
    mesaji++;
    console.log(charAnimatedText[mesaji]);
    setTimeout(animatedText, 10);
}};
setTimeout(() => {
    animatedText();
}, 1500);

changeColorButtons[0].style.backgroundColor = '#313131'; // Default color

changeColorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Schimba culoarea la butonul apasat
        button.style.backgroundColor = '#313131';

        // Culoarea la butoanele care nu au fost apasate ramane identica (obligatoriu, fara el butoanele vechi apasate nu se schimba la loc)
        changeColorButtons.forEach((otherButton) => {
            if (otherButton != button) {
                otherButton.style.backgroundColor = 'rgb(133, 179, 179)';
            }
        });
    });
});

