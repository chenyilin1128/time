SET NAMES UTF8;
CREATE DATABASE mtime CHARSET=UTF8;
USE mTime;
CREATE TABLE user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(50),
    pwd VARCHAR(32),
    phone BIGINT,
    email VARCHAR(50),
    sex INT
);
INSERT INTO user VALUES
(NULL,'tom','123456','12312345678','123@126.com',1),
(NULL,'JEMMY','123456','12312345678','4037@126.com',1);

CREATE TABLE fun(
    fid INT PRIMARY KEY AUTO_INCREMENT,
    img VARCHAR(50),
    title VARCHAR(100),
    content VARCHAR(100)
);
INSERT INTO fun VALUES
(NULL,'images/fun09.jpg','来自好莱坞的19位戛纳影帝','不管好人坏人弯的直的 演的好戛纳就喜欢'),
(NULL,'images/fun10.jpg','来自好莱坞的19位戛纳影帝','不管好人坏人弯的直的 演的好戛纳就喜欢'),
(NULL,'images/fun11.jpg','来自好莱坞的19位戛纳影帝','不管好人坏人弯的直的 演的好戛纳就喜欢'),
(NULL,'images/fun12.jpg','来自好莱坞的19位戛纳影帝','不管好人坏人弯的直的 演的好戛纳就喜欢'),
(NULL,'images/fun13.jpg','来自好莱坞的19位戛纳影帝','不管好人坏人弯的直的 演的好戛纳就喜欢'),
(NULL,'images/fun14.jpg','来自好莱坞的19位戛纳影帝','不管好人坏人弯的直的 演的好戛纳就喜欢'),
(NULL,'images/fun15.jpg','来自好莱坞的19位戛纳影帝','不管好人坏人弯的直的 演的好戛纳就喜欢'),
(NULL,'images/fun16.jpg','来自好莱坞的19位戛纳影帝','不管好人坏人弯的直的 演的好戛纳就喜欢'),
(NULL,'images/fun17.jpg','来自好莱坞的19位戛纳影帝','不管好人坏人弯的直的 演的好戛纳就喜欢'),
(NULL,'images/fun18.jpg','来自好莱坞的19位戛纳影帝','不管好人坏人弯的直的 演的好戛纳就喜欢'),
(NULL,'images/fun19.jpg','来自好莱坞的19位戛纳影帝','不管好人坏人弯的直的 演的好戛纳就喜欢'),
(NULL,'images/fun20.jpg','来自好莱坞的19位戛纳影帝','不管好人坏人弯的直的 演的好戛纳就喜欢');


CREATE TABLE shopping_mall(
    img_id INT PRIMARY KEY AUTO_INCREMENT,
    img VARCHAR(50),
    title VARCHAR(50),
    con_one VARCHAR(30),
    con_two VARCHAR(30)
);

INSERT INTO shopping_mall VALUES
(NULL,'images/pads04.jpg','居家日用','抱枕靠垫&nbsp;创意文具','水杯水壶&nbsp;更多>'),
(NULL,'images/pads03.jpg','玩具模型','模型公仔&nbsp;仿真收藏','变形金刚&nbsp;更多>'),
(NULL,'images/pads02.jpg','服装服饰','潮牌男装&nbsp;时尚女装','服饰配饰&nbsp;更多>'),
(NULL,'images/pads01.jpg','数码配件','手机配件&nbsp;充电装备','时尚U盘&nbsp;更多>'),
(NULL,'images/pads01.jpg','数码配件','手机配件&nbsp;充电装备','时尚U盘&nbsp;更多>'),
(NULL,'images/pads02.jpg','服装服饰','潮牌男装&nbsp;时尚女装','服饰配饰&nbsp;更多>'),
(NULL,'images/pads01.jpg','数码配件','手机配件&nbsp;充电装备','时尚U盘&nbsp;更多>'),
(NULL,'images/pads04.jpg','居家日用','抱枕靠垫&nbsp;创意文具','水杯水壶&nbsp;更多>');

CREATE TABLE user_publish(
    con_id INT PRIMARY KEY AUTO_INCREMENT,
    user_name  VARCHAR(50),
    P_content VARCHAR(1000),
    P_img VARCHAR(100),
    P_movie VARCHAR(100),
    P_score VARCHAR(32),
    P_date VARCHAR(50)
);

INSERT INTO user_publish VALUE
(NULL,'拽爷','在商业化的故事套路里，注入了一点提升格局的道德讨论，非常成功，比第一部还要好。关于高科技的想法，诺兰总是最犀利，声呐技术的影像化，使观众头昏目眩，效果卓越。',
'images/con_img04.jpg','《蝙蝠侠：黑暗骑士》','9.0','2017-05-19 14:16');

















