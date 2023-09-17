const connection = require("../common/db-connection"); 

const getAllOglas = (req, res) => {
    const q = "SELECT * FROM OGLAS";
    connection.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
}

const getCategoryOglas = (req, res) => {
    const category = req.params.category;
    const q = "SELECT * FROM OGLAS";
    connection.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
}
module.exports = { getAllOglas, getCategoryOglas};