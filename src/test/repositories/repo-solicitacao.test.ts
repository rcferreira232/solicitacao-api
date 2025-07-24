import { Solicitacao } from "../../domain/entities/Solicitacao";
import { ISolicitacaoRepository } from "../../contracts/ISolicitacaoRepository";

export class TestSolicitacaoRepository implements ISolicitacaoRepository {
  private solicitacoes: Solicitacao[] = [];

  async findById(id: number): Promise<Solicitacao | null> {
    const solicitacao = this.solicitacoes.find((s) => s.id === id);
    return solicitacao || null;
  }

  async findAll(): Promise<Solicitacao[] | null> {
    return this.solicitacoes;
  }

  async insert(obj: Solicitacao): Promise<Solicitacao> {
    const newSolicitacao: Solicitacao = {
      ...obj,
      id: this.solicitacoes.length + 1,
      createdAt: new Date(),
    };
    this.solicitacoes.push(newSolicitacao);
    return newSolicitacao;
  }

  async update(id: number, obj: Solicitacao): Promise<Solicitacao> {
    const index = this.solicitacoes.findIndex((s) => s.id === id);
    if (index === -1) {
      throw new Error(`Solicitação com ID ${id} não encontrada`);
    }
    this.solicitacoes[index] = { ...this.solicitacoes[index], ...obj, id };
    return this.solicitacoes[index];
  }

  async delete(id: number): Promise<boolean> {
    const index = this.solicitacoes.findIndex((s) => s.id === id);
    if (index === -1) {
      return false;
    }
    this.solicitacoes.splice(index, 1);
    return true;
  }
}

// Testes do Repositório
describe("TestSolicitacaoRepository", () => {
  let repository: TestSolicitacaoRepository;
  let mockSolicitacao: Solicitacao;

  beforeEach(() => {
    repository = new TestSolicitacaoRepository();
    mockSolicitacao = {
      id: 1,
      cliente: "João Silva",
      produto: "Notebook Dell",
      quantidade: 2,
      createdAt: new Date(),
    };
  });

  describe("insert", () => {
    it("deve inserir uma solicitação com sucesso", async () => {
      const result = await repository.insert(mockSolicitacao);

      expect(result).toBeDefined();
      expect(result.cliente).toBe(mockSolicitacao.cliente);
      expect(result.produto).toBe(mockSolicitacao.produto);
      expect(result.quantidade).toBe(mockSolicitacao.quantidade);
      expect(result.id).toBe(1);
      expect(result.createdAt).toBeInstanceOf(Date);
    });

    it("deve gerar IDs sequenciais para múltiplas inserções", async () => {
      const solicitacao1 = await repository.insert(mockSolicitacao);
      const solicitacao2 = await repository.insert({
        ...mockSolicitacao,
        cliente: "Maria Santos",
      });

      expect(solicitacao1.id).toBe(1);
      expect(solicitacao2.id).toBe(2);
    });
  });

  describe("findById", () => {
    it("deve encontrar uma solicitação por ID", async () => {
      await repository.insert(mockSolicitacao);

      const result = await repository.findById(1);

      expect(result).toBeDefined();
      expect(result?.cliente).toBe(mockSolicitacao.cliente);
    });

    it("deve retornar null para ID inexistente", async () => {
      const result = await repository.findById(999);

      expect(result).toBeNull();
    });
  });

  describe("findAll", () => {
    it("deve retornar array vazio quando não há solicitações", async () => {
      const result = await repository.findAll();

      expect(result).toEqual([]);
    });

    it("deve retornar todas as solicitações", async () => {
      await repository.insert(mockSolicitacao);
      await repository.insert({
        ...mockSolicitacao,
        cliente: "Maria Santos",
      });

      const result = await repository.findAll();

      expect(result).toHaveLength(2);
      expect(result?.[0].cliente).toBe("João Silva");
      expect(result?.[1].cliente).toBe("Maria Santos");
    });
  });

  describe("update", () => {
    it("deve atualizar uma solicitação existente", async () => {
      await repository.insert(mockSolicitacao);

      const updatedData = {
        ...mockSolicitacao,
        cliente: "João Silva Atualizado",
        quantidade: 5,
      };

      const result = await repository.update(1, updatedData);

      expect(result.cliente).toBe("João Silva Atualizado");
      expect(result.quantidade).toBe(5);
      expect(result.id).toBe(1);
    });

    it("deve lançar erro ao tentar atualizar solicitação inexistente", async () => {
      await expect(repository.update(999, mockSolicitacao)).rejects.toThrow(
        "Solicitação com ID 999 não encontrada"
      );
    });
  });

  describe("delete", () => {
    it("deve deletar uma solicitação existente", async () => {
      await repository.insert(mockSolicitacao);

      const result = await repository.delete(1);

      expect(result).toBe(true);

      const findResult = await repository.findById(1);
      expect(findResult).toBeNull();
    });

    it("deve retornar false ao tentar deletar solicitação inexistente", async () => {
      const result = await repository.delete(999);

      expect(result).toBe(false);
    });
  });
});
