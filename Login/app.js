const http = require('http');
const fs    = require('fs');
const qs    = require('qs');
let arr = []

let server = http.createServer((req,res)=>{
    if(req.method==='GET'){
        fs.readFile('./todo.html',"utf8",function (err,data){
            if(err){
                console.log(err.message)
            }
            res.writeHead(200,{'Content-type': 'text/html'})
            res.write(data)
            res.end()
        })

    }else{
        let dataHtml = ''
        req.on('data', chunk  =>{
            dataHtml += chunk;
        })
        req.on('end', ()  =>{
            let todo = qs.parse(dataHtml)
            fs.readFile('./display.html','utf8',function (err,data){
                if (err){
                    console.log(err.message)
                }

                arr.push(todo)
                console.log(arr)
                for (let i = 0; i<arr.length;i++){
                    data = data.replace('<h1>','<h1>' + arr[i].name + '<br>')
                }
                data = data.replace('hello ngu',todo.name)
                res.writeHead(200,{'Content-type': 'text/html'})
                res.write(data)
                res.end()
            })
        })

    }
});
server.listen(8080,'localhost', function (){
    console.log(' Sever dang chay localhost:8080')
    }
)