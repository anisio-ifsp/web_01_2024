import { Categoria } from "../model/entity/Categoria";
import { CategoriaRepository } from "../repository/CategoriaRepository";

export class CategoriaService{
    categoriaRepository: CategoriaRepository = CategoriaRepository.getInstance();

    async cadastrarCategoria(categoriaData: any): Promise<Categoria> {
        const { nome } = categoriaData;
        const categoria = await this.categoriaRepository.createCategoria(nome);
        return categoria;
    }
}