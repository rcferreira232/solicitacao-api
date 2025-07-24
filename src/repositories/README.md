# Repositories

Esta pasta contém as implementações dos repositórios utilizados na aplicação. Os repositórios são responsáveis por acessar e manipular os dados persistidos, seja em banco de dados, arquivos ou outros meios de armazenamento.

## Propósito

Os repositórios servem como uma camada de abstração entre a lógica de negócio e a persistência de dados. São responsáveis por:

- Isolar a lógica de acesso a dados
- Facilitar a troca de implementações de persistência
- Promover a reutilização de código
- Manter a testabilidade da aplicação

## Repositórios Disponíveis

### SolicitacaoRepository

Responsável por gerenciar as operações de persistência da entidade `Solicitacao`.

**Responsabilidades:**

- Criar uma nova solicitação

**Dependências:**

- `ISolicitacaoRepository`: Interface que define o contrato para operações de persistência relacionadas à entidade `Solicitacao`
- `Solicitacao`: Entidade do domínio
