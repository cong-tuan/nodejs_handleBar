const express = require("express");
const path = require("path");

const app = express();

// Cấu hình thư mục chứa views và view engine là Handlebars
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

// Định nghĩa route cho trang chủ
app.get("/", (req, res) => {
  const peopleList = getRandomList();
  res.render("index", { people: peopleList });
});

const getRandomList = () => {
  const list = ["ada", "turing", "lovelace", "neumann", "gracehopper"];
  const limit = Math.floor(Math.random() * (list.length - 1 - 0) + 0);
  return list.slice(limit);
};

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
