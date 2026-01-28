let sacudidas = 0;
let ultimaSacudida = 0;
let velasApagadas = false;

const velas = document.getElementById("velas");
const instruccion = document.getElementById("instruccion");
const btnContinuar = document.getElementById("continuar");
const btnSoplar = document.getElementById("btnSoplar");

// Función para apagar velas
function apagarVelas() {
    if (velasApagadas) return;
    velasApagadas = true;

    velas.classList.add("apagadas");
    instruccion.innerText = "Deseo guardado 💖";

    setTimeout(() => {
        btnContinuar.classList.remove("oculto");
    }, 1500);
}

// Fallback PC (botón soplar)
const esMovil = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
if (!esMovil) {
    btnSoplar.classList.remove("oculto");
    btnSoplar.addEventListener("click", apagarVelas);
}

// Detectar sacudidas en Android
window.addEventListener("devicemotion", function(event) {
    if (velasApagadas) return;

    const acc = event.accelerationIncludingGravity;
    const ahora = Date.now();

    if (!acc) return;

    const fuerza = Math.sqrt(acc.x**2 + acc.y**2 + acc.z**2);

    if (fuerza > 15) { // umbral ajustable
        if (ahora - ultimaSacudida > 1000) {
            sacudidas = 0;
        }

        sacudidas++;
        ultimaSacudida = ahora;

        if (sacudidas >= 3) {
            apagarVelas();
        }
    }
});

// Función para ir al universo
function irAlUniverso() {
    window.location.href = "universo.html";
}
