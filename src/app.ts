import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "../build/routes";

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));
app.use(cors());
//swagger setup
app.use("/docs", swaggerUi.serve, async (req: Request, res: Response) => {
  return res.send(
    swaggerUi.generateHTML(await import("../build/swagger.json"))
  );
});

// mongodb connection setup
mongoose.connect(process.env.MONGO_URI!);
const db = mongoose.connection;
db.on("error", (error: any) => {
  console.log("There was some error in connecting to mongodb", error);
  process.exit();
});
RegisterRoutes(app);
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on port number ${port}`);
});
