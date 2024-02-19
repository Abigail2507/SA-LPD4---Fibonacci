/* Crear un programa en Javascript que realice lo siguiente:
3
0, 1, 1.
10
0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
Debe solicitar al usuario un número por prompt o por input y guardarlo.
Debe imprimir la serie de fibonacci dependiendo del número recibido, es decir, si el programa recibe un 8, debe mostrar 8 números de la serie de Fibonacci.
Debe imprimir el resultado por consola o por el DOM.
Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.
Prueba tu programa con las siguientes combinaciones para asegurarte que funcione correctamente:
Entrada: 
Salida: 
Entrada: 
Salida:  */

function solicitarNumero() {
    let numero = prompt("Ingresa un número para calcular la serie de Fibonacci:");

    while (isNaN(numero)) {
        console.error("Error: Ingresa un número válido.");
        numero = prompt("Ingresa un número para calcular la serie de Fibonacci:");
    }

    return parseInt(numero);
}

function fibonacciSerie(num) {
    const fib = [0, 1];
    for (let i = 2; i < num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, num); 
}

let numero = solicitarNumero();

if (!isNaN(numero) && numero > 0) {
    let serieFibonacci = fibonacciSerie(numero);

    let salida = "Salida: ";
    salida += serieFibonacci.join(", ") + ".";
    console.log("Entrada: " + numero);
    console.log(salida);
} else {
    console.error("Error: Ingresa un número válido y mayor que cero!");
}
