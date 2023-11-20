const mongoose= require('mongoose');
const url =
  "mongodb+srv://krishikesh369:qSxJblLhNNEBkLYB@cluster0.veo1u9v.mongodb.net/?retryWrites=true&w=majority";

const mongoDB = async() => {
  mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("DataBase Connected Successfully")
    })
    .catch((err) => {
      console.log(err.message)
    });

};

export default mongoDB;
