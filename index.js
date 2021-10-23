const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    "Hello and Welcome to Node , checking and checking to know with Nodemon change and gone and gone"
  );
});

const users = [
  { id: 0, name: "shovon", email: "resshovon@gmail.com", phone: "01786101879" },
  { id: 1, name: "sh", email: "sh@gmail.com", phone: "01786101879" },
  { id: 2, name: "sho", email: "sho@gmail.com", phone: "01786101879" },
  { id: 3, name: "shovo", email: "shovo@gmail.com", phone: "01786101879" },
  { id: 4, name: "sonia", email: "sonia@gmail.com", phone: "01786101879" },
  {
    id: 5,
    name: "shusmita",
    email: "shusmita@gmail.com",
    phone: "01786101879",
  },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

//app.METHOD
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("hitting the", req.body);
  // res.send(JSON.stringify(newUser));
  res.json(newUser);
});

// Dynamic API
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send(["mangos", "bananas"]);
});

app.get("/fruits/mango/fazli", (req, res) => {
  res.send("mango mama");
});

app.listen(port, () => {
  console.log("listening port", port);
});
