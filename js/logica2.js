function encriptarTexto() {
    const texto = document.getElementById("texto").value.toLowerCase();
    let encriptado = "";
    for (let i = 0; i < texto.length; i++) {
        let letra = texto.charAt(i);

        if (letra === "a") {
            encriptado += "ai";
        } else if (letra === "e") {
            encriptado += "enter";
        } else if (letra === "i") {
            encriptado += "imes";
        } else if (letra === "o") {
            encriptado += "ober";
        } else if (letra === "u") {
            encriptado += "ufat";
        } else if (letra === " ") {
            encriptado += letra;
        } else if (letra.match(/^[a-z]+$/)) { 
            encriptado += letra;
        } else {
            alert("Solo inserte letras minusculas");
            return;
        }
    }
    document.getElementById("text-resultado").value = encriptado;
    
    if (document.getElementById("text-resultado").value.length > 0) {
        const img = document.getElementById("img-resultado");
        img.classList.add("displayoff");

        const h3 = document.getElementById("resultado_h3");
        h3.classList.add("displayoff");

        const h4 = document.getElementById("resultado_h4");
        h4.classList.add("displayoff");

        const textarea = document.getElementById("text-resultado");
        textarea.classList.add("text-active");

        const btn_copiar = document.getElementById("btn-copiar")
        btn_copiar.classList.remove('disable')
        btn_copiar.classList.add("active")
        
    };
}

function desencriptarTexto() {
    const encriptado = document.getElementById("texto").value.toLowerCase();
    let texto = "";

    for (let i = 0; i < encriptado.length; i++) {
        let grupo = "";

        if (encriptado.charAt(i) === "a" && encriptado.charAt(i + 1) === "i") {
            grupo = "a";
            i++;
        } else if (encriptado.charAt(i) === "e" && encriptado.substring(i, i + 5) === "enter") {
            grupo = "e";
            i += 4;
        } else if (encriptado.charAt(i) === "i" && encriptado.substring(i, i + 4) === "imes") {
            grupo = "i";
            i += 3;
        } else if (encriptado.charAt(i) === "o" && encriptado.substring(i, i + 4) === "ober") {
            grupo = "o";
            i += 3;
        } else if (encriptado.charAt(i) === "u" && encriptado.substring(i, i + 4) === "ufat") {
            grupo = "u";
            i += 3;
        } else if (encriptado.charAt(i) === " ") { 
            grupo = " ";
        } else if (encriptado.charAt(i).match(/^[a-z]+$/)) { 
            grupo = encriptado.charAt(i);
        } else {
            alert("No se admite este texto");
            return;
        }

        texto += grupo;
    }

    document.getElementById("text-resultado").value = texto;
}

function copiar() {
    const valorcopiado = document.getElementById("text-resultado");
    valorcopiado.select();
    document.execCommand("copy");
}





