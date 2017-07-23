---
title: Como camuflar seu ip like a ninja
layout: post
date:   2016-08-01
description: Pra não ter dúvidas na hora H ;D
tags: [camuflar ip, hacking, segurança da informação]
comments: true
share: true
---

Pessoal boa tarde, primeiramente mil desculpas pelo sumiço, as coisas viraram muito de ponta cabeça de uma hora pra outra, mudei de emprego não estou mais na Gauge, agora sou front na Itelios do Brasil, to orgulhoso pra kct hahaha meus esforços não estão sendo em vão!

Enfim, hoje eu vou ensinar pra vocês como vocês podem camuflar o ip na web de uma forma realmente eficaz e sem chances de dar errado!

Temos algumas formas de camuflar ip, alguns programas que nos auxiliam a fazer isso de forma fácil. A um tempo atrás eu estava usando o sistema operacional WHONIX para poder fazer esse tunelamento pra mim, ele é realmente eficaz e eu não precisei me preocupar muito com detalhes, porém eu testei algumas outras opções e tiveram duas que eu realmente gostei muito, uma é o PROXYCHAINS, e a outra o JONDO:

https://anonymous-proxy-servers.net/en/jondo.html 
http://proxychains.sourceforge.net

As duas tem seus prós e contras obviamente, achei o proxychains com mais liberdade para trabalhar em diversas áreas, e o jondo mais eficaz no que se propõe a fazer porém um pouco mais limitado.

Vou ensinar as duas formas ok? Deste modo vocês podem fazer testes com as duas e escolher qual é a melhor para o seu propósito, vamos lá:

## ProxyChains

O proxychains é um programa que faz o roteamento de suas requisições através de proxys que você escolhe por uma lista que você mesmo faz, porém vamos fazer um pouco diferente usando o tor router para direcionar as requisições diretamente para porta do tor, fazendo com que tudo passe pelo router do tor antes de ir para web.

Eu não uso o kali linux, porém baixei todos os repositórios dele para o ubuntu com o “KATOOLIN” ( https://github.com/LionSec/katoolin ), a partir dai instalei o proxychains na minha maquina, caso você use o kali os repositórios que vamos usar já vem na distro por default então é só instalar. Vamos instalar o tor e o proxychains para que eles trabalhem juntos:

```bash
sudo apt-get install tor  
sudo apt-get install proxychains
```

Feito a instalação, a configuração é muito fácil, vamos precisar abrir o arquivo de configurações do proxychains, que é o “/etc/proxychains.conf”. Vamos abrir ele com o nano:

```bash
sudo nano /etc/proxychains.conf
```

Com o arquivo aberto vamos comentar a linha “strict_chain” e descomentar a linha “dynamic_chain”, e no final do arquivo vamos adicionar a seguinte linha:

```bash
socks5   127.0.0.1   9050
```

Vamos salvar o arquivo e podemos iniciar o services do Tor para depois podermos começar com o proxychains:

```bash
sudo service tor start
```

Agora para fazermos com que o tunelamento funcione com o proxychains é só adicionar o comando “proxychains” antes do programa que você quer utilizar, exemplo:

```bash
sudo proxychains firefox
```

Entre em algum site de consulta de ip e veja seu ip camuflado com sucesso utilizando o tor e o proxychains ;D

## JonDo

![](https://cdn-images-1.medium.com/max/800/1*ThtPBRe1tD7aqjiFMEWvlQ.png "Center"){: .center-image}

Com o JonDo rodando, podemos agora inicializar o JonDoFox, que vai ser nosso navegador anonimo trabalhando junto ao JonDo, vamos inicializar e entrar em algum site de consulta de ip para nos localizarmos, veja:

![](https://cdn-images-1.medium.com/max/800/1*4cjyOlP2MnoNHbnyuEhsbA.png "Center"){: .center-image}

Por aí já da para vermos que estamos utilizando o JonDo corretamente, o site de status deles nos da essa resposta assim que entramos para fazer o teste.

![](https://cdn-images-1.medium.com/max/800/1*1qhJ-OTxjcv2ritD_DKjSg.png "Center"){: .center-image}

É bem legal o jeito que ele dá o status completo do seu anonimato, este site é próprio do JonDo para testar seu anonimato. Acho importante ser a primeira coisa que você deve fazer ao iniciar o serviço.

Espero que tenham curtido o post, qualquer dúvida só comentar ai em baixo, e essa semana será produtiva pra mim vou tentar escrever bastante por aqui! Abraços e até o próximo post.