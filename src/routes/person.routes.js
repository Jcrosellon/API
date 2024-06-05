import { Router } from "express";
import {showPerson,showPersonId,createPerson,updatePerson,deletePerson} from '../controllers/person.controller.js';

const router =Router();

router.get('/person',showPerson);
router.post('/person',createPerson);

export default router;