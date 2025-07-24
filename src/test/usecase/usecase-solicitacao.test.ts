import { CreateSolicitacaoUseCase } from "../../domain/usecase/CreateSolicitacaoUseCase";
import { TestSolicitacaoRepository } from "../repositories/repo-solicitacao.test";
import { Solicitacao } from "../../domain/entities/Solicitacao";

describe("CreateSolicitacaoUseCase", () => {
  let useCase: CreateSolicitacaoUseCase;
  let mockRepository: TestSolicitacaoRepository;

  // Antes de cada teste, criamos uma nova instância do mock e do use case
  // para garantir que os testes sejam independentes uns dos outros.
  beforeEach(() => {
    mockRepository = new TestSolicitacaoRepository();
    useCase = new CreateSolicitacaoUseCase(mockRepository);
  });

  describe("execute", () => {
    it("deve criar e retornar uma solicitação com sucesso", async () => {
      // Arrange: Preparamos os dados de entrada
      const inputData = {
        cliente: "João da Silva",
        produto: "Notebook Gamer",
        quantidade: 1,
      };

      // Act: Executamos o caso de uso
      const result = await useCase.execute(inputData);

      // Assert: Verificamos se o resultado está correto
      expect(result).toBeDefined();
      expect(result.id).toBe(1); // O mock gera ID sequencial começando em 1
      expect(result.cliente).toBe(inputData.cliente);
      expect(result.produto).toBe(inputData.produto);
      expect(result.quantidade).toBe(inputData.quantidade);
      expect(result.createdAt).toBeInstanceOf(Date);
    });

    it('deve chamar o método "insert" do repositório com os dados corretos', async () => {
      // Arrange: Criamos um "espião" (spy) no método 'insert' do nosso mock
      const insertSpy = jest.spyOn(mockRepository, "insert");

      const inputData = {
        cliente: "Maria Oliveira",
        produto: "Monitor 4K",
        quantidade: 2,
      };

      // Act: Executamos o caso de uso
      await useCase.execute(inputData);

      // Assert: Verificamos se o espião foi chamado
      expect(insertSpy).toHaveBeenCalledTimes(1);
      // Verificamos se foi chamado com um objeto que contém os dados corretos
      expect(insertSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          cliente: inputData.cliente,
          produto: inputData.produto,
          quantidade: inputData.quantidade,
          id: 0, // O use case cria a entidade com id 0
          createdAt: expect.any(Date), // A data é gerada no momento da criação
        })
      );
    });

    it("deve persistir os dados no repositório mockado", async () => {
      // Arrange
      const inputData = {
        cliente: "Carlos Pereira",
        produto: "Teclado Mecânico",
        quantidade: 1,
      };

      // Act
      const createdSolicitacao = await useCase.execute(inputData);
      const persistedSolicitacao = await mockRepository.findById(
        createdSolicitacao.id
      );

      // Assert
      expect(persistedSolicitacao).not.toBeNull();
      expect(persistedSolicitacao?.id).toBe(createdSolicitacao.id);
      expect(persistedSolicitacao?.cliente).toBe(inputData.cliente);
    });
  });
});
