import {createLead, deleteLead, getLeads, updateLead} from '../controller/lead.controller.js'
import { Router } from 'express'

const router = Router();

router.post('/',createLead);
router.get('/',getLeads);
router.delete('/:_id',deleteLead);
router.put('/:_id',updateLead);


export default router;
