import express from "express";
import path from "path";

const app = express();
const env = process.env;

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(env.PORT, (err: string) => {
    (err) ? console.log(err) : console.log(`Listening to Port ${env.PORT}.`);
});
