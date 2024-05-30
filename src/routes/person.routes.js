import { Router } from "express";

const router =Router();

router.get('/person',(req,res)=>res.send("List person"));
router.post('/person',(req,res)=>res.send("Create new data person"));
router.put('/person',(req,res)=>res.send("Update data person"));
router.delete('/person',(req,res)=>res.send("Delete data person"));

export default router;