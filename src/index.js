import "dotenv/config";
import app from "./app.js";

app.listen(app.get("PORT"));
