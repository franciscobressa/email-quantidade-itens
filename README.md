# email-quantidade-itens

Faz uma requisição da API de search da VTEX e, utilizando conceitos de processamento em fila (utilizando [Bull](https://optimalbits.github.io/bull/)), envia um email com Mailtrap com a quantidade de produtos disponíveis na loja

## 1º PASSO
Criar um arquivo .ENV com as informações do Mailtrap e do Redis

MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=
MAIL_PASSWORD=

REDIS_HOST=127.0.0.1
REDIS_PORT=

## 2º PASSO
Rodar o container do Redis no Docker
#### `docker run --name redis -p PORT:PORT -d -t redis:alpine`

## 3º PASSO
Rodar projeto
#### `npm run dev`
