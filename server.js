const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public")); // Serve static files (CSS, JS)
app.use(express.urlencoded({ extended: true })); // Parse form data

// Homepage Route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

// Handle Form Submission
app.post("/submit", (req, res) => {
    const { name, number } = req.body;
    res.send(`Hello, ${name}! We received your number: ${number}`);
});

// Start Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
