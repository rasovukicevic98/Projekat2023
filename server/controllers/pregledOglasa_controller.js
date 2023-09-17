const connection = require("../common/db-connection"); 

const getAuto = (req, res) => {
    const ida = req.params.id;
    const q = "SELECT * FROM AUTOMOBIL WHERE ID = "+ida;
    connection.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
}; 
    
const getNumber = (req, res) =>{
    const ida=req.params.id;
    const q = "SELECT Broj_telefona FROM AUTOMOBIL, OGLAS, KORISNIK WHERE AUTOMOBIL.ID = "+ida+" AND AUTOMOBIL.ID=OGLAS.IDA AND OGLAS.IDK=KORISNIK.ID;";
    connection.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })

};




module.exports = { getAuto, getNumber};