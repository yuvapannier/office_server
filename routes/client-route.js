import express from 'express';
import { ClientIndex, ClientCreate, ClientUpdate, ClientDelete} from '../controllers/client-controller.js';
const router = express.Router();

router.get('/', ClientIndex);

router.post('/', ClientCreate);

router.put('/:id', ClientUpdate);

router.delete('/:id', ClientDelete);