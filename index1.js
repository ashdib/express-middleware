import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Setup middleware
app.use(bodyParser.urlencoded({ extended: true }));

// POST Method to get /submit data form
app.post("/submit", (req, res) => {
  console.log(req.body);
});

//Send the index.html file to the home page
app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
