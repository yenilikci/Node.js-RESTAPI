//http paketleri
const http = require('http')

//server oluşturma
const server = http.createServer((req,res) => {
    console.log(req.url)
    console.log(req.method);
})

//port numarası ayarlaması
const PORT = process.env.PORT || 5000

//server dinleme
server.listen(PORT,() => console.log(`server ${PORT} port numarası ile ayakta`))