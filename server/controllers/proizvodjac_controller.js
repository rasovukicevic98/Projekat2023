const connection = require("../common/db-connection"); 

const getAllPro = (req, res) => {
    const q = "SELECT * FROM PROIZVODJAC";
    connection.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
}

module.exports = { getAllPro};