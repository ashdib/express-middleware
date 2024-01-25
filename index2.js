import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

//setup middleware for logging/logger output
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Hello");
  // Ouput - combined (Date, time, method:GET,POST, statusCode, Http version  )
  // ::1 - - [25/Jan/2024:10:38:12 +0000] "GET / HTTP/1.1" 200 5 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0"
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
