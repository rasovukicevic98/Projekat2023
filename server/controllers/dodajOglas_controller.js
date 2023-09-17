const connection = require("../common/db-connection"); 

const insertInstance = (async(req, res) => {
    //console.log(req.body);
    try 
	{	
		retVal = {maxId:0, msg:''};
		retVal.msg = '';
		if (!req.body) {res.status(200).json(retVal); return;}
		try 
		{	var userid=req.body.userID;
            var maxid=req.body.maxid;
            var maxx=maxid+1;
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
			console.log(req.body);
            if(Proizvodjac==='' || Model === '' || Slika === '' || Gorivo==='' || Pogon==='' || Kilometraza==='' || Kubikaza==='' || Kilovati===''){
                retVal.msg = 'All input required'; res.status(200).json(retVal); return;
            }
            else{
            
			const q = "INSERT INTO AUTOMOBIL(Model, Proizvodjac, Godiste, Kilometraza, Kubikaza, Gorivo, Kilovati, Pogon, Cijena, Konjska_snaga, Opis, Slika)  values  (" + "'" + Model + "' , '" + Proizvodjac + "','" + Godiste  + "'," + "'" + Kilometraza + "'" + "," + "'" +Kubikaza + "'" + "," + "'" +Gorivo + "'" +","+"'"+Kilovati+"'"+","+"'"+Pogon+"'"+",'"+Cijena+"','"+Konjska_snaga+"',"+"'"+Opis+"'"+","+"'"+Slika+"'"+")"  ;
            console.log(q);
			connection.query(q, (err, data) => {
				if(err) return res.json(err);
                id = data.insertId;
				retVal.maxId = id;
				res.status(200).json(retVal);
   			})
               
                
   			

	    }
    }
	    catch(err) {
			console.log(err);
			retVal.msg = 'Failed'; res.status(200).json(retVal); return;
			    
    }
	}
	catch(err) {
		retVal.msg = 'Failed'; res.status(200).json(retVal); return;
	}
})

const insertOglas = (async(req, res) => {
    //console.log(req.body);
    try 
	{	
		retVal = '';
		if (!req.body) {res.status(200).json(retVal); return;}
		try 
		{	var userid=req.body.userID;
            var maxid=req.body.maxx;
			//var maxa=maxid+1;
            
            const p="INSERT INTO OGLAS(IDA, IDK, Datum) VALUES ("+maxid+", "+userid+", '2023-07-01')";
            console.log(p);
            connection.query(p, (err, data) => {
				if(err) return res.json(err);
				res.status(200).json(data.affectedRows);
                
   			})

	    
    }
	    catch(err) {
			console.log(err);
			retVal.msg = 'Failed'; res.status(200).json(retVal); return;
			    
    }
	}
	catch(err) {
		retVal.msg = 'Failed'; res.status(200).json(retVal); return;
	}
})



module.exports = {insertInstance, insertOglas};