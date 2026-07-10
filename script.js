const foto = document.getElementById("foto");

const fotos = [
"fotos/foto1.jpg",
"fotos/foto2.jpg",
"fotos/foto3.jpg",
"fotos/foto4.jpg",
"fotos/foto5.jpg",
"fotos/foto6.jpg",
"fotos/foto7.jpg",
"fotos/foto8.jpg",
"fotos/foto9.jpg",
"fotos/foto10.jpg",
"fotos/foto11.jpg",
"fotos/foto12.jpg",
"fotos/foto13.jpg",
"fotos/foto14.jpg"
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