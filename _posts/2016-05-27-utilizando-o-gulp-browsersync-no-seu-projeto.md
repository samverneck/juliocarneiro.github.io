---
title: Utilizando o Gulp + Browsersync no seu projeto
layout: post
date: '2016-05-12'
description: Introdução de como utilizar o Gulp junto ao Browsersync para reload automático nas páginas durante o desenvolvimento.
tags:
- gulp
- browsersync
comments: true
share: true
---

Fala pessoal, beleza? Espero que sim! Hoje vou falar sobre como automatizar os reloads de página no desenvolvimento, vamos utilizar o Gulp e o Browsersync para fazer isso pra gente.

Você já deve ter se incomodado em ter que dar reload na página a cada modificação que faz, ou estou errado? Poisé, mas este problema já tem uma solução a algum tempo, temos o Browsersync que junto ao Gulp (A função do Gulp é basicamente realizar rotinas pre-definidas) podem fazer essa automação pra nós realizando o reload automático na página a cada vez que modificamos um arquivo, nos fazendo economizar bastante tempo e fazendo com que nosso desenvolvimento seja mais proveitoso!

Vamos começar instalando o Gulp na nossa maquina em modo global, veja:

```bash
npm install -g gulp-cli gulp
```

Após a instalação vamos criar uma pasta para nosso projeto e instalar o Gulp e o Browsersync como dependencia dele desta maneira:

```bash
mkdir projeto
cd projeto
npm init
npm install --save-dev gulp browser-sync
```

Depois de tudo instalado corretamente vamos criar um “gulpfile.js” e adicionar nossas tarefas nele:

```javascript
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
```

Acima chamamos o Gulp e o Browsersync em nosso arquivo e em seguida criamos uma nova task que cria um server básico para subirmos nossa aplicação e começar desenvolver utilizando o gulp e o browsersync.

## Reload Manual

No reload manual vamos salvar uma referencia “reload” para o método “broserSync.reload” e no final da função de server vamos referenciar em quais arquivos ou pastas queremos assistir as modificações e dizer para o gulp que quando nosso arquivo tiver alguma mudança nos arquivos .html vamos rodar o “reload”, veja:

```javascript
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.html").on("change", reload);
});
```

Depois de tudo configurado podemos rodar o gulp no projeto e ver se tudo ocorreu como planejamos, você pode iniciar o gulp com o comando “gulp serve”, se tudo der certo o browser vai abrir com nosso servidor rodando nossa aplicação na página raiz. Basta você modificar seus arquivos html, salvar e ver as mudanças direto no browser ;D

## Update

Para acessar nossa aplicação e ver o que fizemos rodar, acessamos http://localhost:3000, para acessar opções do browser-sync podemos acessar substituindo a porta 3000 pela porta 3001, veja:

![](https://cdn-images-1.medium.com/max/800/1*xq3lWfaoYP174_4a7siUDQ.png "Center"){: .center-image}

É legal ter em mente que sempre podemos explorar a ferramenta atrás do que ela pode nos proporcionar! Essa acaba se tornando a graça de tudo isso ;D

Espero que tenham curtido, acho o browsersync bem útil, o gulp então nem se fala, provavelmente vou abordar ele mais vezes aqui no blog então fiquem ligados! Abraços e até o próximo post.