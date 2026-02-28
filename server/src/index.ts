import "dotenv/config";
import express from "express";
import cors from "cors";
import giftsRouter from "./routes/gift.routes.js";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api/gifts", giftsRouter);

const __dirnameResolved = path.resolve();

const clientBuildPath = path.join(__dirnameResolved, "../client/dist");

app.use(express.static(clientBuildPath));

app.get("/*splate", (_, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});