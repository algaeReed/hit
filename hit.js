const https = require('https');
var fs = require('fs');
let url = 'url';
var i = 0;
for( i = 1; i < 1000;i++){
    
    https.get(url, function (res) {                                     
        let chunks = [],
            size = 0;
        res.on('data', function (chunk) {
            chunks.push(chunk);
            size += chunk.length;
        });

        res.on('end', function () {
            console.log('数据包传输完毕');
            let data = Buffer.concat(chunks, size);
            console.log(data);
            let html = data.toString() + "\n";
            fs.appendFile('text.txt',html,'utf8',function(err){
                if(err)
                    console.log('写文件出错了，错误是：'+err);
                else
                    console.log('ok');
            }) 
            console.log(html);
        });
    })
}
