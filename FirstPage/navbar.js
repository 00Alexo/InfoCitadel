const secondForHoverDropdown = document.querySelector('.secondForHoverDropdown');
const secondDropdownContent = document.querySelector('.secondDropdownContent');
const dropDownContentJS = document.getElementById('dropDownContentJS');
const phone_NavBar = document.querySelector('.phone_NavBar');
const phone_divSVG = document.querySelector('.phone_divSVG');
const svgTreiBari = document.querySelector('.svgTreiBari');

phone_divSVG.addEventListener('click', () => {
    phone_NavBar.classList.toggle('ascuns');
    phone_divSVG.classList.toggle('marireLungime');
    svgTreiBari.classList.toggle('marireHeightWidth');
});
phone_SigninNavButton.addEventListener('click', () => {
    phone_NavBar.classList.toggle('ascuns');
});


secondForHoverDropdown.addEventListener('click', () => {
    const computedStyle = window.getComputedStyle(secondDropdownContent);
    const visibility = computedStyle.getPropertyValue('visibility');

    if (visibility === 'hidden' || visibility === '') {
        secondDropdownContent.style.visibility = 'visible';
        secondDropdownContent.style.opacity = '1';
    } else {
        secondDropdownContent.style.visibility = 'hidden';

    }
});

setInterval(() => {
    const computedStyle = window.getComputedStyle(dropDownContentJS);
    const visibility = computedStyle.getPropertyValue('visibility');

    if (visibility === 'hidden' || visibility === '') {
        secondDropdownContent.style.visibility = 'hidden';
        secondDropdownContent.style.opacity = '0';
    }
}, 1);
