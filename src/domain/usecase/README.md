# Use Cases

Esta pasta contém os casos de uso da aplicação, representando as regras de negócio e operações específicas do domínio, seguindo os princípios da Arquitetura Limpa (Clean Architecture).

## Propósito

Os casos de uso (Use Cases) são responsáveis por:

- Orquestrar as operações de negócio
- Implementar as regras específicas da aplicação
- Coordenar entre entidades e repositórios
- Manter independência de frameworks e tecnologias externas
- Encapsular a lógica de negócio de forma testável

## Casos de Uso Disponíveis

### CreateSolicitacaoUseCase

Responsável por criar uma nova solicitação no sistema.

**Responsabilidades:**

- Validar os dados de entrada
- Criar uma instância da entidade `Solicitacao`
- Persistir a solicitação através do repositório
- Retornar a solicitação criada

**Dependências:**

- `ISolicitacaoRepository`: Interface para persistência de dados
- `Solicitacao`: Entidade do domínio

## Arquitetura

Os casos de uso seguem o padrão:

```
Controller → UseCase → Repository → Database
```

### Princípios Aplicados

1. **Single Responsibility**: Cada caso de uso tem uma responsabilidade específica
2. **Dependency Inversion**: Depende de abstrações (interfaces), não de implementações
3. **Clean Architecture**: Isolado de detalhes de infraestrutura
4. **Testabilidade**: Facilmente testável através de mocks

## Benefícios

1. **Isolamento**: Lógica de negócio isolada de detalhes técnicos
2. **Testabilidade**: Fácil de testar unitariamente
3. **Reutilização**: Pode ser usado por diferentes controllers/interfaces
4. **Manutenibilidade**: Mudanças nas regras de negócio ficam centralizadas
5. **Clareza**: Cada operação de negócio fica explícita e bem definida

## Testes

Os casos de uso devem ser testados unitariamente, mockando suas dependências:

```typescript
describe("CreateSolicitacaoUseCase", () => {
  it("should create a solicitacao successfully", async () => {
    const mockRepository = {
      createSolicitacao: jest.fn().mockResolvedValue(expectedSolicitacao),
    };

    const useCase = new CreateSolicitacaoUseCase(mockRepository);
    const result = await useCase.execute(inputData);

    expect(result).toEqual(expectedSolicitacao);
    expect(mockRepository.createSolicitacao).toHaveBeenCalledWith(inputData);
  });
});
```
