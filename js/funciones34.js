/*global window*/
/*jslint browser: true, for:true */

/**JavaScript Document
 * Curso: HMTL5 - Pildoras Informáticas - API CANVAS IX
 * Origin: Video33.html ==> Transformaciones II
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
    //3. Definimos los valores para Transform
    //lienzo.transform(3,1,2,3,150,200);
    lienzo.transform(3,0,0,1,0,0);
    //El 1 y 4 parámetros son las escalas en (x,y) respectivamente.
    // Los parámetros 5 y 6 son el nuevo eje de coordenadas sobre el que se aplica el fillText.
    //El segundo parámetro es el ángulo de inclinación
    //El tercer parámetro es sesgado
    lienzo.fillText(texto, 50, 50);
    // El método setTransform NO ES ACUMULATIVO
    lienzo.font = "bold" + " " + alturaTextoPx + " " + "verdana";
    lienzo.setTransform(1,0,0,10,0,0);
    lienzo.fillText(texto, 50, 50);
    // El método transform ES ACUMULATIVO
    lienzo.transform(3,0,0,1,100,0);
    lienzo.fillText(texto, 50, 50);
    
}


function cargarDocumento () {
    comenzar();
}

//3. Asignación de Eventos
document.addEventListener('DOMContentLoaded',cargarDocumento,false);
