//veriye erişelim
const kullanicilar =  require('../data/kullaniciDB.json')

//tüm kullanıcılar
function findAll(){
    return new Promise((resolve,reject) => {
        resolve(kullanicilar)
    });
}

//dışarıya aktaralım
module.exports = {findAll}