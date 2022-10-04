let cadastrarCampos = document.getElementById("cadastrar");
let ordenarCampos = document.getElementById("ordenarCampos");
let ordenar = document.getElementById("ordenar");



cadastrarCampos.addEventListener("click", function () {
    const elementos = [];
    let campos = document.getElementById("nome").value;
    elementos.push(campos.toString());
    let elementoOL = document.createElement("OL");
    elementos.forEach(element => {
        let elementLI = document.createElement("LI");
        let textNode = document.createTextNode(element);
        elementLI.appendChild(textNode);
        elementoOL.appendChild(textNode);
    });
    document.body.appendChild(elementoOL);

    
    let ordenarCampos = document.getElementById("ordenar");
    ordenarCampos.addEventListener("click", function () {
        let ordenados = elementos.sort();
        let elementoOL = document.createElement("OL");
        ordenados.forEach(element => {
            let elementLI = document.createElement("LI");
            let textNode = document.createTextNode(element);
            elementLI.appendChild(textNode);
            elementoOL.appendChild(textNode);
        });
        document.body.appendChild(elementoOL);
    });

});

