import express, { Express } from "express";

export const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Server is running",
  });
});

app.listen(3000, () => {
  console.log("Server is running");
});
