import dotenv from "dotenv";
import express, { Express } from "express";

dotenv.config();

export const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Server is running 🚀",
  });
});

if (process.env.NODE_ENV !== "test") {
  const PORT = process.env.PORT || 8080;
  const IP = process.env.IP || "0.0.0.0";
  app.listen(Number(PORT), IP, () => {
    console.log(`Running on http://${IP}:${PORT}`);
  });
}
