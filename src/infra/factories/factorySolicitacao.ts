import { SolicitacaoController } from "@/controller/SolicitacaoController";
import { CreateSolicitacaoUseCase } from "@/domain/usecase/CreateSolicitacaoUseCase";
import { SolicitacaoRepository } from "@/repositories/SolicitacaoRepository";

export function factorySolicitacao() {
  const repository = new SolicitacaoRepository();
  const useCase = new CreateSolicitacaoUseCase(repository);
  const controller = new SolicitacaoController(useCase);
  return controller;
}
