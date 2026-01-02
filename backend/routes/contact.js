import express from 'express';
import {getContacts, createContact, deleteContact} from "../controllers/contactControllers.js";

const router = express.Router();

router.get('/', getContacts);
router.post('/', createContact);
router.delete('/:id', deleteContact);

export default router;