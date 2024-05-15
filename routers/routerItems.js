const express = require("express")
const database = require("../database")
const routerItems = express.Router()

routerItems.get("/",async (req,res)=>{
    database.connect()
    let items = await database.query("SELECT * FROM items")
    res.send(items)
    database.disconnect()
})

routerItems.get("/:id",async (req,res)=>{
    let id = req.params.id
    if(id == undefined)
        return res.status(400).json({error: "no id param"})
    database.connect()
    const items = await database.query("SELECT * FROM ITEMS WHERE id = ?", [id])
    res.send(items)
    database.disconnect()
})

module.exports=routerItems