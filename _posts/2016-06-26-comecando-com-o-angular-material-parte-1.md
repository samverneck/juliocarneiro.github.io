---
title: Começando com o Angular Material — Parte 1
layout: post
date: '2016-06-26'
description: Série de posts contendo uma introdução ao Angular Material
tags:
- angular
- angular material
- javascript
comments: true
share: true
---

Fala pessoal, beleza? Espero que sim! Decidi começar essa série de posts sobre Angular pois ultimamente é o que mais estou estudando, e pirando também rs, estou viciado no angular confesso, e não podia deixar de escrever sobre o angular material pois ele realmente me surpreendeu com sua facilidade que junto a sua beleza o torna bem interessante.

Vou escrever uma série com alguns posts baseados no que eu aprendi do angular material nesses tempos estudando na internet, espero que possa ajudar uma galera que queria muito conhecer porém não sabia por onde começar ou tem dificuldade de achar algo em português, fique ligado no blog que vou tentar postar essa série com mais frequência que as outras, pois está sendo meu foco no momento.

Lembrando que esta série exige um certo conhecimento de AngularJS para ser compreendida ok?

Não iremos falar sobre o básico do AngularJS, pretendo fazer uma série de posts sobre isso também porém mais pra frente. “Ah, e porque não fez a AngularJS Basics antes?”. Simples, porque eu não quis ;D

## Parte 1 - Baixar e instalar

Vamos começar criando uma nova pasta e começando um projeto npm dentro dela, veja:

```bash
cd Desktop
mkdir project
cd project
npm init
```

Vão aparecer algumas opções do projeto npm pra preencher, preencha conforme queira ou pule apertando “enter”.

Agora vamos instalar o angular, o angular material e as dependencias do material:

npm install angular angular-material angular-animate angular-aria --save
Legal, instalamos as dependências que precisamos para começar nosso projeto, agora precisamos linkar com nosso arquivo html certo? Então vamos começar linkando 5 arquivos de dependências, um de css que deverá ser linkado no “head”, e outros 4 scripts que linkamos antes da tag de fechamento do “body”, vejamos:

```html
<html ng-app="app">
<head>
    <link rel="stylesheet" href="node_modules/angular-material/angular-material.css"
</head>
<body>
    <div></div>
    <script src="node_modules/angular/angular.min.js"></script>
    <script src="node_modules/angular-animate/angular-animate.min.js"></script>
    <script src="node_modules/angular-aria/angular-aria.min.js"></script>
    <script src="node_modules/angular-material/angular-material.min.js"></script>
</body>
</html>
```

Feito isso precisamos chamar o módulo e incluir a dependência do angular-material, veja:

```html
<html ng-app="app">
<head>
    <link rel="stylesheet" href="node_modules/angular-material/angular-material.css"
</head>
<body>
    <div></div>
    <script src="node_modules/angular/angular.min.js"></script>
    <script src="node_modules/angular-animate/angular-animate.min.js"></script>
    <script src="node_modules/angular-aria/angular-aria.min.js"></script>
    <script src="node_modules/angular-material/angular-material.min.js"></script>
    <script>
        angular.module('app', ['ngMaterial'])
            .run(function(){
            console.log('Funcionando!')
        });
    </script>
</body>
</html>
```

Vejam que eu chamei nosso ng-app na tag html, isto é muito importante em nosso passo a passo pois vamos chamar o nosso módulo por ela, então como chamei na tag html ele vai se estender por toda a página procurando por diretivas, controllers etc.

Ainda neste exemplo, escrevi uma função que quando a página é carregada ela dispara uma mensagem no console, você pode testar em sua maquina para assimilar o que eu fiz até aqui.

Antes de dar continuidade ao artigo vou deixar o link da documentação oficial do angular material que é bem explicavita e com certeza vai te ajudar bastante nessa jornada de aprendizado, além do que vamos usar bastante os exemplos de lá nos artigos:

https://material.angularjs.org/

## Action

Ambiente preparado tudo funcionando? Legal, bora pra action, eu ia postar somente até aqui na parte 1 pro post não ficar gigante, porém acho que ficaria meio chato porque sei que se você está lendo isso quer ir logo pra action! Então decidi postar um combo parte 1 + parte 2, segura:

## Layout

No Angular Material podemos usar algumas diretivas pré prontas para criarmos interfaces. Usando estas diretivas html podemos definir valores (ex: layout=”row”), que vão nos ajudar bastante a separar as coisas do jeito mais facil para trabalharmos, pois os atributos vão definir o layout baseado nas classes css que já existem no angular material. Conforme a documentação, segue abaixo uma tabela contendo algumas especificações:

![](https://cdn-images-1.medium.com/max/800/1*Zh1tH1Cuk-V7ljIIKukbXQ.png "Center"){: .center-image}

Então, como o angular material tem uma api flexbox podemos setar uma div row, e dentro dela criar 2 divs com um “flex=”50””, assim cada div dentro da div row terá o espaço de 50% da tela uma ao lado da outra, veja o exemplo:

```html
<div layout="row">
    <div flex="50">Primeira div</div>
    <div flex="50">Segunda div</div>
</div>
```

Abaixo temos algumas especificações de breakpoints que também serão bem importante pra criarmos nossos apps e deixarmos tudo responsivo, vamos associar breakpoints a definições de mediaquery, veja:

![](https://cdn-images-1.medium.com/max/800/1*gRZXmgUUu4Nu48zmSVKATA.png "Center"){: .center-image}

Agora podemos combinar o breakpoint junto a api layout e pronto, temos responsividade em nosso app :D veja como funciona:

![](https://cdn-images-1.medium.com/max/800/1*bF72D6KkAPhg1IS9jcjvBA.png "Center"){: .center-image}

Com essas informações já podemos começar a fazer algumas coisas como fazer a div aparecer com uma estrutura default para quando estiver no desktop, e outra quando estiver no celular apenas manipulando a api layout, veja:

```html
<md-content class="md-padding" layout-xs="column" layout="row"></md-content>
```

Veja que eu pedi para por default o md-content vir como row, e quando a tela for menor que 599px como vimos nos breakpoints setando o xs, ele mude para column.

## Layout-align

Podemos também alinhar elementos em nossa página com a api layout-align, veja um exemplo:

```html
<div layout="row" layout-align="center">
    Hello World!
</div>
```

Podemos também combinar com os breakpoints caso for preciso para deixarmos responsivo, veja a tabela:

![](https://cdn-images-1.medium.com/max/800/1*hltJORr9bcACAOwG3EkQlg.png "Center"){: .center-image}

## Show & Hide

Outra coisa muito interessante na parte de layouts do angular material é o show & hide, uma api que pode ser usada para mostrar ou esconder algum elemento conforme a resolução:

![](https://cdn-images-1.medium.com/max/800/1*eBPJTlusl1IEA7gGhRxV0w.png "Center"){: .center-image}

Reproduza o código abaixo para ver o comportamento da página quando diminuimos a janela do navegador:

```html
<div layout="row">
    <div hide show-gt-sm flex>
        Mostrar somente em dispositivos gt-sm
    </div>
    <div hide-gt-sm flex>
        Mostrar em resolução pequena e média<br>
        Esconder em dispositivos gt-sm        
    </div>
    <div show hide-gt-md flex>
        Mostrar em resolução pequena e média<br>
        Esconder em dispositivos gt-md        
    </div>
    <div hide show-md flex>
        Mostrar somente em resoluções médias<br>
    </div>
    <div hide show-gt-lg flex>
        Mostrar em resoluções maiores que 1200px de largura<br>
    </div>
</div>
```

Viu só? Facilitou bastante como podemos construir nossas estruturas responsivas. Aprendemos hoje como colocar e iniciar o angular-material no seu projeto, e um pouco mais sobre a parte de layout e layout responsivo, creio que no próximo post vamos poder brincar com coisas mais legais, porém essa parte é essencial para qualquer pessoa que quer aprender o angular material, sem ela fica muito dificil de trabalharmos.

Peço desculpas pelo tamanho do post porque creio que tenha ficado meio enorme rs e isso não foi absolutamente nada do que o angular-material pode fazer, espero que tenha contribuido com seu conhecimento, e no próximo post vou continuar explicando um pouco sobre os services do angular material, qualquer feedback será bem-vindo!

Abraços.