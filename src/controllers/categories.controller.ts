import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CreatedCategoryDTO } from '../dtos/categories.dto';
import { CategorieService } from '../services/categories.services';

export class CategoriesController {
  constructor(private categoriesService: CategorieService) {}

  async create(
    req: Request<unknown, unknown, CreatedCategoryDTO>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { title, color } = req.body;

      const result = await this.categoriesService.create({ title, color });

      return res.status(StatusCodes.CREATED).json(result);
    } catch (err) {
      next(err);
    }
  }

  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.categoriesService.index();

      return res.status(StatusCodes.OK).json(result);
    } catch (err) {
      next(err);
    }
  }
}
