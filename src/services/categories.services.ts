import { Category } from '../entities/category.entity';

export class CategorieService {
  async create(): Promise<Category> {
    const category = new Category({
      title: 'example category service',
      color: '#ff7809',
    });
    return category;
  }
}
