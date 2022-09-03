const createMenu = require("../src/restaurant");

/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante através do qual será possível
  cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto que permite:

  - Ler o menu cadastrado;
  - Fazer pedidos;
  - Verificar o que foi pedido;
  - Somar o valor da conta.

  A estrutura deste código e deste objeto já está definida e você precisa implementá-la.
  Abaixo você verá uma série de testes e passos que irão guiar você e, que devem NECESSARIAMENTE ser realizados em ordem para o bom desenvolvimento do sistema.

  Desenvolvimento:
  - Uma função: 
    createMenu()
  - Recebe um parâmetro que é um objeto, o menu:
    Exemplo: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.

  A função createMenu() então, retornará um novo objeto. Este novo objeto contém algumas chaves e ao acessar cada uma delas temos os seguintes retornos:

  - Uma chave `fetchMenu` retornando o menu, que nada mais é que o objeto passado como parâmetro para createMenu()

    Exemplo:
    const meuRestaurante = createMenu({
      food: {'coxinha': 3.90, 'sanduiche', 9.90},
      drinks: {'agua': 3.90, 'cerveja': 6.90}
    });

    meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` armazenando um array de strings. Cada string é a chave de um pedido.
    Exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` armazenando uma função. Essa função recebe uma string como parâmetro e essa string deve ser adicionada à lista armazenada em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função. Essa função faz a soma do preço de todos os pedidos, retornando essa soma de preços com acréscimo de 10%.

  Comportamento:
    const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} })

    meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

    meuRestaurante.order('coxinha') // Retorno: undefined

    meuRestaurante.consumption // Retorno: ['coxinha']

    meuRestaurante.pay() // Retorno: 4.29

  IMPORTANTE: FAÇA OS TESTES E PASSOS DE ACORDO COM A SEQUÊNCIA INDICADA NO README DO PROJETO!

*/

describe("10 - Implemente os casos de teste e a função `createMenu`", () => {
  const menuObj = {
    food: { bandeclay: 5.9, sanduiche: 9.9 },
    drinks: { agua: 3.9, cerveja: 6.9 },
  };

  const menuObj2 = {
    food: { coxinha: 3.9, sanduiche: 9.9 },
    drinks: { agua: 3.9, cerveja: 6.9 },
  };

  const menuObj3 = {
    food: { coxinha: 10, sopa: 6 },
    drink: { agua: 10, cerveja: 6.9 },
  };

  it(`Verifica se função 'createMenu()' retorna um objeto que possui a chave 'fetchMenu', a qual tem como valor uma função.`, () => {
    const menuFunction = createMenu();
    expect(typeof menuFunction).toEqual("object");
    expect(Object.keys(menuFunction).includes("fetchMenu")).toBeTruthy();
    expect(typeof menuFunction.fetchMenu).toEqual("function");
  });

  it(`Verifica se 'createMenu.fetchMenu()' retorna um objeto cujas chaves são somente 'food' e 'drink'`, () => {
    const menuFunction = createMenu({ food: {}, drink: {} });
    expect(menuFunction.fetchMenu()).toEqual({ food: {}, drink: {} });
  });

  it(`Verifica se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função 'objetoRetornado.fetchMenu()'`, () => {
    const menuFunction = createMenu(menuObj2);
    expect(menuFunction.fetchMenu()).toMatchObject(menuObj2);
  });

  it(`Verifica se 'createMenu.consumption', após a criação do menu, retorna um array vazio`, () => {
    const menuFunction = createMenu(menuObj);
    expect(menuFunction.consumption).toEqual([]);
  });

  it(`Verifica se, ao chamar uma função associada à chave 'order' no createMenu, passando uma string como parâmetro, tal string é adicionada ao array retornado em createMenu.consumption`, () => {
    const menuFunction = createMenu(menuObj);
    menuFunction.order("bandeclay");

    expect(menuFunction.consumption).toEqual(["bandeclay"]);
  });

  it(`Verifica se, ao adicionar três pedidos,dentre bebidas e comidas, o array 'createMenu.consumption' contém os itens pedidos`, () => {
    const menuFunction = createMenu(menuObj);
    menuFunction.order("pizza");
    menuFunction.order("agua");
    menuFunction.order("cerveja");
    menuFunction.order("bandeclay");
    expect(menuFunction.consumption).toEqual([
      "pizza",
      "agua",
      "cerveja",
      "bandeclay",
    ]);
  });

  it(`Verifica se a função 'order' aceita que pedidos repetidos sejam acrescentados a 'consumption'`, () => {
    const menuFunction = createMenu(menuObj);
    menuFunction.order("bandeclay");
    menuFunction.order("bandeclay");
    menuFunction.order("agua");
    expect(menuFunction.consumption).toEqual([
      "bandeclay",
      "bandeclay",
      "agua",
    ]);
  });

  it(`Verifica se, ao 'createMenu.pay()', retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em 'createMenu.consumption'`, () => {
    const menuFunction = createMenu(menuObj3);
    menuFunction.order("coxinha");
    menuFunction.order("agua");
    expect(menuFunction.pay()).toBe("22.00");
  });
});
