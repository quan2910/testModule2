export interface Interface<T> {
    showAll();
    findByName(name: string);
    findById(id: number);
    add(t: T);
    editById(id: number, t: T);
    deleteById(id: number);
}