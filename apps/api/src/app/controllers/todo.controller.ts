import { Request, Response, Router } from 'express';
import asyncMiddleware from '../middleware/asyncMiddleware';
import todoRepo from './../repositories/todo.repo';

const router = Router();

const basePath = '/todo';

async function getTodo(req: Request, res: Response) {
  const { id } = req.params;
  if (id) {
    const result = todoRepo.get(id);
    if (result) {
      res.status(200).json(result);
    } else res.status(204);
  } else res.status(404);
}

async function addTodo(req: Request, res: Response) {
  if (req.body) {
    const result = todoRepo.create(req.body);
    if (result) {
      res.status(200).json(result);
    } else res.status(204);
  } else res.status(404);
}

async function removeTodo(req: Request, res: Response) {
  const { id, rev } = req.params;
  if (id && rev) {
    const result = todoRepo.remove(id, rev);
    if (result) {
      res.status(200).json(result);
    } else res.status(204);
  } else res.status(404);
}

router.get(`${basePath}/:id`, asyncMiddleware(getTodo));
router.delete(`${basePath}/:id//rev`, asyncMiddleware(removeTodo));
router.post(`basePath`, asyncMiddleware(addTodo));

export default router;
