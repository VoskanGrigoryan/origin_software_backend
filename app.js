import express from "express";
import cors from "cors";
//importamos la conexión a la DB
import db from "./database/db.js";
//importamos nuestro enrutador
import userRoutes from "./routes/routes.js";
import path from "path";

const app = express();
const PORT = process.env.PORT || 4000;
// const __dirname = path.resolve(path.dirname(""));

app.use(cors());
app.use(express.json());
app.use("/", userRoutes);

// app.use(express.static(path.join(__dirname + "public")));

try {
  await db.authenticate();
  console.log("Connected to Database");
} catch (err) {
  console.log(err);
}

app.listen(process.env.PORT || PORT, () => {
  console.log("Server UP running in http://localhost:4000/");
});
