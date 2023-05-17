const http = require('http')
const fs    = require('fs')
const qs = require('qs')
const server = http.createServer(function (req,res){
    if (req.method === 'GET'){
        fs.readFile('./register.html', 'utf8',function (err,data){
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.write(data)
            return res.end()
        })

    }else {
        let data = '';
        req.on('data',chunk=>{
            data +=chunk;
        })
        req.on('end',()=>{
            const userInfo = qs.parse(data);
            console.log(userInfo)
            fs.readFile('./info.html', 'utf8', function (err, datahtml) {
                if (err) {
                    console.log(err);
                }
                datahtml = datahtml.replace('{name}', userInfo.name);
                datahtml = datahtml.replace('{email}', userInfo.mail);
                datahtml = datahtml.replace('{password}', userInfo.Password);
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(datahtml);
                return res.end();
            });
        })
        req.on('error', () => {
            console.log('error')
        })
    }
});
server.listen(8080, function () {
    console.log('server running at localhost:8080 ')
})