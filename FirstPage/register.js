const loginPopUp = document.querySelector('.loginPopUp');
const registerPopUp = document.querySelector('.registerPopUp');
const signUpItems = document.querySelector('.signUpItems');
const registerDiv = document.querySelector('.registerDiv');

loginPopUp.addEventListener('click', () =>{
    signUpItems.style.display = 'block';
    registerDiv.style.display = 'none';
});

registerPopUp.addEventListener('click', () =>{
    registerDiv.style.display = 'block';
    signUpItems.style.display = 'none';
});