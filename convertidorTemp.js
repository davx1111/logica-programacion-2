// Práctica de conversión de temperaturas

// solicitar al usuario la temperatura en grados Celsius

//convertir la temperatura de grados celsius a farenheit y kelvin

//Imprimir x consola o x document

//Identificar si los datos de entrada son de tipo number, en caso contrario  debe mandar un mensaje de error y volver a solicitar los datos

let tempCelsius = Number(prompt("Dame la temperatura en grados Celsius"));

let opcion = Number(prompt("Elige la unidad de conversión a la que desees que convierta la temperatura: \n1. Farenheit \n2. Kelvin "));

function convertidor (opcion, tempCelsius) {
    let resultado;

switch(opcion) {
    case 1:
    resultado = tempCelsius * 9/5 + 32;
    console.log(`Resultado de la conversión: ${resultado.toFixed(2)} Grados Farenheit`);
    break;
    case 2:
    resultado = tempCelsius + 273.15;
    console.log(`Resultado de la conversión: ${resultado.toFixed(2)} Grados Kelvin`);
    break;
    default:
    console.log("Opción no válida. Por favor, vuelve a intentarlo.");
    
    
}//cierra switch
}//cierra function

convertidor(opcion, tempCelsius);

