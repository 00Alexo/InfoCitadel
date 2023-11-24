// Leaderboard

const jsShowOverflow = document.querySelector('.jsShowOverflow');
const jsShowOverflow2 = document.querySelector('.jsShowOverflow2');
const showMore = document.querySelector('.showMore');
const showMore2 = document.querySelector('.showMore2');



showMore.addEventListener('click', () => {
    jsShowOverflow.classList.toggle('overflowhidden');
});

showMore2.addEventListener('click', () => {
    jsShowOverflow2.classList.toggle('overflowhidden');
});


