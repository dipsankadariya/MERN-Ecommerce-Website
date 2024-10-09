import express from "express";
import dotenv from "dotenv"; 
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js"; 
import cors from 'cors';
dotenv.config(); 

const app = express();
app.use(cors());
const PORT =  process.env.PORT ||5000;

app.use(express.json()); 


app.use("/api/products",productRoutes);


app.listen(PORT, () => {
    connectDB(); 
    console.log(`Server Started at ${PORT}`);
});
