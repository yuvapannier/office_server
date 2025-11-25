import express from 'express';
import { ClientIndex, ClientCreate, ClientDetail, ClientUpdate, ClientDelete} from '../controllers/client-controller.js';

const router = express.Router();

router.get('/', ClientIndex);

router.get("/:id", ClientDetail);

router.post('/', ClientCreate);

router.put('/:id', ClientUpdate);

router.delete('/:id', ClientDelete);

export default router;