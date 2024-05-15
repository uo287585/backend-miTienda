const express = require("express")

const app = express()
const port = 3000
const database = require("./database")

const routerItems = require("./routers/routerItems")
app.use("/items",routerItems)

app.listen(port, ()=>{
    console.log("App lostening in port "+port)
})