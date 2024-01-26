import express, { Express } from "express";

export const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Server is running",
  });
});

if (process.env.NODE_ENV !== "test") {
  app.listen(8080, () => {
    console.log(`Running on http://localhost:${8080}`);
  });
}
