function obtenerArea() {
    let textResultado = document.getElementById("textarea1");
    let b = parseInt(document.getElementById("base").value);
    let h = parseInt(document.getElementById("altura").value);

    let area = b * h / 2;
    textResultado.value = area;
}