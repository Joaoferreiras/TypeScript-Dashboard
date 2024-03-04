import { Router } from 'express';

import { CategoriesController } from '../controllers/categories.controller';
import { createCategorySchema } from '../dtos/categories.dto';
import { CategoryFactory } from '../factories/categories.factory';
import { ParamsType, validator } from '../middlewares/validator.middleware';

export const categoriesRoutes = Router();

const controller = new CategoriesController(
  CategoryFactory.getServiceInstance(),
);

categoriesRoutes.get('/', controller.index);

categoriesRoutes.post(
  '/',
  validator({
    schema: createCategorySchema,
    type: ParamsType.BODY,
  }),
  controller.create,
);
