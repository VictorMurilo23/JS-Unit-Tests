/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const numbers = require('../src/numbers');

/*
  A função `numbers` recebe um array de tamanho variável e retorna `true` se todos os parâmetros forem do tipo 'number' e `false` caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

*/

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Verifica se a função `numbers` retorna `true` quando o array contém apenas números e falso caso contrário', () => {
    expect(numbers([1, 2, 3, 4, 5])).toEqual(true)
  });

  it(`Verifica se a função 'numbers' retorna falso caso o array tenha algo diferente de números`, () => {
    expect(numbers([1, 2, '3', 4, 5])).toEqual(false)
  })

  it(`Verifica se a função 'numbers' retorna 'false' quando recebe o array [1, true, 3]`, () => {
    expect(numbers([1, true, 3])).toEqual(false)
  })
  
  it(`Verifica se a função 'numbers' retorna 'false' quando recebe [' ']`, () => {
    expect(numbers([' '])).toEqual(false)
  })
});
