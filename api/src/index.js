const express = require ("express");
const cors = require ("cors"); 

const app = express ();

app.use (cors());

app.get  ("/", (req,res) => {
    res.send("Hello World!");
});

app.get("/accounts", (req,res) => {
    // return all accounts
});
app.post ("/accounts", (req,res) => {
    // create a new account
});
app.get("/categories", (reg,res) => {
// return all categories
});
app.post ("/categories", (reg,res ) => {
    // create a new category
})


app.listen (3001,() => {
    console.log("Server is running on port 3001");
});