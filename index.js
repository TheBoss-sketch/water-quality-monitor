const express = require("express");
const app = express();

app.use(express.json());

let latestData = {
  pH: "--",
  TDS: "--",
  Turbidity: "--",
  Temperature: "--"
};

// ESP32 sends data here
app.post("/data", (req, res) => {
  latestData = req.body;
  console.log("Received:", latestData);
  res.send({ status: "OK" });
});

// Website fetches data here
app.get("/data", (req, res) => {
  res.json(latestData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
