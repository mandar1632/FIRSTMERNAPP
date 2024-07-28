const express = require("express");
const cors = require("cors");
const db = require("./dbconnection");
//const port = 5000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

const userRoutes = require("./apis/users/routes");

const frontendURI = "http://localhost:5173";

app.use(cors(
   {
      origin: ["https://firstmernappbackend-mandar1632s-projects.vercel.app"],
      methods: ["POST","GET"],
      credentials: true
   }
));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: frontendURI, // Replace with your frontend domain
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
