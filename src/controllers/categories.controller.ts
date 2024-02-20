import { Request, Response } from 'express';

import { CategorieService } from '../services/categories.services';

export class CategoriesController {
  async create(_: Request, res: Response) {
    const service = new CategorieService();
    const result = await service.create();

    return res.status(201).json(result);
  }
}
