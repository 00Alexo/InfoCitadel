// Leaderboard

const showMore = document.querySelector('.showMore');
let showMoreToggle = false;
const showMore2 = document.querySelector('.showMore2');
let showMore2Toggle = false;
const jsSimpleBarSelect = document.querySelectorAll('.jsSimpleBarSelect');
const jsSimpleBarSelect2 = document.querySelectorAll('.jsSimpleBarSelect2');
const simplebarContent = document.querySelector('.simplebar-content');
const simplebarContent2 = document.querySelector('.simplebar-content-2');


showMore.addEventListener('click', () => {
    jsSimpleBarSelect2.forEach(ElmDiv => {
        ElmDiv.classList.toggle('visually-hidden');
    });
    simplebarContent2.classList.toggle('simplebarReHeight');
    console.log("simplebarContent2 height after toggle:", simplebarContent2.clientHeight);
    if (showMoreToggle){
        showMore.innerHTML="show more";
        showMoreToggle = false;
    }else{
        showMore.innerHTML="show less";
        showMoreToggle = true;
    }
});

showMore2.addEventListener('click', () => {
    jsSimpleBarSelect.forEach(ElmDiv => {
        ElmDiv.classList.toggle('visually-hidden');
    });
    simplebarContent.classList.toggle('simplebarReHeight');
    console.log("simplebarContent height after toggle:", simplebarContent.clientHeight);
    if (showMore2Toggle){
        showMore2.innerHTML="show more";
        showMore2Toggle = false;
    }else{
        showMore2.innerHTML="show less";
        showMore2Toggle = true;
    }
}); 




 