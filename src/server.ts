import express from "express";
import cors from "cors";
import path from "path";

const app = express();

app.use(cors()); //Allow different domains to access endpoints in backend
app.use(express.json()); // parse requests of content-type - application/json

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV?.trim() === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/build"))); // Pointing to the Express server where the React build is.
    app.get("/*", (req: express.Request, res: express.Response) => {
      res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
    });
} else if (process.env.NODE_ENV?.trim() === "development") {
    app.get("/", (req: express.Request, res: express.Response) => {
      res.send(
        "From BACKEND (Port 5000): Choremate"
     );
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
