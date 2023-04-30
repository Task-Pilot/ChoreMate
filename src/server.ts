import express from "express";
import cors from "cors";

const app = express();

app.use(cors()); //Allow different domains to access endpoints in backend
app.use(express.json()); // parse requests of content-type - application/json

app.get("/", (req: express.Request, res: express.Response) => {
    res.send(
      "From BACKEND (Port 5000): Choremate"
    );
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
