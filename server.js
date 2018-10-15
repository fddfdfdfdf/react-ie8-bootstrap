const express = require('express');
const app = express();
const path = require('path');
const fs =require("fs");

//设置静态变量
app.use(express.static("./static"))
app.get('/api/user',function (req,res) {
    fs.readFile(__dirname + "/static/api/user.json", function (err, data) {
        if (err) {
            console.log(err);
        } else {
            return res.json(JSON.parse(data.toString()));
        }
    });
})

//node 的端口
 app.listen(3000, function () {
     console.log("应用实例运行于3000端口")
 })
