//veriye erişelim
const kullanicilar =  require('../data/kullaniciDB.json')
const {v4:uuidv4} = require('uuid')

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
        resolve(yeni)
    })
}

//dışarıya aktaralım
module.exports = {findAll,findById,create}