# Deque - Estrutura de Dados

Este projeto implementa uma estrutura de dados do tipo Deque (Double-Ended Queue) em TypeScript, com suporte a testes utilizando Jest.

## Pré-requisitos

Certifique-se de ter instalado:

- Node.js (versão 18 ou superior)
- npm (geralmente incluído com o Node.js)

## Instalação

Instale as dependências:

   ```bash
   npm install
   ```

## Scripts Disponíveis

### Rodar o projeto em desenvolvimento

Para rodar o projeto em modo de desenvolvimento com `nodemon`:

```bash
npm run dev
```

### Compilar o projeto

Para compilar o código TypeScript para JavaScript:

```bash
npm run build
```

Os arquivos compilados serão gerados na pasta `dist`.

### Executar o projeto compilado

Após compilar o projeto, você pode executá-lo com:

```bash
npm start
```

### Rodar os testes

Para rodar os testes com Jest:

```bash
npm test
```

Os testes serão executados com base na configuração do Jest definida no arquivo `jest.config.js`.

## Estrutura do Projeto

```plaintext
deque/
├── src/
│   ├── Deque.ts        # Implementação da classe Deque
│   ├── index.ts        # Arquivo principal para execução
├── tests/
│   ├── Deque.test.ts   # Testes unitários para a classe Deque
├── dist/               # Arquivos compilados (gerado após `npm run build`)
├── package.json        # Configuração do projeto e dependências
├── jest.config.js      # Configuração do Jest
├── tsconfig.json       # Configuração do TypeScript
└── README.md           # Documentação do projeto
```

## Funcionalidades

- Adicionar elementos no início e no final do deque.
- Remover elementos do início e do final do deque.
- Verificar o primeiro e o último elemento do deque.
- Verificar se o deque está cheio ou vazio.
- Obter o tamanho e a capacidade do deque.