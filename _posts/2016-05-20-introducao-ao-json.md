---
title: Introdução ao JSON
layout: post
date: '2016-05-20'
description: Entendendo estruturas de armazenamento de dados.
tags:
- json
- javascript
- armazenamento de dados
comments: true
share: true
---

Fala pessoal, gostaria primeiramente de agradecer a repercussão que meu ultimo post teve, foi bem legal ver quantos views o artigo teve e que eu pude ajudar bastante gente, me deu um up e resolvi escrever outro artigo hoje, por isso é importante ter feedbacks, me da vontade de criar conteúdo novo!

## Bora falar de JSON?

O JSON serve para criarmos estruturas de armazenamento de dados no Javascript, uma alternativa mais popular ao XML. JSON significa “Javascript Object Notation” e é chamado assim pois ao criar um JSON você estará criando um objeto, podendo facilmente ser analisado e manipulado com o Javascript!

O XML é mais fácil de ser lido, porém se torna mais difícil descreve-lo a um computador. JSON é uma alternativa mais fácil de ser compreendida pela maquina. Quando você usa JSON você pode le-lo em uma variável que cria um objeto, vejamos:

```javascript
var pessoa = {'nome': 'Júlio'};
console.log('pessoa.nome');
```

Primeiro de tudo criamos uma variável na qual vão conter os dados que eu quero que retornem, e então usar o JSON para definir nosso objeto. Como usei uma string passei aspas simples, caso você queira retornar um number você não precisa usar aspas.

Vamos tornar mais realista inserindo dados JSON em um objeto do DOM:

```javascript
var pessoa = {'nome': 'Júlio'};
document.getElementById('div').innerHTML = pessoa.nome;
```

Agora estamos retornando nosso JSON dentro de uma div html envés de um console.log. O JSON pode se tornar muito mais complexo, vamos adicionar alguns campos e ver como fica:

```javascript
var pessoa = {
    'nome': 'Júlio',
    'sobrenome': 'Carneiro',
    'altura': 1.75
};
```

document.getElementById('div').innerHTML = 'Olá, me chamo ' + pessoa.nome+' '+pessoa.sobrenome+' '+ 'e tenho' + pessoa.altura + ' de altura';
Notou que adicionei algumas indentações para nosso JSON né? Isso é muito importante para entendimento de terceiros. Nosso código ainda está muito simples, bora fazer algo mais complexo? E se quiséssemos que nosso JSON tivesse mais de uma pessoa? Teremos que criar um array, para criar arrays usamos “[]”. Vejamos:

```javascript
var pessoa = { 'usuarios':[
    {
        'nome': 'Júlio',
        'sobrenome': 'Carneiro',
        'altura': 1.75
    },
    {
        'nome': 'Joao',
        'sobrenome': 'Silva',
        'altura': 1.80
    }
]}

document.getElementById('div').innerHTML = 'Olá, me chamo ' + pessoa.usuarios[0].nome + ' ' + pessoa.usuarios[0].sobrenome + ' ' + 'e tenho' + pessoa.usuarios[0].altura + ' de altura';
```

Parece um pouco complicado, mas na verdade é muito fácil de ser entendido. Cada objeto JSON é armazenado com chaves, e um array com colchetes, então para separarmos os usuários criamos dentro de um objeto JSON um array com duas pessoas e suas características, cada uma separada por uma vírgula.

Depois disso dizemos ao DOM que queremos pegar os dados somente do elemento 0 do array usando “pessoa.nome[0]” por exemplo e concatenando com as outras informações.

Agora vamos aumentar um pouco a complexidade do código:

```javascript
var pessoa = { 'usuarios':[
    {
        'nome': 'Júlio',
        'sobrenome': 'Carneiro',
        'altura': 1.75
    },
    {
        'nome': 'Joao',
        'sobrenome': 'Silva',
        'altura': 1.80
    }
]}
var saida = ' <ul> ';
for (var i in pessoa.usuarios) {
    saida+='<li>' + 'Olá, me chamo ' + pessoa.usuarios[i].nome + ' ' + pessoa.usuarios[i].sobrenome + 'e tenho' + pessoa.usuarios[i].altura + ' de altura' + '</li>';
    }
    saida += '</ul>';
document.getElementById('div').innerHTML = saida;
```
		
[http://codepen.io/juliocarneiro/pen/vKOPPX?editors=1010](http://codepen.io/juliocarneiro/pen/vKOPPX?editors=1010)

Neste código usamos uma instrução que criou uma variável chamada “saida” para armazenar os dados temporariamente. Quando percorrermos todos os elementos do array usamos a variável de saída para preencher o espaço que estava reservado assim retornando somente o que queremos.

Creio que com esse boom de NodeJS e deJavascript em geral, é importante entendermos muito bem como o JSON funciona, e espero que este artigo tenha te dado uma introdução legal a este assunto, te vejo no próximo post! Abraços.