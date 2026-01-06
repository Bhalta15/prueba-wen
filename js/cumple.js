let apagado = false;

window.addEventListener("devicemotion", function(event){
    if(apagado) return;

    const acc = event.accelerationIncludingGravity;
    const fuerza = Math.abs(acc.x) + Math.abs(acc.y) + Math.abs(acc.z);

    // Ajusta si quieres más o menos sensibilidad
    if(fuerza > 25){
        apagarVelas();
    }
});

function apagarVelas(){
    const velas = document.getElementById("velas");
    velas.classList.add("apagadas");

    document.getElementById("instruccion").innerText = "Deseo guardado 💖";
    document.getElementById("continuar").classList.remove("oculto");
}


function irAlUniverso(){
    window.location.href = "universo.html";
}
