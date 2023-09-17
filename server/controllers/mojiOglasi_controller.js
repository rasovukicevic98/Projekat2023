const connection = require("../common/db-connection"); 

const getOglasi = (req, res) => {
    const id=req.params.ida;
    const q = "SELECT AUTOMOBIL.ID, Proizvodjac, Model, Godiste, Kilometraza, Kubikaza, Kilovati, Cijena, Opis, Konjska_snaga, Pogon, Gorivo, Slika  FROM AUTOMOBIL, OGLAS WHERE AUTOMOBIL.ID=IDA AND IDK="+id;
    connection.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
}
const deleteOglas = (req, res) => {
    const id=req.params.id;
    console.log(id);
    const q="DELETE FROM OGLAS WHERE IDA = "+id;
    console.log(q);
    connection.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
}
const deleteAuto = (req, res) => {
    const id=req.params.id;
    console.log(id);
    const q = "DELETE FROM AUTOMOBIL WHERE ID = "+id;
    console.log(q);
    connection.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
}


module.exports = { getOglasi, deleteOglas, deleteAuto};