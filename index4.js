import express from "express";
const app = express();
const port = 3000;
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";

//setup middleware
app.use(bodyParser.urlencoded({ extended: true }));

// rendering index.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// get the data from the submit
app.post("/submit", (req, res) => {
  var streetName = req.body.street;
  const petName = req.body.pet;
  res.send(
    "<h1>The band name generate is</h1>" + `<h2>${streetName + petName}</h2>`
  );
});

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
