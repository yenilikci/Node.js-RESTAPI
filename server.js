//http paketleri
const http = require('http')
//kullanıcı controller
const {getKullanicilar,getKullanici,createKullanici} = require('./controller/kullaniciController')

//server oluşturma
const server = http.createServer((req,res) => {
    
    // api/kullanicilar , GET
    if(req.url === '/api/kullanicilar' && req.method === 'GET'){
        getKullanicilar(req,res)
    } // api/kullanici/id , GET 
    else if(req.url.match(/\/api\/kullanici\/([0-9]+)/) && req.method === 'GET'){
        const id = req.url.split('/')[3] //split ile ayır
        getKullanici(req,res,id)
    } //api/kullanici , POST
    else if(req.url === '/api/kullanici' && req.method === 'POST') {
        createKullanici(req,res)
    }
    else {
        res.writeHead(404,{'Content-Type':'application/json'})
        res.end(JSON.stringify({mesaj:'Yönlendirme Geçersiz'}))
    }
})

//port numarası ayarlaması
const PORT = process.env.PORT || 5000

//server dinleme
server.listen(PORT,() => console.log(`server ${PORT} port numarası ile ayakta`))