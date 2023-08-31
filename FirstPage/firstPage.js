const changeColorButtons = document.querySelectorAll('.changeColorButton');


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

