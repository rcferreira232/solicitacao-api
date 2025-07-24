export interface IRepository<T> {
  findById(id: number): Promise<T | null>;
  findAll(): Promise<T[] | null>;
  insert(obj: T): Promise<T>;
  update(id: number, obj: T): Promise<T>;
  delete(id: number): Promise<boolean>;
}
