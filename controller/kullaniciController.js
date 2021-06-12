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

//id'ye göre kullanıcı
async function getKullanici(req,res,id){    
    try {
        const kullanici = await Kullanici.findById(id)
        //kullanıcı bulunma kontrolü
        if(!kullanici){
            res.writeHead(404,{'Content-Type':'application/json'})
            res.end(JSON.stringify({'mesaj':'kullanıcı bulunamadı'})) 
        }else { //kullanıcı varsa
            res.writeHead(200,{'Content-Type':'application/json'})
            res.end(JSON.stringify(kullanici)) 
        }
    } catch (error) {
        console.log(error);
    }
}

//kullanıcı oluşturma
async function createKullanici(req,res){
    try {
        const kullanici = {
            isim:'test',
            email:'test@github.com'
        }
        const yeniKullanici = await Kullanici.create(kullanici)
        res.writeHead(201,{'Content-Type':'application/json'})
        return res.end(JSON.stringify(yeniKullanici)) 
    } catch (error) {
        console.log(error);
    }
}

//dışarıya aktarma
module.exports = {getKullanicilar,getKullanici,createKullanici}