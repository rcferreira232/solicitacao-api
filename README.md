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

```bash
# 1. Clone o repositório
git clone https://github.com/rcferreira/solicitacao-api.git
cd solicitacao-api

# 2. Instale as dependências
npm install

# 3. Inicie o servidor
npm run start
```

---

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
