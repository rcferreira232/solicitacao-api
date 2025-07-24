import { FastifyRequest, FastifyReply } from "fastify";

export interface IController {
  create(req: FastifyRequest, resp: FastifyReply): Promise<void>;
}
