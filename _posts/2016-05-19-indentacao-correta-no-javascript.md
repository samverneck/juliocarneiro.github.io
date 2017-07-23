---
layout: post
title:  "Indentação correta no Javascript"
date:   2016-05-19
description: Entendendo como funciona a indentação no Javascript
tags: [indentação, javascript]
comments: true
share: true
---

Pessoal este é meu primeiro artigo sobre Javascript, estou cada dia mais apaixonado pela linguagem e estudando bastante (porém com estudos regrados, focados em performance, mas este é um tema para outro post), o que está me rendendo ótimos frutos nos quais vou compartilhar com vocês.

Se você é programador provavelmente já ouviu falar em indentação, se não ouviu, este artigo também serve para você compreender como elas funcionam no Javascript.

Código sem indentação não é legal de se ler, mas tem uma coisa um pouco pior que isso, ou tão ruim quanto, que é a falta de um padrão na indentação do projeto. Por exemplo, eu uso tab pois consigo ajustar meu editor para que ele exiba a quantidade que eu julgue necessária de espaços, mas pode ser que alguém da minha equipe use os próprios espaços, eai já imagina a beleza que vai ficar o código né? É MUITO importante padronizar o uso da indentação para não ter problemas futuros.

Para quem usa espaços, o padrão de validação do JSLint por exemplo é de 4, e é este que vamos usar neste artigo.

## O que deve ser indentado?

Mas o que será que eu indento? O que precisa ser indentado? Simples, qualquer coisa dentro de chaves. Funções, loops, ifs, switches e propriedades de objetos, vou mostrar a baixo exemplos de indentação:

```javascript
function algumaFuncao(a, b) {
    var c = 1,
        d = 2,
        inner;
    if (a > b) {
        inner = function() {
        return {
            r: c - d
        };
    };
    } else {
        inner = function () {
            return {
                r: c + d
            };
        };
    }
    return inner;
}
```

Caso você tenha apenas uma instrução em um if ou for, as chaves não são obrigatórias, porem, mesmo que sejam opcionais é importante sempre usa-las. Isto faz com que seu código seja mais fácil de dar manutenção pois outras pessoas vão entende-lo melhor.

Exemplo, imagina que você tenha um loop for com uma instrução. Você pode optar por não por as chaves e mesmo assim não haveriam erros de sintaxe:

````javascript
for (var i = 0; i < 10; i += 1)
    alert(i);
````

E se caso mais tarde você decidir adicionar outra linha no loop?

````javascript
for (var i = 0; i < 10; i += 1)
    alert(i);
    alert(i + ' is ' +(i % 2 ? 'odd' : 'even'));
````

O segundo alert() está fora do loop neste caso, apesar da indentação estar tentando te enganar. Por isso temos que sempre usar as chaves, pois evitamos ter problemas futuros, precisamos pensar a longo prazo aqui.

## Chave de abertura

Tendemos a ter preferência sobre onde colocar a chave de abertura no código, uns preferem por na mesma linha, outros na linha seguinte, veja:

````javascript
if (true){
    alert('É true!')
}
````

Ou:

````javascript
if (true)
{
    alert('É true!')
}
````

Neste exemplo é uma questão de preferência porém, em alguns casos o programa pode se comportar diferentemente, dependendo de onde a chave está. Isto ocorre por causa do mecanismo de inserção de ponto e vírgula — o JS não alarma caso você queira não terminar suas linhas com ponto e vírgula, pois neste caso ele adiciona para você. Isso pode causar problemas quando uma função retorna um objeto literal e a chave de abertura está na linha seguinte:

````javascript
function func() {
    return
    {
        nome: 'Julio'
    };
}
````

Se você queria que sua função retornasse o objeto “nome”, você vai ter uma surpresa, experimente rodar no seu console do node e ver o resultado para melhor compreender. Por causa dos pontos e vírgulas a função retorna “undefined”.

> Concluindo: Sempre usar chaves, e sempre colocar a de abertura na mesma linha da instrução anterior:

````javascript
function func() {
    return {
        nome: 'Julio'
    };
}
````

Espero que tenham curtido, e que eu possa ter contribuído com o conhecimento de quem acessa meu Medium, este é meu objetivo em geral, ajudar! Abraços, te espero no próximo post!