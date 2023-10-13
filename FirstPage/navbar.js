const secondForHoverDropdown = document.querySelector('.secondForHoverDropdown');
const secondDropdownContent = document.querySelector('.secondDropdownContent');
const dropDownContentJS = document.getElementById('dropDownContentJS');
const MyNavbar = document.querySelector('.MyNavbar');
const phone_dropDownNavbarDiv = document.querySelector('.phone_dropDownNavbarDiv');

phone_dropDownNavbarDiv.addEventListener('click', () => {
    MyNavbar.classList.toggle('ascuns');
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
