---
title: Seleção de elementos com VanillaJS
layout: post
date: '2016-05-31'
description: Como selecionar elementos do DOM utilizando Javascript puro.
tags:
- javascript
comments: true
share: true
---

Você deve estar acostumado a selecionar elementos utilizando jQuery pois de fato é um pouco mais fácil, podemos selecionar qualquer elemento do DOM com jQuery escrevendo somente “$(‘elemento’)”. Já no VanillaJS, vamos aprender algumas maneiras diferentes de pegar certo tipo especifico de elemento para poder manipular.

## Primeiro, o que é VanillaJS?

VanillaJS é o nome que damos para o Javascript “puro”, sem frameworks, que é maravilhosamente lindo hahaha. Com as dicas deste post você já pode começar a largar o jQuery e começar escrever Vanilla, garanto que os resultados serão satisfatórios e vai ser ótimo para o seu crescimento profissional.

No Javascript nós podemos pegar os elementos de acordo com o tipo deles, vou dar um exemplo, para selecionarmos o elemento pelo id escrevemos:

```javascript
document.getElementById('seuId');
```

Também podemos selecionar elementos a partir da classe com:

```javascript
document.getElementsByClassName('suaClasse');
```

Ou pelo atributo name, com ele podemos brincar com formulários, veja:

```javascript
document.getElementsByName('botaoEnviar');
```

Pela tag como escrito abaixo, o javascript vai nos retornar um objeto parecido com um array contendo todos os elementos “input” da página, assim posso selecionar qual elemento especifico eu quero pegar pelo numero dele, no exemplo abaixo eu estou pegando o segundo input da página, veja:

```javascript
document.getElementsByTagName('input')[1];
```

Podemos ir um pouco mais além e selecionar qualquer elemento da página usando o “document.querySelectorAll”, que é como se escrevêssemos o famoso “$(‘’)” no jQuery, veja:

```javascript
document.querySelectorAll('#id');
document.querySelectorAll('.class');
document.querySelectorAll('h1.texto');
document.querySelectorAll('*[name="att"]');
```

Sabendo um pouco mais sobre os seletores específicos podemos encapsular o elemento em uma variável e manipula-lo do jeito que quisermos em uma função, veja:

```javascript
window.onload = function el(){
    var elemento = document.getElementById('elemento')
    var img = '<img src="https://cdn-images-1.medium.com/max/800/1*oGnVvW3zl3-IWbF6jZ7VWw.png">';
    elemento.innerHTML = img; // exibe uma imagem
}
```

No código acima eu pedi para que quando o meu navegador estivesse pronto ele rodasse a função “el”, dentro dela tenho duas variáveis, uma pegando o elemento que eu quero retornar no meu html e outra que contém o código que quero injetar neste elemento. Depois disso peço para o javascript injetar na variável “elemento” o conteúdo da variável “img”. Vejam no CodePen:

[http://codepen.io/juliocarneiro/pen/dXPJGz](http://codepen.io/juliocarneiro/pen/dXPJGz)

Hoje aprendemos como podemos selecionar elementos da nossa página com Javascript puro, a idéia desta série de tutoriais sobre Vanilla é você aprender o básico pra se virar legal sem o jQuery, não se esqueça que o jQuery é somente um framework, o poder está no javascript ;D

Abraços a todos e até o próximo post!