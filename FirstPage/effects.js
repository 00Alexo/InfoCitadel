//Astea s pentru animatia cu textul din comentarii
const stringAnimatedText = "A fost odata ca-n povesti, a fost ca niciodata, un site prea frumos de mi-a rupt inimioara toata! Multumesc si te iubesc..."
let charAnimatedText = stringAnimatedText.split('');
const mesaj = document.getElementById("mesaj");
let mesaji=0;

const animatedText= () => {
if (mesaji < charAnimatedText.length){
    mesaj.innerHTML += charAnimatedText[mesaji];
    mesaji++;
    console.log(charAnimatedText[mesaji]);
    setTimeout(animatedText, 10);
}};
setTimeout(() => {
    animatedText();
}, 1500);



