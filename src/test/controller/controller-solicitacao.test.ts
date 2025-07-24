import { SolicitacaoController } from '@/controller/SolicitacaoController';
import { CreateSolicitacaoUseCase } from '@/domain/usecase/CreateSolicitacaoUseCase';
import { TestSolicitacaoRepository } from '../repositories/repo-solicitacao.test';
import { FastifyRequest, FastifyReply } from 'fastify';

// Mock do Fastify Reply para simular o objeto de resposta do Fastify
const mockReply = {
  code: jest.fn().mockReturnThis(), // .mockReturnThis() permite encadear chamadas como reply.code(201).send()
  send: jest.fn().mockReturnThis(),
} as unknown as FastifyReply;

describe('SolicitacaoController', () => {
  let controller: SolicitacaoController;
  let useCase: CreateSolicitacaoUseCase;
  let repository: TestSolicitacaoRepository;

  // Roda antes de cada teste para garantir um ambiente limpo
  beforeEach(() => {
    // Instanciamos as dependências na ordem correta
    repository = new TestSolicitacaoRepository();
    useCase = new CreateSolicitacaoUseCase(repository);
    controller = new SolicitacaoController(useCase);

    // Limpa os mocks para que um teste não interfira no outro
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('deve criar uma solicitação e retornar status 201 com os dados corretos', async () => {
      // Arrange: Prepara os dados da requisição
      const requestBody = {
        cliente: 'João Silva',
        produto: 'Notebook Dell',
        quantidade: 2,
      };
      const mockRequest = { body: requestBody } as FastifyRequest;

      // Act: Executa o método do controller
      await controller.create(mockRequest, mockReply);

      // Assert: Verifica se a resposta foi a esperada
      expect(mockReply.code).toHaveBeenCalledWith(201);
      expect(mockReply.send).toHaveBeenCalledWith(
        expect.objectContaining({
          cliente: requestBody.cliente,
          produto: requestBody.produto,
          quantidade: requestBody.quantidade,
          id: expect.any(Number), // O ID deve ser um número
          createdAt: expect.any(Date), // A data deve ser uma instância de Date
        })
      );
    });

    it('deve chamar o UseCase com os dados extraídos do body da requisição', async () => {
      // Arrange: Prepara a requisição e espiona o método 'execute' do useCase
      const useCaseSpy = jest.spyOn(useCase, 'execute');
      const requestBody = {
        cliente: 'Maria Santos',
        produto: 'Mouse Gamer',
        quantidade: 1,
      };
      const mockRequest = { body: requestBody } as FastifyRequest;

      // Act: Executa o método
      await controller.create(mockRequest, mockReply);

      // Assert: Verifica se o espião foi chamado com os dados corretos
      expect(useCaseSpy).toHaveBeenCalledTimes(1);
      expect(useCaseSpy).toHaveBeenCalledWith(requestBody);
    });

    it('deve garantir que a integração Controller -> UseCase -> Repository funciona', async () => {
      // Arrange
      const requestBody = {
        cliente: 'Cliente de Integração',
        produto: 'Produto de Integração',
        quantidade: 10,
      };
      const mockRequest = { body: requestBody } as FastifyRequest;

      // Act: Chama o controller, que acionará o use case e o repositório
      await controller.create(mockRequest, mockReply);

      // Assert: Verifica se o dado foi realmente "salvo" no mock do repositório
      const savedData = await repository.findById(1); // O primeiro ID gerado pelo mock é 1
      
      expect(savedData).toBeDefined();
      expect(savedData).not.toBeNull();
      expect(savedData?.cliente).toBe(requestBody.cliente);
    });
  });
});