# Chat em Tempo Real com React e Node.js usando Socket.io

Este é um exemplo de uma aplicação de chat em tempo real construída com React para o frontend, Node.js para o backend e Socket.io para a comunicação em tempo real entre o cliente e o servidor.

## Funcionalidades

- Envio de mensagens em tempo real entre os usuários.
- Exibição de mensagens recebidas de outros usuários em tempo real.
- Indicação de quem enviou cada mensagem.

## Pré-requisitos

- Node.js e npm instalados no seu sistema.
- Conhecimento básico de React e Node.js.

## Instalação e Execução

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

2. Instale as dependências do servidor e do cliente:

```bash
cd server
npm install

cd ../client
npm install
```

3. Inicie o servidor:

```bash
cd server
npm start
```

4. Inicie o cliente em um novo terminal:

```bash
cd client
npm start
```

5. Abra o navegador e visite [http://localhost:3000](http://localhost:3000) para ver a aplicação em ação.

## Tecnologias Utilizadas

- React
- Node.js
- Socket.io

## Estrutura do Projeto

```
- client
  - src
    - components
      - Chat.js
    - App.js
    - index.js
  - ...
- server
  - src
    - index.js
  - ...
```

## Como Funciona

O servidor Node.js usa o Socket.io para lidar com a comunicação em tempo real entre o cliente e o servidor. O cliente React se conecta ao servidor através do Socket.io e pode enviar e receber mensagens em tempo real.

## Contribuindo

Fique à vontade para contribuir com melhorias para este projeto. Por favor, siga as boas práticas de contribuição e os padrões de código.

1. Crie um fork do repositório
2. Crie uma nova branch (`git checkout -b feature/nova-feature`)
3. Faça o commit das suas alterações (`git commit -m 'Adicionando nova feature'`)
4. Faça o push para o repositório (`git push origin feature/nova-feature`)
5. Abra um Pull Request



---

