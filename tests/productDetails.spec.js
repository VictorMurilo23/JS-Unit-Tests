const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se productDetails é uma função', () => {
    expect(typeof productDetails).toBe('function')
  });

  it('Verifica se o retorno da função é um array', () => {
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBeTruthy()
  })  

  it('Verifica se o array retornado contém dois itens dentro', () => {
    expect(productDetails('Alcool gel', 'Máscara')).toHaveLength(2)
  })

  it('Verifica se os dois itens dentro do array retornado são objetos', () => {
    expect(typeof productDetails('Alcool gel', 'Máscara')[0]).toBe('object')
    expect(typeof productDetails('Alcool gel', 'Máscara')[1]).toBe('object')
  })

  it('Verifica se os objetos são diferentes, caso os parâmetros sejam diferentes. E verifica se os dois productIds terminam com 123', () => {
    const differentProducts = productDetails('Alcool gel', 'Máscara')
    const sameProducts = productDetails('Máscara', 'Máscara')
  
    expect(differentProducts[0].name !== differentProducts[1].name)
      .toBeTruthy()

    expect(sameProducts[0].name === sameProducts[1].name)
      .toBeTruthy()

    expect(differentProducts[1].details.productId !== differentProducts[0].details.productId)
      .toBeTruthy()

    expect(sameProducts[1].details.productId === sameProducts[0].details.productId)
      .toBeTruthy()

    expect(differentProducts[0].details.productId.includes('123'))
      .toBeTruthy()

    expect(differentProducts[1].details.productId.includes('123'))
      .toBeTruthy()
  });
});
