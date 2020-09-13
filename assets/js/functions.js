// Se crean diferentes funciones para llevar a cabo un programa interactivo de preguntas

var btn = document.getElementById('opciones');
var opc = 0;
btn.onclick = function () {
    var opc = 0;
    var alt;
    val = true;
    // Se crea un menu con 6 alternativas, el cual al elegir una u otra activa diferentes preguntas interactivas
    while (val === true) {

        alt = prompt("Ingrese un número entre 1 y 6");

        if (parseInt(alt) != null && parseInt(alt) >= 1 && parseInt(alt) <= 6) {
            opc = parseInt(alt);
            val = false;
        }
        else {
            alert("Por favor, ingrese un número entre 1 y 6");
        }
    }
    // Se ocupa switch para activar por separado los diferentes menú que pueda ingresar el usuario con el número elegido
    switch (opc) {

        case 1:

            var num = prompt("Ingrese un número de 0 a 100");
            for (var i = 0; i <= parseInt(num); i++) {
                console.log(i);
            }

            break;

        case 2:

            res = false;
            while (res === false) {
                var napo = prompt("¿De qué color es el caballo blanco de Napoleón?");
                if (napo === "blanco") {
                    res = true;
                }
                else {
                    res = false;
                }
            }
            break;

        case 3:

            var promedio = 0;
            var mat = prompt("Ingrese su promedio de notas en Matemáticas");
            var fis = prompt("Ingrese su promedio de notas en Física");
            var cie = prompt("Ingrese su promedio de notas en Ciencias");

            promedio = Math.round((parseInt(mat) + parseInt(fis) + parseInt(cie)) / 3);

            alert("Su promedio de notas es: " + promedio);
            break;

        case 4:

            alert("Ingrese el nombre de tres frutas");
            var frut1 = prompt("Ingrese la primera fruta");
            var frut2 = prompt("Ingrese la segunda fruta");
            var frut3 = prompt("Ingrese la tercera fruta");

            if (frut1 != "manzana" && frut1 != "Manzana") {
                alert("La primera fruta escogida es: " + frut1);
            }

            if (frut2 != "manzana" && frut2 != "Manzana") {
                alert("La segunda fruta escogida es: " + frut2);
            }

            if (frut3 != "manzana" && frut3 != "Manzana") {
                alert("La tercera fruta escogida es: " + frut3);
            }
            break;

        case 5:

            var nombre = prompt("Ingrese su nombre");

            function contando_vocales(vocal) {
                let vocales = 0;

                let lista_vocales = 'aeiouAEIOU'.split('');

                vocal.split('').forEach(function (e) {

                    if (lista_vocales.indexOf(e) !== -1) {
                        vocales++;
                    }
                });

                alert("Su nombre tiene " + vocales + " vocales");
            }

            function contando_consonantes(consonante) {
                let consonantes = 0;

                let lista_consonantes = 'bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ'.split('');

                consonante.split('').forEach(function (e) {

                    if (lista_consonantes.indexOf(e) !== -1) {
                        consonantes++;
                    }
                });

                alert("Su nombre tiene " + consonantes + " consonantes");
            }

            contando_vocales(nombre);
            contando_consonantes(nombre);
            break;

        case 6:

            alert("No tengo tarea asignada");
            break;

    }


















































}

