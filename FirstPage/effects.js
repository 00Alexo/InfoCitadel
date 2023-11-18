//Astea s pentru animatia cu textul din comentarii
const stringAnimatedText = "Site-ul acestui prieten este o sursă minunată. Plin de informații valoroase și ușor de navigat, te va captiva cu siguranță.";
let charAnimatedText = stringAnimatedText.split('');
const mesaj = document.getElementById("mesaj");
let mesaji=0;

const animatedText= () => {
if (mesaji < charAnimatedText.length){
    mesaj.innerHTML += charAnimatedText[mesaji];
    mesaji++;
    setTimeout(animatedText, 15);
}};




