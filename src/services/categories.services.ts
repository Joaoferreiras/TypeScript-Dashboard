import { CategoriesRepository } from '../database/repositories/categories.repository';
import { CreatedCategoryDTO } from '../dtos/categories.dto';
import { Category } from '../entities/category.entity';

export class CategorieService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async create({ title, color }: CreatedCategoryDTO): Promise<Category> {
    const category = new Category({
      title,
      color,
    });

    const createdCategory = await this.categoriesRepository.create(category);

    return createdCategory;
  }
}
