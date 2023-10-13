const SigninNavButton = document.querySelector('.SigninNavButton');
const phone_SigninNavButton = document.querySelector('.phone_SigninNavButton');

SigninNavButton.addEventListener('click', (e) => {
    if (divPrincipal.style.display === 'flex') {
        divPrincipal.style.display = 'none';
      } else {
        divPrincipal.style.display = 'flex';
      }
  });



  window.onkeydown = function(e) {
      if (e.keyCode === 27) {
          divPrincipal.style.display = 'none';
      }
  };

  document.addEventListener('click', (e) => {
    if (!divPrincipal.contains(e.target) && e.target !== SigninNavButton && e.target !== phone_SigninNavButton) {
      divPrincipal.style.display = 'none';
    }
  });


  phone_SigninNavButton.addEventListener('click', (e) => {
    if (divPrincipal.style.display === 'flex') {
        divPrincipal.style.display = 'none';
      } else {
        divPrincipal.style.display = 'flex';
      }
  });




