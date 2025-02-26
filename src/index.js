import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config();


connectDB()
.then(() => {
    app.on("error", (err) => {
      console.error("Server Error:", err);
      throw err;
    });

    // Start the server
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`Server is up and running on Port: ${PORT}`);
    });
  })
.catch((err) => {
    console.error("MongoDB Connection Failed:", err);
  });

