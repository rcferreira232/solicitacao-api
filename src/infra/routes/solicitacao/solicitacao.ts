import { FastifyInstance } from "fastify";
import { factorySolicitacao } from "@/infra/factories/factorySolicitacao";

export async function solicitacaoRoutes(app: FastifyInstance) {
  const factory = factorySolicitacao();

  app.get("/", async () => {
    return { message: "Solicitacao API está em funcionamento" };
  });

  app.post("/", (request, reply) => {
    return factory.create(request, reply);
  });
}
