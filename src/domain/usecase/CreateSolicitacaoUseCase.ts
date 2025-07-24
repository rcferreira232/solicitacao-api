import { ISolicitacaoRepository } from "@/contracts/ISolicitacaoRepository";
import { Solicitacao } from "@/domain/entities/Solicitacao";

export class CreateSolicitacaoUseCase {
  constructor(private repository: ISolicitacaoRepository) {}

  async execute(
    data: Omit<Solicitacao, "id" | "createdAt">
  ): Promise<Solicitacao> {
    const solicitacao = new Solicitacao(
      0,
      data.cliente,
      data.produto,
      data.quantidade,
      new Date()
    );

    return this.repository.insert(solicitacao);
  }
}
