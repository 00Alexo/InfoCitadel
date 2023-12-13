// Leaderboard

var simplebar = new SimpleBar(document.getElementById('mostProblemsDivForContent'), {            
});
var simplebar2 = new SimpleBar(document.getElementById('mostProblemsDivForContent2'), {
    
});
const contentEl = simplebar2.contentEl;
contentEl.className = contentEl.className.replace('simplebar-content', 'simplebar-content-2');

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


/*function getVideoCardInfo() {
    const gl = document.createElement('canvas').getContext('webgl');
    if (!gl) {
      return {
        error: "no webgl",
      };
    }
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    return debugInfo ? {
      vendor: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
      renderer:  gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
    } : {
      error: "no WEBGL_debug_renderer_info",
    };
  }
  
  console.log(getVideoCardInfo());
*/
 

/*async function fetchDataAndDisplayLeaderboard() {
  try {
    const response = await fetch("/backend/templates/leaderboard.hbs");

    if (response.ok) {
      const leaderboardHtml = await response.text();
    
      // Update your leaderboard container with the fetched HTML
      const leaderboardContainer = document.getElementById("leaderboard-container");
      leaderboardContainer.innerHTML = leaderboardHtml;
    } else {
      console.error("Error fetching leaderboard:", response.statusText);
    }
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
  }
}

// Call the asynchronous function
fetchDataAndDisplayLeaderboard();*/
