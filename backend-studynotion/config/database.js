const mongoose = require("mongoose");
require("dotenv").config();

const tempUrl = 'mongodb+srv://abhisheksaroch2505:abcd1234@cluster0.cufktpz.mongodb.net/studyNotionDb'

exports.dbConnect = () => {
  mongoose
    .connect(tempUrl, {
      useUnifiedTopology:true,
      useNewUrlParser:true,
    })
    .then(console.log("Success in DB Connection"))
    .catch((error) => {
      console.log("DB Connection Failed"), 
      console.error(error),
      process.exit(1);
    });
};
