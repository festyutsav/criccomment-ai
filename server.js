const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to CricComment AI!");
});

app.post("/generate-commentary", (req, res) => {

    const { matchSituation } = req.body;

    console.log(matchSituation);

    res.json({
        success: true,
        commentary: `Received: ${matchSituation}`
    });

});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});