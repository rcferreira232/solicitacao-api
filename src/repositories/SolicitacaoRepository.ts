import { ISolicitacaoRepository } from "@/contracts/ISolicitacaoRepository";
import { Solicitacao } from "@/domain/entities/Solicitacao";
import prisma from "@/infra/prisma/prisma";

export class SolicitacaoRepository implements ISolicitacaoRepository {
  async findById(id: number): Promise<Solicitacao | null> {
    const solicitacao = await prisma.solicitacao.findUnique({
      where: { id },
    });
    return solicitacao;
  }

  async findAll(): Promise<Solicitacao[] | null> {
    const solicitacoes = await prisma.solicitacao.findMany();
    return solicitacoes;
  }

  async insert(obj: Solicitacao): Promise<Solicitacao> {
    const { id, createdAt, ...data } = obj;
    const solicitacao = await prisma.solicitacao.create({
      data: {
        ...data,
      },
    });
    return solicitacao;
  }

  async update(id: number, obj: Solicitacao): Promise<Solicitacao> {
    const solicitacao = await prisma.solicitacao.update({
      where: { id },
      data: {
        ...obj,
      },
    });
    return solicitacao;
  }

  async delete(id: number): Promise<boolean> {
    const result = await prisma.solicitacao.delete({
      where: { id },
    });
    return result !== null;
  }
}
