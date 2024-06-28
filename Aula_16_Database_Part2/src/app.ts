import { ProductRepository } from "./repository/ProductRepository";

const repository: ProductRepository = new ProductRepository();

repository.createTable();
repository.insertProduct("bolinho", 15.30);