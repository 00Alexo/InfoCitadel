const SigninNavButton = document.querySelector('.SigninNavButton');
let isDivVisual = false;

SigninNavButton.addEventListener('click', (e) => {
    divPrincipal.style.display == 'flex' ? divPrincipal.style.display = 'none': divPrincipal.style.display = 'flex'
  });
  window.onkeydown = function(e) {
      if (e.keyCode === 27) {
        console.log('ok')
          divPrincipal.style.display = 'none';
          isDivVisual = false
      }
  };
  const html = document.querySelector('html');
  document.addEventListener('click', (e) => {
    if (!divPrincipal.contains(e.target) && e.target !== SigninNavButton) {
      divPrincipal.style.display = 'none';
    }
  });
