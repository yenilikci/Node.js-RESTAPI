//model
const Kullanici = require('../models/kullaniciModel')

//server tarafından kullanılacak, tüm kullanıcıları getirecek
async function getKullanicilar(req,res){    
    try {
        const kullanicilar = await Kullanici.findAll()

        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(kullanicilar)) 
    } catch (error) {
        console.log(error);
    }
}

//dışarıya aktarma
module.exports = {getKullanicilar}