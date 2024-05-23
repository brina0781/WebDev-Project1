// Import necessary modules
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

// Middleware 
app.use(express.static("public"));
// Middleware to parse 
app.use(bodyParser.urlencoded({ extended: true }));

//GET requests 
app.get("/", async (req, res) => {
  try {
    // Sends a GET request to the MeowFacts API
    const response = await axios.get("https://meowfacts.herokuapp.com/");
    // Extract the first fact from the response data
    const result = response.data.data[0]; 
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

// Define POST 
app.post("/", async (req, res) => {
  try {
    // Send a GET request to the MeowFacts API
    const response = await axios.get("https://meowfacts.herokuapp.com/");
    // Extract the first fact from the response data
    const result = response.data.data[0]; 
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: "Failed to fetch cat fact.",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
