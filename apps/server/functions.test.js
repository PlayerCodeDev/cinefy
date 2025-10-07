import { sum, isEven } from './functions.js';

describe('Pruebas para funciones matemáticas', () => {

  test('La función sum debe sumar correctamente dos números', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(5, 5)).toBe(10);
    expect(sum(-1, 1)).toBe(0);
  });

  test('La función isEven debe identificar números pares e impares', () => {
    // Caso de éxito: número par
    expect(isEven(4)).toBe(true);
    expect(isEven(0)).toBe(true);

    // Caso de fallo: número impar
    expect(isEven(3)).toBe(false);
    expect(isEven(1)).toBe(false);
  });

});