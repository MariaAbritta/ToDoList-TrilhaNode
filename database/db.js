const mongoose = require("mongoose");

const connectToDb = () => {
    mongoose
    .connect(
       "mongodb+srv://MariaAbritta:Abritta10@cluster0.mmadh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
       {
           UseNewUrlParser: true,
           UseUnifiedTopology: true,
       }
    )
    .then(() => console.log("MongoDB Atlas CONECTADO COM SUCESSO!"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;