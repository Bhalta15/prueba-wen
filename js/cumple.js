let sacudidas = 0;
let ultimaSacudida = 0;
let velasApagadas = false;

window.addEventListener("devicemotion", function(event) {
    if (velasApagadas) return;

    const acc = event.accelerationIncludingGravity;
    const ahora = Date.now();

    const fuerza = Math.sqrt(
        acc.x * acc.x +
        acc.y * acc.y +
        acc.z * acc.z
    );

    // 🔥 UMBRAL AJUSTADO (clave del cambio)
    if (fuerza > 25) {

        // Si pasa mucho tiempo, reinicia
        if (ahora - ultimaSacudida > 1000) {
            sacudidas = 0;
        }

        sacudidas++;
        ultimaSacudida = ahora;

        // Requiere varias sacudidas
        if (sacudidas >= 3) {
            velasApagadas = true;
            apagarVelas();
        }
    }
});

function apagarVelas(){
    if (velasApagadas) return;
    velasApagadas = true;

    const velas = document.getElementById("velas");

    velas.classList.add("apagadas");

    document.getElementById("instruccion").innerText =
        "Deseo guardado 💖";

    setTimeout(() => {
        document.getElementById("continuar").classList.remove("oculto");
    }, 1500);
}




function irAlUniverso(){
    window.location.href = "universo.html";
}














// Detectar si NO es móvil
const esMovil = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

if (!esMovil) {
    document.getElementById("btnSoplar").classList.remove("oculto");

    document.getElementById("btnSoplar").addEventListener("click", () => {
        apagarVelas();
    });
}
