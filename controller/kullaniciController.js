//model
const Kullanici = require('../models/kullaniciModel')
//post bodysi için
const {getPostData} = require('../utils')

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
        
        const body = await getPostData(req)
        const {isim,email} = JSON.parse(body)

        const kullanici = {
            isim,
            email
        }
        
        const yeniKullanici = await Kullanici.create(kullanici)
        res.writeHead(201,{'Content-Type':'application/json'})
        return res.end(JSON.stringify(yeniKullanici)) 
    } catch (error) {
        console.log(error);
    }
}

//kullanıcı güncelle
async function updateKullanici(req,res,id){    
    try {
        const kullanici = await Kullanici.findById(id)
        //kullanıcı bulunma kontrolü
        if(!kullanici){
            res.writeHead(404,{'Content-Type':'application/json'})
            res.end(JSON.stringify({'mesaj':'kullanıcı bulunamadı'})) 
        }else { //kullanıcı varsa
            const body = await getPostData(req)
            const {isim,email} = JSON.parse(body)
            //body'de ki veri yoksa veya belli alanlar için kullanıcının verileri
            const kullaniciVerisi = {
                isim:isim || kullanici.isim,
                email:email || kullanici.email
            }

            const updateKullanici = await Kullanici.update(id,kullaniciVerisi)
            res.writeHead(200,{'Content-Type':'application/json'})
            res.end(JSON.stringify(updateKullanici)) 
        }
    } catch (error) {
        console.log(error);
    }
}

//kullanıcı silme
async function deleteKullanici(req,res,id){    
    try {
        const kullanici = await Kullanici.findById(id)
        //kullanıcı bulunma kontrolü
        if(!kullanici){
            res.writeHead(404,{'Content-Type':'application/json'})
            res.end(JSON.stringify({'mesaj':'kullanıcı bulunamadı'})) 
        }else { //kullanıcı varsa
            await Kullanici.remove(id)
            res.writeHead(200,{'Content-Type':'application/json'})
            res.end(JSON.stringify({'mesaj':`Kullanıcı id=${id} silindi`})) 
        }
    } catch (error) {
        console.log(error);
    }
}

//dışarıya aktarma
module.exports = {getKullanicilar,getKullanici,createKullanici,updateKullanici,deleteKullanici}