const SigninNavButton = document.querySelector('.SigninNavButton');
let isDivVisual = false;

SigninNavButton.addEventListener('click', (e) => {
    if (divPrincipal.style.display === 'flex') {
        divPrincipal.style.display = 'none';
      } else {
        divPrincipal.style.display = 'flex';
      }
  });
  window.onkeydown = function(e) {
      if (e.keyCode === 27) {
        console.log('ok')
          divPrincipal.style.display = 'none';
          isDivVisual = false
      }
  };
  document.addEventListener('click', (e) => {
    if (!divPrincipal.contains(e.target) && e.target !== SigninNavButton) {
      divPrincipal.style.display = 'none';
    }
  });
