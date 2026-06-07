import express, { json } from 'express';
import middleware from './src/middleware/error.middleware.js';
import leadRoutes from './src/routes/lead.router.js';
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json())
app.use('/leads',leadRoutes);
app.use(middleware);

export default app;
