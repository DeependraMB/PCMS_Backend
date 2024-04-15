const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(
    `mongodb+srv://deependra_mb:1zqjXClK9sVud5fw@pcms.fvrxyhv.mongodb.net/`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("\x1b[44m\x1b[33m%s\x1b[0m", "Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
