const connection = require("../common/db-connection"); 

const updateOglas = (req, res) => {
    var id=req.body.id;
    var Proizvodjac = req.body.Proizvodjac;
    var Model = req.body.Model;
    var Godiste = req.body.Godiste;
    var Kilometraza = req.body.Kilometraza;
    var Kubikaza = req.body.Kubikaza;
    var Cijena = req.body.Cijena;
    var Kilovati = req.body.Kilovati;
    var Slika = req.body.Slika;
    var Konjska_snaga=req.body.Konjska_snaga;
    var Opis=req.body.Opis;
    var Gorivo = req.body.Gorivo;
    var Pogon = req.body.Pogon;
    const q = "UPDATE AUTOMOBIL SET Godiste="+Godiste+",Kilometraza='"+Kilometraza+"',Kubikaza='"+Kubikaza+"',Gorivo='"+Gorivo+"', Pogon='"+Pogon+"', Konjska_snaga="+Konjska_snaga+", Opis='"+Opis+"', Slika='"+Slika+"', Kilovati='"+Kilovati+"', Cijena="+Cijena+" WHERE ID="+id;
    connection.query(q, (err, data) => {
         if(err) return res.json(err)
         return res.json(data)
     })
}
 
module.exports = {updateOglas};