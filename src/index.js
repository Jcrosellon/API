import express  from 'express';
import personRoutes from './routes/person.routes.js'

const app=express();

// app.get('/ping',async (req,res)=>{
//     const result =await connPool.query("SHOW TABLES");
//     res.json(result[0]);
// });

app.use(express.json());

app.use(personRoutes);

app.listen(3000);
console.log("Server running....");
