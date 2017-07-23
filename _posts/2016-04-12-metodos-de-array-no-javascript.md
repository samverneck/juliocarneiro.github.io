---
title: Métodos de array no Javascript
layout: post
date: '2016-04-12'
description: Neste post vamos aprender como usar alguns métodos de array no Javascript como concat, join, push, pop, shift, unshift, slice, reverse e sort.
tags:
- métodos de array
- javascript
comments: true
share: true
---

Boa tarde pessoal, tudo bem? Espero que sim, hoje estou aqui pra ensinar vocês como manipular alguns métodos de array no JS. Este post vai ficar meio longo creio eu pois quero abordar os principais métodos, para sairmos do post aplicando o conhecimento sem termos problemas.

## Método concat()

Vamos começar pelo método “concat()”, que serve para concatenar dois arrays, no exemplo vamos concatenar o array1 com o array2, veja:

```bash
var array1 = ['branco', 10, 20, 30, null];
var array2 = ['verde', 40, 50, 60, undefined];

array1 = array1.concat(array2);
console.log(array1);
```

O resultado desta operação será um array com os elemento dos dois arrays concatenados, e pode ser visto no console do seu navegador:

```bash
["branco", 10, 20, 30, null, "verde", 40, 50, 60, undefined]
```

## Método join()

O “join()” puxa elementos de um array e lista no formato de string, veja:

```bash
var array1 = ['branco', 10, 20, 30];

array1 = array1.join('-');
console.log(array1);
```

O resultado da operação puxou as propriedades do meu array e listou elas para mim separando com um traço como eu determinei acima:

```bash
branco-10-20-30
```

## Método push()

O “push()” serve para adicionarmos elementos no final do array, veja:

```bash
var array1 = ['branco', 10, 20, 30];

array1.push('novo elemento');
console.log(array1);
```

O resultado nos trouxe um novo elemento no final do nosso array:

```bash
['branco', 10, 20, 30, "novo elemento"]
```

## Método pop()

O “pop()” remove o último elemento de um array, veja:

```bash
var array1 = ['branco', 10, 20, 30, "novo elemento"];

array1.pop();
console.log(array1);
```

Veja que o nosso último elemento do array foi removido:

```bash
['branco', 10, 20, 30]
```

## Método shift()

O “shift()” é o contrário do “pop()”, ele remove o PRIMEIRO elemento do array, veja:

```bash
var array1 = ['branco', 10, 20, 30, "novo elemento"];

array1.shift();
console.log(array1);
```

Primeiro elemento do array removido com sucesso:

```bash
[10, 20, 30, "novo elemento"]
```

## Método unshift()

O “unshift()” faz o contrário do que o “push()” faz, ele adiciona um elemento no início de um array, veja:

```bash
var array1 = ['branco', 10, 20, 30, "novo elemento"];

array1.unshift('novo elemento');
console.log(array1);
```

Veja o resultado impresso no console:

```bash
["novo elemento", "branco", 10, 20, 30, "novo elemento"]
```

## Método slice()

O “slice()” extrai uma sessão de um array e retorna um novo array, veja:

```bash
var array1 = ['branco', 10, 20, 30, "novo elemento"];
var novoArray = array1.slice(1,3);

console.log(novoArray);
```

Acima estamos pedindo para que nosso array seja selecionado do elemento 1 até o elemento 3 para gerarmos um novo array somente com os elementos que queremos, veja nosso resultado no console:

```bash
[10, 20]
```

## Método splice()

No “splice()” podemos escolher um índice inicial e final para substituirmos valores entre eles, veja:

```bash
var array1 = ['branco', 10, 20, 30, "novo elemento"];
array1.splice(1,2, "splice");

console.log(array1);
```

No programa acima eu dei o comando para o splice adicionar um elemento novo no lugar dos elementos 1 e 2, veja o resultado:

```bash
["branco", "splice", 30, "novo elemento"]
```

## Método reverse()

O “reverse()” inverte a ordem dos elementos do nosso array, veja:

```bash
var array1 = ['branco', 10, 20, 30, "novo elemento"];
array1.reverse();

console.log(array1);
```

E o resultado no nosso console é:

```bash
["novo elemento", 30, 20, 10, "branco"]
```

Hoje aprendemos mais sobre os métodos de array no javascript e como utiliza-los de forma correta. Vou deixar um link com alguns testes no codepen para ser melhor vizualizado e testado por vocês ok?

http://codepen.io/juliocarneiro/pen/Meyjvq

Por hoje foi só isso pessoal, espero ter contribuído com o conhecimento de alguns de vocês, pois eu realmente gosto muito de fazer estes posts e poder ajudar de alguma forma.

Abraços e até o próximo post.