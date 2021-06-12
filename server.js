//http paketleri
const http = require('http')
//kullanıcı controller
const {getKullanicilar} = require('./controller/kullaniciController')
/*kullanıcı verileri
const kullanicilar = require('./data/kullaniciDB.json')*/

//server oluşturma
const server = http.createServer((req,res) => {
    //console.log(req.url)
    //console.log(req.method);
    //res.statusCode = 200
    //res.setHeader('Content-Type','text/html')
    //res.write('<h1>Merhaba Node.js</h1>')
    //res.end()
    if(req.url === '/api/kullanicilar' && req.method === 'GET'){
        getKullanicilar(req,res)
    } else {
        res.writeHead(404,{'Content-Type':'application/json'})
        res.end(JSON.stringify({mesaj:'Yönlendirme Geçersiz'}))
    }
})

//port numarası ayarlaması
const PORT = process.env.PORT || 5000

//server dinleme
server.listen(PORT,() => console.log(`server ${PORT} port numarası ile ayakta`))