/**
 * nood.js 服务器
 */

const express = require('express');
const http = require('http');
const user = require('./user');

var app = express();
http.createServer(app).listen(8080);

//设置路由 使用中间键向客户端提供静态资源的响应
app.use(express.static('public'));

//向客户端提供动态资源的响应 ??

app.post('/user/register',user.register);
app.post('/user/login',user.login);

app.get('/user/show_more_goods',user.show_more_goods);
app.get('/user/show_more_fun',user.show_more_fun);

//个人主页 用户发表评论并显示
app.get('/user/show_publish',user.show_publish);
app.get('/user/publish_content',user.publish_content);
