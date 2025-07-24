import { FastifyReply, FastifyRequest } from "fastify";
import { IUsecase } from "@/contracts/IUsecase";
import { Solicitacao } from "generated/prisma";

export class SolicitacaoController {
  uc: IUsecase<Omit<Solicitacao, "id" | "createdAt">, Solicitacao>;

  constructor(
    uc: IUsecase<Omit<Solicitacao, "id" | "createdAt">, Solicitacao>
  ) {
    this.uc = uc;
  }

  async create(request: FastifyRequest, reply: FastifyReply) {
    const { cliente, produto, quantidade } = request.body as {
      cliente: string;
      produto: string;
      quantidade: number;
    };

    const result = await this.uc.execute({
      cliente,
      produto,
      quantidade,
    });

    return reply.code(201).send(result);
  }
}
