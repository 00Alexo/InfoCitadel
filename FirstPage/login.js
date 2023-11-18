const SigninNavButton = document.querySelector('.SigninNavButton');
const phone_SigninNavButton = document.querySelector('.phone_SigninNavButton');

SigninNavButton.addEventListener('click', (e) => {
    if (divPrincipal.style.display === 'flex') {
        divPrincipal.style.display = 'none';
        mesaj.innerHTML = ' ';
        mesaji = 0;
      } else {
        divPrincipal.style.display = 'flex';
        setTimeout(1500, animatedText());
      }
  });



  window.onkeydown = function(e) {
      if (e.keyCode === 27) {
          divPrincipal.style.display = 'none';
          mesaj.innerHTML = ' ';
          mesaji = 0;
      }
  };

  document.addEventListener('click', (e) => {
    if (!divPrincipal.contains(e.target) && e.target !== SigninNavButton && e.target !== phone_SigninNavButton) {
      divPrincipal.style.display = 'none';
      mesaj.innerHTML = ' ';
      mesaji = 0;
    }
  });


  phone_SigninNavButton.addEventListener('click', (e) => {
    if (divPrincipal.style.display === 'flex') {
        divPrincipal.style.display = 'none';
      } else {
        divPrincipal.style.display = 'flex';
      }
  });


  if(window.innerWidth < 1024){
    changeBootstrapButton.classList.remove('btn-success');
    changeBootstrapButton.classList.add('btn-dark');
    console.log("Screen width is greater than 1000px");
  }




