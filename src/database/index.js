const mongoose = require('mongoose');

function connectDB(){

    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      const db = mongoose.connection;
      db.on("error", (error) => console.error(error));
      db.once("open", () => console.log("DB connect!"));
}

module.exports = connectDB;
