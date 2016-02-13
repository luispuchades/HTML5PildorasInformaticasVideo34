/*global window*/
/*jslint browser: true, for:true */

/**JavaScript Document
 * Curso: HMTL5 - Píldoras Informáticas - API CANVAS IX
 * Origin: Video34.html ==> Transformaciones II
 */

// "use strict";


//1. Definición de Objetos y Variables
var elemento;

//1.1 Extracción de elementos desde HTML
elemento = document.getElementById('lienzo');

//2. Definición de Funciones
function comenzar() {
    'use strict';
    var lienzo,
        texto,
        alturaTexto,
        alturaTextoPx;

    texto = "Hola alumnos";
    alturaTexto = 20;
    alturaTextoPx = alturaTexto + "px";

    //INSERCION DE TEXTO
    //1. Indicamos que se trata de un canvas 2d
    lienzo = elemento.getContext('2d');
    //2. Definimos el tipo de fuente
    lienzo.font = "bold" + " " + alturaTextoPx + " " + "verdana";

    lienzo.fillText(texto, 50, 50);
    // El método setTransform NO ES ACUMULATIVO
    lienzo.font = "bold" + " " + alturaTextoPx + " " + "verdana";
    // Guardamos el estado del canvas
    lienzo.save();
    lienzo.fillText(texto, 50, 50);
    //trasladamos el eje a 60,70
    lienzo.translate(60,70);
    // rotamos
    lienzo.rotate(Math.PI/180*55);
    // escribimos de nuevo el texto
    lienzo.fillText(texto, 0, 0);
    // corregimos la rotación con el mismo valor anterior pero en negativo
//    lienzo.rotate(-Math.PI/180*55);
    // Restauramos el lienzo antes de los cambios para no tener que corregir el ángulo con el rotate en negativo de la línea anterior.
    lienzo.restore();
    // trasladamos el eje a 300,400
    lienzo.translate(300,400);
    // escalamos al doble para x y para y
    lienzo.scale(2,2);
    // volvemos a escribir el texto
    lienzo.fillText(texto, 0,0);
}


function cargarDocumento () {
    comenzar();
}

//3. Asignación de Eventos
document.addEventListener('DOMContentLoaded',cargarDocumento,false);
