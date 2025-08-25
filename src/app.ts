import  Express, { Application }  from "express";

const app:Application = Express();

app.use(Express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

const PORT = 3000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});