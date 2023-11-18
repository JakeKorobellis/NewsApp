import express, { json } from "express";
import { set, connect } from "mongoose";
require("dotenv").config();
import router from "./routes/index";
var app = express();

app.use(json());
app.use("/", router);

app.get("/api", (req, res) => {
  res.json({ test: true });
});

set("strictQuery", false);

const DB = process.env.DBLINK;

main().catch((err) => console.log(err));
async function main() {
  await connect(DB);
  console.log("MongoDB is connected");
}
app.listen(5000, () => console.log("App is listening on port 5000"));
