import { connect } from "mongoose";
import config from "./config/index";
import app from "./app";

async function run() {
  try {
    await connect(config.database_url as string);
    console.log("Database connected successfuly");
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log("Failed to connect database");
  }
}
run().catch((err) => console.log(err));
