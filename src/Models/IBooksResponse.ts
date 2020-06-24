import Book from './book';


export default interface IBooksResponse {
    kind: string,
    totalItems: number
    items: Book[]
}
