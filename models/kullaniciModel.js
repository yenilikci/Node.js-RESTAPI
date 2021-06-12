//veriye erişelim
const kullanicilar =  require('../data/kullaniciDB.json')
//benzersiz kullanıcı id'leri
const {v4:uuidv4} = require('uuid')
//dosyaya yazma fonk
const {dosyayaYaz} = require('../utils')

//tüm kullanıcılar
function findAll(){
    return new Promise((resolve,reject) => {
        resolve(kullanicilar)
    });
}

//id'ye göre kullanıcı
function findById(id){
    return new Promise((resolve,reject) => {
        const kullanici = kullanicilar.find((k) => k.id == id)
        resolve(kullanici)
    })
}

//kullanıcı oluşturma
function create(kullanici){
    return new Promise((resolve,reject) => {
        const yeni = {
            id:uuidv4(),
            ...kullanici
        }
        kullanicilar.push(yeni)
        dosyayaYaz('./data/kullaniciDB.json',kullanicilar)
        resolve(yeni)
    }) 
}

//kullanıcı güncelleme
function update(id,kullaniciVerisi){

    return new Promise((resolve,reject) => {
        const index = kullanicilar.findIndex((k) => k.id === id)
        kullanicilar[index] = {id,...kullaniciVerisi}
        dosyayaYaz('./data/kullaniciDB.json',kullanicilar)
        resolve(kullanicilar[index])
    }) 
}

//dışarıya aktaralım
module.exports = {findAll,findById,create,update}