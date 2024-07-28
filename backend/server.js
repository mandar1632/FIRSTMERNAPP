const express = require("express");
const cors = require("cors");
const db = require("./dbconnection");
//const port = 5000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

const userRoutes = require("./apis/users/routes");

const frontendURI = "https://firstmernappfrontend-mandar1632s-projects.vercel.app";

app.use(bodyParser.json({ limit: "5mb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: frontendURI, // Replace with your frontend domain
    methods: ["POST","GET"],
    credentials: true, // Allow credentials (cookies, authorization headers)
  })
);
app.use("/users", userRoutes);

app.get("/",(req, res) => {
    res.json("Hello");
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
