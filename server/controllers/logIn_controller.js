const connection = require("../common/db-connection"); 
var jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');


const genAPIKey = () => {
	//create a base-36 string that contains 30 chars in a-z,0-9
	return [...Array(30)]
	  .map((e) => ((Math.random() * 36) | 0).toString(36))
	  .join('');
  };

const login = (async (req, res) => {	
	try 
	{
		var retVal = {idToken : null, msg : '', userID: null};
		retVal.msg = '';
		if (!req.body) {res.status(200).json(retVal); return;}
		try 
		{			
			var username = req.body.username;
			var password = req.body.password;
            var mail = req.body.mail;
			const q = "SELECT * FROM korisnik WHERE Username = '" + username + "' AND  Lozinka= '" + password + "' AND MailAdresa = '" + mail + "'" ;
			let rows;
            console.log(q);
			connection.query(q, (err, data) => {
				if(err) return res.json(err)
				rows = data
                console.log(rows);
				if (!rows || rows.length == 0){
					console.log(rows);
					retVal.msg = 'Kredencijali nijesu ispravni';
					res.status(200).json(retVal); 
					return;
				}
				console.log(rows[0]);
				let user_db = rows[0];
				console.log(user_db);
				token = jwt.sign({ id: user_db.id, username : req.body.username}, genAPIKey(), { expiresIn: '1h' });
				retVal.idToken = token;
				retVal.userID=user_db.ID;
				res.status(200).json(retVal);
   			})
	    }
	    catch(err) {
			console.log(err);
			retVal.msg = 'Greška prilikom logovanja'; res.status(200).json(retVal); return;
		}	    
		
	}
	catch(err) {
		retVal.msg = 'Greška prilikom logovanja'; res.status(200).json(retVal); return;
	}
});

const singup = (async (req, res) => {	
	try 
	{	
		retVal = '';
		if (!req.body) {res.status(200).json(retVal); return;}
		try 
		{			
			var ime = req.body.ime;
			var prezime = req.body.prezime;
			var username = req.body.username;
			var password = req.body.password;
            var mail = req.body.mail;
            var brojtelefona = req.body.brojtelefona;
			const q1 = "SELECT * FROM Korisnik WHERE Username = '" + username + "'";
			const q2 = "SELECT * FROM Korisnik WHERE  MailAdresa = '" + mail + "'";
			const q = "INSERT INTO Korisnik (Username, Lozinka,MailAdresa,  Broj_telefona, Ime, Prezime ) values ('" + username + "', '" + password + "','" + mail + "'" + ", " + "'" + brojtelefona + "','" + ime + "','"  + prezime + "')";

			connection.query(q1, (err, data) => {
				if(err) return res.json(err)
				rows = data
				if (rows.length != 0){
					console.log(rows);
					retVal = 'Korisnik sa ovim emailom vec postoji';
					res.status(200).json(retVal); 
					return;
				}
				else{
					connection.query(q2, (err1, data1) =>{
						if(err1) return res.json(err1)
						rows2 = data1
						if (rows2.length != 0){
							console.log(rows);
							retVal = 'Korisnik sa ovim usernameom vec postoji';
							res.status(200).json(retVal); 
							return;
						}
						else{
							console.log(q);
							connection.query(q, (err3, data3) => {
								if(err3) return res.json(err3);
									res.status(200).json(data3.affectedRows);
							})
						}
					})
				}
   			})
	    }
	    catch(err) {
			console.log(err);
			retVal.msg = 'Greška prilikom logovanja'; res.status(200).json(retVal); return;
		}	    
		
	}
	catch(err) {
		retVal.msg = 'Greška prilikom logovanja'; res.status(200).json(retVal); return;
	}
});

module.exports = {login, singup};