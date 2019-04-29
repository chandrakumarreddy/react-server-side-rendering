import "babel-polyfill";
import dotenv from "dotenv";
import http from "http";
import app from "./app";

dotenv.config({ path: "variables.env" });

const PORT = process.env.PORT;
const server = http.createServer(app);
server.listen(PORT, () => console.log(`server is listening at ${PORT}`));
