const connection = require("../common/db-connection"); 

const getAllAuto = (req, res) => {
    const q = "SELECT * FROM AUTOMOBIL";
    connection.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
}

const getAutoByFilter = (req, res) => {
    const proizvodjac = req.params.imep;
    const model = req.params.imem;
    const cijenaOd = req.params.odC;
    const cijenaDo = req.params.doC;

    const q = "SELECT * FROM AUTOMOBIL WHERE Proizvodjac='"+proizvodjac+"'"+
                                            +" AND Model='"+model+"'"
                                            +" AND Cijena>="+cijenaOd
                                            +" AND Cijena<="+cijenaDo;
    connection.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
}
const getAutoByID = (req, res) => {
    const category = req.params.id;
    const q = "SELECT * FROM AUTOMOBIL WHERE ID = "+category;
    connection.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
}

const getMaxID = (req, res) => {
  //  const category = req.params.id;
    const q = "SELECT MAX(ID) AS max FROM AUTOMOBIL";
    connection.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
}



module.exports = { getAllAuto, getAutoByFilter, getAutoByID, getMaxID};