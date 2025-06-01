import express from "express";
const app = express();

app.get("/", (req, res)=> {
    res.send("Hello World");
  });

app.post("/Register", (req, res) =>{
   res.sendStatus(201);
});
app.put("/user/Shubham", (req, res) =>{
    res.sendStatus(200);
 });
 app.patch("/user/Shubham", (req, res) =>{
    res.sendStatus(200);
 });
 app.delete("/user/Shubham", (req, res) =>{
    res.sendStatus(200);
 });
  app.get("/about", (req, res)=> {
    res.send("<h1>This is the about page</h1>");
  });

app.listen(3000, () =>{
 console.log("Server is up and running");
});