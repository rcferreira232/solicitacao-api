export class Solicitacao {
  constructor(
    public id: number,
    public cliente: string,
    public produto: string,
    public quantidade: number,
    public createdAt: Date
  ) {}
}
