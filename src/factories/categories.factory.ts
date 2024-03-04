import { CategoriesRepository } from '../database/repositories/categories.repository';
import { CategoryModel } from '../database/schemas/category.schema';
import { CategorieService } from '../services/categories.services';

export class CategoryFactory {
  private static categoriesService: CategorieService;

  static getServiceInstance() {
    if (this.categoriesService) {
      return this.categoriesService;
    }
    const repository = new CategoriesRepository(CategoryModel);
    const service = new CategorieService(repository);

    this.categoriesService = service;

    return service;
  }
}
