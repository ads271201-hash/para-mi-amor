const foto = document.getElementById("foto");

const fotos = [
  "foto1.jpg",
  "foto2.jpg",
  "foto3.jpg",
  "foto4.jpg",
  "foto5.jpg",
  "foto6.jpg",
  "foto7.jpg",
  "foto8.jpg",
  "foto9.jpg",
  "foto10.jpg",
  "foto11.jpg",
  "foto12.jpg",
  "foto13.jpg",
  "foto14.jpg"
];

let i = 0;

setInterval(() => {
    i++;
    if(i >= fotos.length){
        i = 0;
    }
    foto.src = fotos[i];
},3000);

function mensaje() {
    const musica = document.getElementById("musica");
    musica.play();

    alert("❤️ Gracias por existir. Sos el amor de mi vida. Te amo muchísimo. ❤️");
}

function crearCorazon(){

    const corazon = document.createElement("div");

    corazon.classList.add("corazon");

    corazon.innerHTML = "❤️";

    corazon.style.left = Math.random()*100+"vw";

    corazon.style.animationDuration = (Math.random()*5+5)+"s";

    document.body.appendChild(corazon);

    setTimeout(()=>{
        corazon.remove();
    },8000);

}

setInterval(crearCorazon,300);
