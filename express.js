const express = require('express');
const app = express();
const port = 3000;

app.use(express.static("module/"));
app.get("/", function (req, res) {
    res.redirect("/chat");
  });
app.use("/chat", express.static("module/index.html"));
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});