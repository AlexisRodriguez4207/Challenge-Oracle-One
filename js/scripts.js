function Focus(){
    let text = document.getElementById("Texto");
    text.focus();
}

Focus();

function Encriptar(){
    var text = document.getElementById("Texto").value.toLowerCase();
    //i es para que afecte tanto mayusculas como minusculas
    //g es para que toda la oración o frase
    //m es para que todo afecte a multiples lineas o parrafos
    var textEncriptado = text.replace(/e/igm, "enter" );
    textEncriptado = textEncriptado.replace(/i/igm, "imes" );
    textEncriptado = textEncriptado.replace(/a/igm, "ai" );
    textEncriptado = textEncriptado.replace(/o/igm, "ober" );
    textEncriptado = textEncriptado.replace(/u/igm, "ufat" );

    document.getElementById("Imagen").style.display = "none";
    document.getElementById("Encrip").innerHTML = textEncriptado;
    document.getElementById("Cop").style.display = "inherit";
    document.getElementById("NullMsg").style.display = "none";

    /* Limpiar area de texto*/
    const txt = document.getElementById("Texto");
    txt.value = "";
}

function DesEncrip(){
    var text = document.getElementById("Texto").value.toLowerCase();
    var textEncriptado = text.replace(/enter/igm, "e" );
    textEncriptado = textEncriptado.replace(/imes/igm, "i" );
    textEncriptado = textEncriptado.replace(/ai/igm, "a" );
    textEncriptado = textEncriptado.replace(/ober/igm, "o" );
    textEncriptado = textEncriptado.replace(/ufat/igm, "u" );

    document.getElementById("Imagen").style.display = "none";
    document.getElementById("Encrip").innerHTML = textEncriptado;
    document.getElementById("Cop").style.display = "inline-block";
    document.getElementById("NullMsg").style.display = "none";

    const txt = document.getElementById("Texto");
    txt.value = "";
}

function Copiar(){
    var copyText = document.querySelector("#Encrip")
    copyText.select();
    document.execCommand("copy");

    /* Sweet Alert*/ 
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tu texto ha sido copiado',
        showConfirmButton: true,
        timer: 2500
      })

}

