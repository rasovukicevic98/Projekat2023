const connection = require("../common/db-connection"); 

const getAllModels = (req, res) => {
    const q = "SELECT * FROM MODEL";
    connection.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
}

const getModelByPro = (req, res) => {
    const imepp = req.params.imep;
    const q = "SELECT Ime FROM MODEL WHERE ImeP= '"+"imepp'";
    connection.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
}

module.exports = { getAllModels, getModelByPro};