const express= require('express');
const mongoose= require('mongoose');
const userRoutes = require("./routes/userRoutes.js");
const cors= require('cors');



const app = express();
const port = 5000;

const url =
  "mongodb+srv://krishikesh369:qSxJblLhNNEBkLYB@cluster0.veo1u9v.mongodb.net/?retryWrites=true&w=majority";

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  next();
});

app.use(express.json());
app.use("/user",userRoutes);

  mongoose
    .connect(url, { //useNewUrlParser: true, useUnifiedTopology: true 
    })
    .then(() => {
      app.listen(port, () => {
        console.log(`Server is running on Port ${port}`);
      });
    })
    .catch((err) => {
      console.log(err.message)
    });



