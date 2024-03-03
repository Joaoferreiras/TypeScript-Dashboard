import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { z } from 'zod';

import { CategoriesRepository } from '../database/repositories/categories.repository';
import { CategoryModel } from '../database/schemas/category.schema';
import { CreatedCategoryDTO } from '../dtos/categories.dto';
import { CategorieService } from '../services/categories.services';

export class CategoriesController {
  async create(
    req: Request<unknown, unknown, CreatedCategoryDTO>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { title, color } = req.body;

      const repository = new CategoriesRepository(CategoryModel);
      const service = new CategorieService(repository);
      const result = await service.create({ title, color });

      return res.status(StatusCodes.CREATED).json(result);
    } catch (err) {
      next(err);
    }
  }
}
