// Archivo para testear y probar el correcto funcionamiento de jest.

/**
 * Suma dos números.
 * @param {number} a El primer número.
 * @param {number} b El segundo número.
 * @returns {number} La suma de a y b.
 */
export function sum(a, b) {
  return a + b;
}

/**
 * Retorna true si un número es par y false si el número no es par.
 * @param {number} num El número a verificar.
 * @returns {boolean} True si es par, false en caso contrario.
 */
export function isEven(num) {
  return num % 2 === 0;
}