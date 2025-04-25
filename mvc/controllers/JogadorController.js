const Jogador = require("../models/JogadorModel");


class JogadorController
{
    constructor(app)
    {

        app.get("/jogador/criar/:nome/:vidas", (req, res) => {

            const jogador = new Jogador(req.params.nome, req.params.vidas)

            res.render("JogadorView", {
                nome_jogador: jogador.nome
            })
        })

    }
}

module.exports = JogadorController