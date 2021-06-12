//dosya işlemleri için
const fs = require('fs')

//dosyaya yazalım
function dosyayaYaz(dosyaAd,icerik){
    fs.writeFileSync(dosyaAd,JSON.stringify(icerik),'utf-8',(err) => {
        if(err){
            console.log(err);
        }
    })
}

//post edilen verinin bodysini kullanalım
function getPostData(req){
    return new Promise((resolve,reject) => {
        try {
            let body = ''
            //data eventi yakalandığında çalışsın
            req.on('data',(chunk) => {
                body += chunk.toString()
            })
            //işlemin bittiği event
            req.on('end', () => {
                resolve(body)
            })
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {dosyayaYaz,getPostData}