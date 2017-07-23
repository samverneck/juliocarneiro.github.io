---
title: Protocolo https no Github Pages
layout: post
date: '2016-06-03'
description: Passo a passo de como inserir protocolo https no ghpages.
tags:
- github
- gh pages
- https
- cloudflare
comments: true
share: true
---

O que é o protocolo https segundo a Wikipedia:

“HTTPS (Hyper Text Transfer Protocol Secure — protocolo de transferência de hipertexto seguro) é uma implementação do protocolo HTTP sobre uma camada adicional de segurança que utiliza o protocoloSSL/TLS. Essa camada adicional permite que os dados sejam transmitidos por meio de uma conexão criptografada e que se verifique a autenticidade do servidor e do cliente por meio de certificados digitais. A porta TCPusada por norma para o protocolo HTTPS é a 443.

O protocolo HTTPS é utilizado, em regra, quando se deseja evitar que a informação transmitida entre o cliente e o servidor seja visualizada por terceiros, como por exemplo no caso de compras online. A existência na barra de endereços de um cadeado (que pode ficar do lado esquerdo ou direito, dependendo do navegador utilizado) demonstra a certificação de página segura (SSL). A existência desse certificado indica o uso do protocolo HTTPS e que a comunicação entre o browser e o servidor se dará de forma segura. Para verificar a identidade do servidor é necessário abrir esse certificado com um duplo clique no cadeado para exibição do certificado.”

A algum tempo atrás para você emitir um certificado e gerar o protocolo https você tinha que contratar isso como serviço de alguma empresa X. Hoje em dia isso se tornou mais fácil de ser feito, e pode ser feito gratuitamente então houve um aumento gigantesco de sites que utilizam o protocolo, isso é ÓTIMO.

Temos de ter em mente primeiro que, crackers acham brechas em sistemas por pura diversão, ou seja, ele vai te prejudicar por que está sem nada pra fazer, seja por diversão ou para vender seus dados na deepweb ou em qualquer lugar. Então não podemos deixar essas brechas em aberto para o atacante se aproveitar, temos de dificultar o máximo sempre para deixar nossos dados seguros e hoje começaremos com o https.

Beleza, agora já sabemos o que é, pra que serve, e já vimos também que hoje em dia ter o protocolo https na sua página se tornou algo obrigatório, podemos começar a implementa-lo! Tendo uma conta no github, você só precisa criar um repositório com o nome de:

myuser.github.io
Com seu repositório criado, a primeira coisa a se fazer é criar um arquivo CNAME para por na pasta raiz do seu site, vamos clonar o repositório para nossa maquina para poder trabalhar dentro dele:

```bash
git clone https://github.com/myuser/myuser.github.io.git
```

Repositório clonado, vamos criar o arquivo CNAME sem extensão nenhuma e em maiúsculo, contendo só o nome do seu domínio nele, por ex:

Meu domínio é o “juliocarneiro.com.br”, então só vai ter isso escrito no meu arquivo CNAME, ok? Após fazer o arquivo CNAME não esqueça de comitar. Até ai fácil?

```bash 
juliocarneiro.com.br
```

## CloudFlare

CloudFlare é um serviço que torna seu site ou blog mais seguro e mais rápido. Com apenas uma alteração de DNS, o seu site pode ser instantaneamente protegido contra várias ameaças online e aumentar a velocidade de carregamento de páginas, que ainda é um dos fatores mais importantes para manter um usuário interessado no seu conteúdo.

Vamos fazer um cadastro no CloudFlare.com para seguir com os passos do tutorial, feito isso vá em ADD SITE no menu acima e digite a url do seu site para o CloudFlare pegar alguns dados que ele precisa. Caso você ainda não tenha nada configurado neste domínio vamos ter que configura-lo do 0. Quanto a isso sem problemas não vamos precisar usar muitos recursos para obter o resultado que queremos.

Após feito o scam do site pelo CloudFlare você precisa ir até sua ferramenta de configuração de seus domínios (no meu caso a da GoDaddy) e mudar o DNS do domínio desejado para os DNS´s do CloudFlare ok? Os DNS’s a serem utilizados são estes:

gina.ns.cloudflare.com 
ray.ns.cloudflare.com

Feito a mudança você terá de esperar algumas horas até o DNS propagar, após propagado nós teremos o controle total do nosso domínio pelo CloudFlare, facilitando o controle da infra do nosso projeto e podendo fazer inúmeras coisas que o CloudFlare oferece, de uma fuçada no site que tem muita coisa legal. Ok, agora teremos que apontar o nosso domínio para nosso site no ghpages, como fazemos isso? Muito simples:

Navegue até a parte de DNS do menu do CloudFlare (utilizei um domínio que eu não uso para ilustrar), lá vamos adicionar uma propriedade CNAME nova, como a da imagem abaixo, veja:

![](https://cdn-images-1.medium.com/max/800/1*oC85NTQ4-payUBuZ7P1ueQ.png "Center"){: .center-image}

Agora vamos criar outro CNAME, desta vez um WWW e apontar para nosso site raiz para que o WWW funcione certinho no nosso site, com tudo configurado deve ficar assim:

![](https://cdn-images-1.medium.com/max/800/1*wMnb7N7ni_zTFGC_3DKceQ.png "Center"){: .center-image}

Feito isso temos nosso domínio ligado ao ghpages, pode acessar e dar uma olhada se funciona, comigo funcionou certinho seguindo estes passos, até aqui está fácil ainda certo? Vamos continuar e implementar o https, essa é a parte mais fácil creio eu, o CloudFlare facilita bastante, temos isso automaticamente em nosso site só precisamos configurar uma regra para poder forçar o https em todas nossas páginas, vá ao link PAGE RULES no menu acima e acesse o link “Create Page Rules”, abrirá um modal como este abaixo, você pode configurar esta regra igualzinha a que eu pus de exemplo, veja:

![](https://cdn-images-1.medium.com/max/800/1*y1e8VXzT_njGOtTmqfpoAQ.png "Center"){: .center-image}

Prontinho, agora seu site pode ser acessado pelo https e está seguro contra ataques MIM, DoS, DDoS e nenhum cracker fdp vai poder zuar seu site tão facilmente 8D

Galera mandem feedbacks, quero saber se vocês fizeram, se rolou pra vocês ou se vocês tem alguma dúvida na qual eu possa ajudar, comentem aqui, me mandem um e-mail, um tweet, whatever, comuniquem-se pra eu saber se estou no caminho certo beleza?

Abraços e até o próximo post.