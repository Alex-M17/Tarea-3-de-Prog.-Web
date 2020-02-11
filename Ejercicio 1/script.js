let p = document.createElement('p');
let count = 0;

function Generar() {
    var tabla = document.getElementById('txtN1').value;
    
    if(tabla){
        if(count > 0){
            p.innerHTML = "";
        }
        for (var i = 0; i < 12; i++) {
            p.innerHTML += ("" + tabla + " X " + i + " = " + (i * tabla) + "<br>");
        }
        document.body.appendChild(p);
        count++;
    }
    else{
        alert("Digite un numero!");
    }
}

function Limpiar(){
    p.innerHTML = "";
}

