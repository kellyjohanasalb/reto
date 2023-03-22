//Para calcular el factorial de un número en JavaScript, Por ejemplo, para calcular el factorial de 5, se multiplicarían los números 1, 2, 3, 4 y 5:
 1 * 2 * 3 * 4 * 5 = 120

//entonces se puede crear una función llamada factorial que tome un número como argumento y devuelva su factorial. El código de esta función sería el siguiente:

function factorial(num) {
  let resultado = 1;
  for (let i = 1; i <= num; i++) {
    resultado *= i;
  }
  return resultado;
}

//En esta función, se inicializa una variable llamada resultado con el valor 1. Luego, se utiliza un bucle for para multiplicar los números desde 1 hasta el número deseado. En cada iteración del bucle, se multiplica el número actual por el resultado y se actualiza el valor de la variable resultado. Finalmente, se devuelve el resultado.

//Por ejemplo, si se llama a la función factorial con el número 5 como argumento, se devolverá el valor 120:

console.log(factorial(5)); // Output: 120

//yo utilice un bucle for para comprobar si es divisible por algún número entre 2 y la mitad del número. Si se encuentra algún número que lo divide sin dejar residuo, entonces el número no es primo. Si se termina el bucle sin encontrar un divisor, entonces el número es primo.

//Para implementar esta solución en JavaScript, se puede crear una función llamada esPrimo que tome un número como argumento y devuelva true si es primo o false si no lo es. El código de esta función sería el siguiente:

function esPrimo(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

//entonces, si se llama a la función esPrimo con el número 17 como argumento, se devolverá true:

console.log(esPrimo(17)); // Output: true

//La secuencia de Fibonacci es una serie de números en la que cada número es la suma de los dos números anteriores. Por ejemplo, 
//los primeros 10 números de Fibonacci son:

1, 1, 2, 3
