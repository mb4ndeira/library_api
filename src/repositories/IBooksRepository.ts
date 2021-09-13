import { Book } from '../models/Book'

interface IAddBookDTO {
    title:string;
    publisher:string;
    image:string;
    authors:string[];
}

interface IGetBooksWithTitle {
    title:string;
}

interface IBooksRepository {
    add({ title, publisher, image, authors }: IAddBookDTO): void
    getAllWithTitle({ title }: IGetBooksWithTitle): Book[]
}

export { IBooksRepository, IAddBookDTO, IGetBooksWithTitle }
