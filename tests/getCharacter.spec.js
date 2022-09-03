/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const getCharacter = require('../src/getCharacter');

/*
A função getCharacter recebe uma string que representa o nome de um personagem e retorna um objeto contendo seu nome, sua classe e suas frases.

O retorno será de acordo com a seguinte relação:

 Parâmetro  |      Nome       |    Classe   |              Frases
----------------------------------------------------------------------------------
   Arya     |   Arya Stark    |    Rogue    | 'Not today', 'A girl has no name.'
  Brienne   |  Brienne Tarth  |    Knight   | 'Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'
Melissandre |   Melissandre   | Necromancer | 'Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'

- Se o parâmetro não estiver na tabela, a função retorna `undefined`.
- Se o parâmetro estiver, a função retorna um objeto no formato abaixo:

  {
    name: 'Nome do Personagem',
    class: 'Classe do Personagem' ,
    phrases: ['frase1', 'frase2']
  }

- OBS.: O parâmetro não é CASE SENSITIVE, portanto Arya, ArYa e ARYA tem o mesmo resultado.

Escreva pelo menos seis testes para essa função garantindo que a implementação de getCharacter está correta.

Parâmetros:
  - Uma string.

Comportamento: 
  - getCharacter('Arya');

Retorno:
{
  name: 'Arya Stark',
  class: 'Rogue',
  phrases: [ 'Not today', 'A girl has no name.' ]
}
*/

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  it(`Verifica se a função 'getCharacter' retorna o objeto correto para o parâmetro 'Arya'`, () => {
    const aryaObj = { name: 'Arya Stark', class: 'Rogue', phrases: [ 'Not today', 'A girl has no name.' ] }
    expect(getCharacter('Arya')).toMatchObject(aryaObj)
  });

  it(`Verifica se a função 'getCharacter' retorna o objeto correto para o parâmetro 'Brienne'`, () => {
    const brienneObj = { name: 'Brienne Tarth', class: 'Knight', phrases: [ 'Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.' ] }
    expect(getCharacter('Brienne')).toMatchObject(brienneObj)
  })

  it(`Verifica se a função 'getCharacter' retorna o objeto correto para o parâmetro 'Melissandre'`, () => {
    const melissandreObj = { name: 'Melissandre', class: 'Necromancer', phrases: [ 'Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.' ] }
    expect(getCharacter('Melissandre')).toMatchObject(melissandreObj)
  })

  it(`Verifica se ao passar um nome que não está na tabela, a função retorna undefined.`, () => {
    expect(getCharacter('Mike Wazowski')).toBeUndefined()
  })
  
  it(`Verifica se a função, quando não recebe nenhum parâmetro, retorna undefined`, () => {
    expect(getCharacter()).toBeUndefined()
  })
  
  it(`Verifica se o parâmetro, independente de conter letras maiúsculas ou minúsculas, retorna o mesmo objeto relativo a ele`, () => {
    const aryaObj = { name: 'Arya Stark', class: 'Rogue', phrases: [ 'Not today', 'A girl has no name.' ] }

    const brienneObj = { name: 'Brienne Tarth', class: 'Knight', phrases: [ 'Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.' ] }

    const melissandreObj = { name: 'Melissandre', class: 'Necromancer', phrases: [ 'Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.' ] }

    expect(getCharacter('aRyA')).toMatchObject(aryaObj);
    expect(getCharacter('bRieNNe')).toMatchObject(brienneObj);
    expect(getCharacter('MeLiSsanDrE')).toMatchObject(melissandreObj);
  })
});
