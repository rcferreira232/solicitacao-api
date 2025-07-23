# 📦 Testes Automatizados

Repositório desenvolvido para a disciplina de **Testes Automatizados**, com foco **puramente didático** na prática de **testes de software** utilizando ferramentas modernas do ecossistema JavaScript/TypeScript.

---

## 🚀 Tecnologias Utilizadas

- [Fastify](https://www.fastify.io/) — Framework web leve e rápido para Node.js.
- [TypeScript](https://www.typescriptlang.org/) — Superset do JavaScript com tipagem estática.
- [Jest](https://jestjs.io/) — Framework de testes moderno, rápido e confiável.
- [ts-jest](https://kulshekhar.github.io/ts-jest/) — Integração entre TypeScript e Jest.
- [Prisma](https://www.prisma.io/) — ORM moderno para Node.js e TypeScript.

---

## 🚀 Tecnologias Futuras

- [Zod](https://zod.dev/) — Validação de esquemas TypeScript-friendly.

---

## 📦 Instalação

- 1. Clone o repositório

```bash
git clone https://github.com/rcferreira/solicitacao-api.git
cd solicitacao-api
```

- 2. Instale as dependências

```bash
npm install
```

- 3. Copie o arquivo de variáveis de ambiente

```bash
cp .env.example .env
```

- 4. Edite o arquivo .env com suas configurações

```bash
PORT=4001 # Porta do servidor
```

- 5. Inicie o servidor

```bash
npm run start
```

- 6. Suba o contêiner do banco de dados

```bash
docker compose up
```

- 7. Se necessário, rode os seguintes comandos do prisma

```bash
npm run db:generate # Gera o cliente Prisma
npm run db:push # Cria o banco de dados
```

## 📁 Estrutura do Projeto

```bash
src/
├── contracts/        # Interfaces e contratos de repositórios
├── controller/       # Camada responsável por lidar com requisições
├── entities/         # Entidades do domínio
├── enums/            # Enumerações utilizadas no sistema
├── infra/            # Implementações de infraestrutura
│   ├── factories/    # Fábricas de casos de uso/controladores
│   ├── prisma/       # Cliente Prisma e configuração de banco de dados
│   └── routes/       # Rotas HTTP Fastify
├── repositories/     # Implementações dos repositórios (ex: Prisma)
├── usecase/          # Casos de uso (regras de negócio)
└── server.ts         # Ponto de entrada da aplicação
```

---

## Status do Projeto

- 🛠️ Projeto: WIP
- 📚 Projeto com fins exclusivamente didáticos
- 🧪 Foco em boas práticas
- 🧱 Estrutura baseada em Clean Architecture / DDD
