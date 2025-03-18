import { Router } from 'express';
import raExpressMongoose from 'express-mongoose-ra-json-server';
import toDoModel from '../models/todo.model';

const router = Router();
router.use(
  '/todo',
  raExpressMongoose(toDoModel, {
    q: ['content'],
    allowedRegexFields: ['content'],
    useLean: false,
  })
);

export default router;