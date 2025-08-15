import express from "express";
import characterRoutes from "./routes/characterRoutes";

const app = express();
app.use(express.json());
app.use("/characters", characterRoutes);

export default app;