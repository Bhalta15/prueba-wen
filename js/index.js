const input = document.getElementById("clave");

input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        entrar();
    }
});

function entrar(){
    const card = document.getElementById("card");
    const error = document.getElementById("error");
    const clave = input.value.trim().toLowerCase();

    if(clave === "Tribilin"){
        window.location.href = "universo.html";
    }else{
        error.innerText = "Parece que esa no es la clave. Intenta de nuevo 💕";
        card.classList.add("shake");

        setTimeout(() => {
            card.classList.remove("shake");
        }, 400);
    }
}
