# Contracts

Esta pasta contém as interfaces e contratos que definem as abstrações do sistema, seguindo os princípios da Arquitetura Limpa (Clean Architecture).

## Propósito

Os contratos servem como uma camada de abstração que:

- Define as assinaturas dos métodos que devem ser implementados
- Promove baixo acoplamento entre camadas
- Facilita a testabilidade através de mocks e stubs
- Permite a inversão de dependências

## Interfaces Disponíveis

### ISolicitacaoRepository

Interface que define o contrato para operações de persistência relacionadas à entidade `Solicitacao`.

**Métodos:**

- `createSolicitacao(solicitacao: Solicitacao): Promise<Solicitacao>` - Cria uma nova solicitação

**Implementação:**
Esta interface é implementada pela classe `SolicitacaoRepository` na pasta `repositories/`.

## Padrões Utilizados

- **Repository Pattern**: Abstrai o acesso aos dados
- **Dependency Inversion Principle**: As camadas superiores dependem de abstrações, não de implementações concretas
- **Interface Segregation**: Interfaces específicas e focadas em responsabilidades únicas

## Como Usar

```typescript
import { ISolicitacaoRepository } from "@/contracts/ISolicitacaoRepository";
import { Solicitacao } from "@/domain/entities/Solicitacao";

class SomeUseCase {
  constructor(private repository: ISolicitacaoRepository) {}

  async execute(data: Solicitacao): Promise<Solicitacao> {
    const solicitacao = new Solicitacao(
      data.id,
      data.cliente,
      data.produto,
      data.quantidade
    );
    return await this.repository.createSolicitacao(solicitacao);
  }
}
```

## Benefícios

1. **Testabilidade**: Facilita a criação de mocks para testes unitários
2. **Flexibilidade**: Permite trocar implementações sem afetar o código cliente
3. **Manutenibilidade**: Mudanças na implementação não afetam quem usa a interface
4. **Clareza**: Define claramente quais operações estão disponíveis
