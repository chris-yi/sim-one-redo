const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const port = 8080;
const app = express();
const ctrl = require('./controllers/controller')

require("dotenv").config()

app.use( bodyParser.json() );
app.use( cors() );

massive(process.env.CONNECTION_STRING)
    .then(db => {
        console.log("massive-working")
        app.set("db", db)
    })

// app.get("/api/test", function(req, res) {
//     (app.get("db").test().then(test => {
//         res.send(test)
//     })
// )})

app.get("/api/shelf/:id", ctrl.getShelf)
app.get("/api/bin/:id", ctrl.getBin)
app.put("/api/bin/", ctrl.updateBin)
app.delete("/api/bin/:id", ctrl.deleteBin)


app.listen(port, () => {
    console.log(`server is running on ${port}`)
})

