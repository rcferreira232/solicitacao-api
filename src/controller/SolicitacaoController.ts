import { FastifyReply, FastifyRequest } from "fastify";
import { makeCreateSolicitacao } from "@/infra/factories/makeCreateSolicitacao";

export class SolicitacaoController {
  async create(request: FastifyRequest, reply: FastifyReply) {
    const { cliente, produto, quantidade } = request.body as {
      cliente: string;
      produto: string;
      quantidade: number;
    };

    const useCase = makeCreateSolicitacao();
    const result = await useCase.execute({
      cliente,
      produto,
      quantidade,
    });

    return reply.code(201).send(result);
  }
}
