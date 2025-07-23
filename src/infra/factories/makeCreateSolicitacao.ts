import { CreateSolicitacaoUseCase } from "@/domain/usecase/CreateSolicitacaoUseCase";
import { SolicitacaoRepository } from "@/repositories/SolicitacaoRepository";

export function makeCreateSolicitacao() {
  const repository = new SolicitacaoRepository();
  const useCase = new CreateSolicitacaoUseCase(repository);
  return useCase;
}
