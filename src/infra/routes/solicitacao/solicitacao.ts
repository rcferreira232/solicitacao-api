import { FastifyInstance } from "fastify";
import { SolicitacaoController } from "@/controller/SolicitacaoController";

export async function solicitacaoRoutes(app: FastifyInstance) {
  const controller = new SolicitacaoController();

  app.get("/", async () => {
    return { message: "Solicitacao API está em funcionamento" };
  });

  app.post("/", (request, reply) => {
    return controller.create(request, reply);
  });
}
