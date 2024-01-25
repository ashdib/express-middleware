import express from "express";

const app = express();
const port = 3000;

const logger = (req, res, next) => {
  console.log(`This is the HTTP request method: ${req.method}`);
  console.log(`This is the URL where the request happened: ${req.url}`);
  next()
};

app.use(logger);

app.post("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
