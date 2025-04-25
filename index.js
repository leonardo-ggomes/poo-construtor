const express = require("express")
const JogadorController = require("./mvc/controllers/JogadorController.js")

class Server
{

    app
    porta 

    constructor()
    {
        this.app = express()
        this.porta = 3000
        
        this.on()
        this.configMiddleware()
        this.start()
    }

    start()
    {
        new JogadorController(this.app)
    }

    configMiddleware()
    {
        this.app.use(express.urlencoded({extended: true}))
        this.app.use(express.json())
        this.app.set("view engine", "ejs")
        this.app.set("views","mvc/views")
    }

    on()
    {
        this.app.listen(this.porta)
    }
}

new Server()