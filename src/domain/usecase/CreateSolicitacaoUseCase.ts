import { ISolicitacaoRepository } from "@/contracts/ISolicitacaoRepository";
import { Solicitacao } from "@/domain/entities/Solicitacao";
import { IUsecase } from "@/contracts/IUsecase";

export class CreateSolicitacaoUseCase
  implements IUsecase<Omit<Solicitacao, "id" | "createdAt">, Solicitacao>
{
  repository: ISolicitacaoRepository;

  constructor(repository: ISolicitacaoRepository) {
    this.repository = repository;
  }

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
