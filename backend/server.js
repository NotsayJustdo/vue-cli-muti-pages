const express = require('express');
const path = require('path');


const app = express();//创建实例

//静态资源,创建一个虚拟目录
app.use('/static', express.static(path.resolve(__dirname, '../dist/static')));

app.get('/app2', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/test.html'));
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
})

var server = app.listen(3000, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`server is running at ${host, port}`);
})
