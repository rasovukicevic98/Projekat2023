const connection = require("../common/db-connection"); 


const getAutoByFilter = (req, res) => {
    var imepp = req.query.imeProizvodjaca;
    var imemm = req.query.imeMarke;
    var cijenaOd = req.query.odCijena;
    var cijenaDo = req.query.doCijena;
    const q = "SELECT * FROM AUTOMOBIL WHERE Proizvodjac= '"+imepp+"'"+" AND Model= '"+imemm+"'"+" AND Cijena>= "+cijenaOd+" AND Cijena<= "+cijenaDo;
    connection.query(q, (err, data) => {
         if(err) return res.json(err)
         return res.json(data)
     })
}



module.exports = {getAutoByFilter};