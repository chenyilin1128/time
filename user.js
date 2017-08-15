/**
 * 接收客户端 注册 和 登录的请求
 * 并连接数据库 返回结果查询
 */

const qs = require('querystring');
const pool = require('./dbpool');


module.exports = {
    /*
    * 接收客户端的POST请求，参数：uname/upwd/phone/email
    * 向客户端返回JSON 形如： {'code':1,'msg':'?????','uid':uid}
    * @param req
    * @param res
    * */
    register:(req,res)=>{
        req.on('data',(buf)=>{
           //console.log(buf);
            var obj = qs.parse(buf.toString());
            //console.log(obj);
            pool.getConnection((err,conn)=>{
                if(err) throw err;
                conn.query('INSERT INTO user VALUES(NULL,?,?,?,?,?)'
                    ,[obj.uname,obj.upwd,obj.phone,obj.pwd,obj.sex],(err,result)=>{
                        if(err) throw err;
                        console.log(result);
                        var output = {
                            code:1,
                            msg:'注册成功！',
                            uid:'用户编号'+result.insertId
                        };
                        res.json(output);
                        conn.release();
                    });
            });
        });
    },

   /*
   * 接收客户端的请求post: phone/email   pwd
   * 向客户端发送 查询结果
   *
   * */
    login:(req,res)=>{
        req.on('data',(buf)=>{
            //console.log(buf);
            var obj = qs.parse(buf.toString());
            var t = String(obj.phone);
            var p = String(obj.pwd);
            console.log(obj);
            pool.getConnection((err,conn)=>{
                if(err) throw err;

                conn.query("SELECT uname,uid FROM user " +
                    "WHERE (phone=? and pwd=?) or (email=? and pwd=?) or (uname=? and pwd=?)",

                  [t,p,t,p,t,p],
               (err,result)=>{
                        if(err) throw err;
                        //console.log(result);
                        if(result.length>0){
                            var output = {
                                code:1,
                                msg:'登录成功！',
                                uname:result[0].uname,
                                uid:result[0].uid
                            }
                        }else{ //验证失败
                            var output = {
                                code:2,
                                msg:'登录失败,您已登录！'
                            }
                        }
                        res.json(output);
                        conn.release();
                    });
            });
        });
    },
    /*
    * part06 正版商城 加载更多 查询表shopping_mall
    * */
    show_more_goods:(req,res)=>{
        var s = parseInt(req.query.s);
       // console.log(s);
        pool.getConnection((err,conn)=>{
            if(err) throw err;
            conn.query('SELECT img,title,con_one,con_two FROM shopping_mall LIMIT ?,?',
                [s,4],(err,result)=>{
                    if(err) throw err;
                    res.json(result);
                    conn.release();
            });
        });
    },

    /*
    * index part08 全球拾趣 加载更多
    *
    * */
    show_more_fun:(req,res)=>{
        //console.log(req.query.m);
        var m1 = req.query.m;
        var s = parseInt(m1);
        //var n = 4,m = 0;
            pool.getConnection((err,conn)=>{
                if(err) throw err;
                conn.query('SELECT img,title,content FROM fun LIMIT ?,?',[s,4],(err,result)=>{
                    if(err) throw err;
                    //console.log(result);
                    if(!result){return}
                    res.json(result);
                    conn.release();
                });
            });
    },

    /*
    * 个人主页显示用户发表的内容，返回数据到客户端
    * 并显示在DOM到树
    * */
    show_publish:(req,res)=>{
       // console.log(req.query);
        var n = parseInt(req.query.n);
        pool.getConnection((err,conn)=>{
            if(err) throw err;
            conn.query('SELECT * FROM user_publish LIMIT ?,?',[n,1],(err,result)=>{
                console.log(result);
                res.json(result);
                conn.release();
            });
        });
    },

    /*
    * 用户发表内容 由于时间紧 仅收集了用户输入的文本内容
    * 仅做测试
    *
    * */
    publish_content:(req,res)=>{
        console.log(req.query);
        var o = req.query;
        pool.getConnection((err,conn)=>{
            if(err) throw err;
            conn.query('INSERT INTO user_publish VALUES(NULL,?,?,?,?,?,?)',
            [o.name,o.content,o.img,o.movie,o.score,o.time],(err,result)=>{
                    if(err) throw err;
                    console.log(result);
                    if(result.affectedRows>=1){
                        res.json('发表内容成功写入数据库！内容编号：'+result.insertId);
                        conn.release();
                    }
                });
        });
    }
};