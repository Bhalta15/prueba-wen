const elementos = document.querySelectorAll('.estrella, .planeta');
const mensaje = document.getElementById('mensaje');

elementos.forEach(el => {
    el.addEventListener('click', () => {
        mensaje.innerHTML = el.dataset.texto;
        mensaje.classList.remove('oculto');

        setTimeout(() => {
            mensaje.classList.add('oculto');
        }, 4000);
    });
});

const mensajes = [
    "Gracias por existir ✨",
    "Eres mi paz 🤍",
    "Mi lugar seguro 💖",
    "Te amo sin medida 🌷",
    "Siempre contigo 🌙",
    "Nuestra historia 💫",
    "Tu sonrisa me salva ☀️",
    "Aquí estoy para ti 🫶",
    "Eres hogar 🏡",
    "Mi universo eres tú ✨"
];

const contenedor = document.getElementById("estrellas-random");
const mensajeBox = document.getElementById("mensaje");

for(let i = 0; i < 25; i++){
    const estrella = document.createElement("div");
    estrella.classList.add("estrella-random");

    const size = ["pequena","mediana","grande"];
    estrella.classList.add(size[Math.floor(Math.random()*size.length)]);

    estrella.style.top = Math.random() * 100 + "%";
    estrella.style.left = Math.random() * 100 + "%";
    estrella.style.animationDuration = (2 + Math.random() * 3) + "s";

    const texto = mensajes[Math.floor(Math.random()*mensajes.length)];

    estrella.addEventListener("click", ()=>{
        mensajeBox.innerHTML = texto;
        mensajeBox.classList.remove("oculto");

        setTimeout(()=>{
            mensajeBox.classList.add("oculto");
        }, 2500);
    });

    contenedor.appendChild(estrella);
}
