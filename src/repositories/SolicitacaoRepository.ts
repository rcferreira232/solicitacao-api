import { ISolicitacaoRepository } from "@/contracts/ISolicitacaoRepository";
import { Solicitacao } from "@/entities/Solicitacao";
import prisma from "@/infra/prisma/prisma";

export class SolicitacaoRepository implements ISolicitacaoRepository {
  async createSolicitacao(data: Solicitacao): Promise<Solicitacao> {
    const { id, createdAt, ...solicitacaoData } = data;
    const solicitacao = await prisma.solicitacao.create({
      data: {
        ...solicitacaoData,
      },
    });
    return solicitacao;
  }
}
