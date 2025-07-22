import { Solicitacao } from "@/entities/Solicitacao";

export interface ISolicitacaoRepository {
  createSolicitacao(
    data: Omit<Solicitacao, "id" | "createdAt">
  ): Promise<Solicitacao>;
}
