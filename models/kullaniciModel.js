//veriye erişelim
const kullanicilar =  require('../data/kullaniciDB.json')

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

//dışarıya aktaralım
module.exports = {findAll,findById}