---
title: Protocolo https no ghpages (Sem CloudFlare)
layout: post
date: '2016-06-10'
description: Como habilitar o protocolo https no seu github pages sem utilizar o CloudFlare.
tags:
- github
- gh pages
- https
comments: true
share: true
---

Fala pessoal beleza? Espero que sim! No tutorial passado eu expliquei como poderíamos fazer para adicionar uma camada de criptografia no trafego com o CloudFlare, hoje vou explicar como fazermos a mesma coisa só que pelo método nativo do github pages.

A aplicação deste método é necessária para sites criados no GitHub Pages após 15 de Junho de 2016 e usando um domínio github.io.

Muito bom né? Mas encontrei um probleminha nesta parte, domínios personalizados não são suportados nessa feature do ghpages então isso só vai funcionar com a galera que usa o domínio do ghpages mesmo (.github.io) beleza?

No GitHub, navegue até a página principal do repositório.

![](https://cdn-images-1.medium.com/max/800/0*1rnnfxXAekwyHDpA.png "Center"){: .center-image}

![](https://cdn-images-1.medium.com/max/800/0*0h32kCkdeX3SjLvX.png "Center"){: .center-image}

Em “Páginas GitHub”, selecione Enforce HTTPS.

Prontinho, sua página agora está segura! Muito fácil não? Pelo que andei lendo eles ja tinham essa feature antes, porém agora melhoraram ela e decidiram divulgar mais. Achei sensacional, uma pena que não dão suporte para domínios próprios, mas enquanto isso não muda podemos usar o CloudFlare para deixarmos nossas urls próprias seguras, veja como [neste tutorial](https://medium.com/@juliocarneiro/protocolo-https-no-github-pages-3256ada7cf50).

Abraços e até o próximo post.