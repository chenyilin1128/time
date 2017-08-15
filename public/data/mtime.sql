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
(NULL,'images/fun09.jpg','���Ժ������19λ���Ӱ��','���ܺ��˻������ֱ�� �ݵĺ���ɾ�ϲ��'),
(NULL,'images/fun10.jpg','���Ժ������19λ���Ӱ��','���ܺ��˻������ֱ�� �ݵĺ���ɾ�ϲ��'),
(NULL,'images/fun11.jpg','���Ժ������19λ���Ӱ��','���ܺ��˻������ֱ�� �ݵĺ���ɾ�ϲ��'),
(NULL,'images/fun12.jpg','���Ժ������19λ���Ӱ��','���ܺ��˻������ֱ�� �ݵĺ���ɾ�ϲ��'),
(NULL,'images/fun13.jpg','���Ժ������19λ���Ӱ��','���ܺ��˻������ֱ�� �ݵĺ���ɾ�ϲ��'),
(NULL,'images/fun14.jpg','���Ժ������19λ���Ӱ��','���ܺ��˻������ֱ�� �ݵĺ���ɾ�ϲ��'),
(NULL,'images/fun15.jpg','���Ժ������19λ���Ӱ��','���ܺ��˻������ֱ�� �ݵĺ���ɾ�ϲ��'),
(NULL,'images/fun16.jpg','���Ժ������19λ���Ӱ��','���ܺ��˻������ֱ�� �ݵĺ���ɾ�ϲ��'),
(NULL,'images/fun17.jpg','���Ժ������19λ���Ӱ��','���ܺ��˻������ֱ�� �ݵĺ���ɾ�ϲ��'),
(NULL,'images/fun18.jpg','���Ժ������19λ���Ӱ��','���ܺ��˻������ֱ�� �ݵĺ���ɾ�ϲ��'),
(NULL,'images/fun19.jpg','���Ժ������19λ���Ӱ��','���ܺ��˻������ֱ�� �ݵĺ���ɾ�ϲ��'),
(NULL,'images/fun20.jpg','���Ժ������19λ���Ӱ��','���ܺ��˻������ֱ�� �ݵĺ���ɾ�ϲ��');


CREATE TABLE shopping_mall(
    img_id INT PRIMARY KEY AUTO_INCREMENT,
    img VARCHAR(50),
    title VARCHAR(50),
    con_one VARCHAR(30),
    con_two VARCHAR(30)
);

INSERT INTO shopping_mall VALUES
(NULL,'images/pads04.jpg','�Ӽ�����','������&nbsp;�����ľ�','ˮ��ˮ��&nbsp;����>'),
(NULL,'images/pads03.jpg','���ģ��','ģ�͹���&nbsp;�����ղ�','���ν��&nbsp;����>'),
(NULL,'images/pads02.jpg','��װ����','������װ&nbsp;ʱ��Ůװ','��������&nbsp;����>'),
(NULL,'images/pads01.jpg','�������','�ֻ����&nbsp;���װ��','ʱ��U��&nbsp;����>'),
(NULL,'images/pads01.jpg','�������','�ֻ����&nbsp;���װ��','ʱ��U��&nbsp;����>'),
(NULL,'images/pads02.jpg','��װ����','������װ&nbsp;ʱ��Ůװ','��������&nbsp;����>'),
(NULL,'images/pads01.jpg','�������','�ֻ����&nbsp;���װ��','ʱ��U��&nbsp;����>'),
(NULL,'images/pads04.jpg','�Ӽ�����','������&nbsp;�����ľ�','ˮ��ˮ��&nbsp;����>');

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
(NULL,'קү','����ҵ���Ĺ�����·�ע����һ��������ֵĵ������ۣ��ǳ��ɹ����ȵ�һ����Ҫ�á����ڸ߿Ƽ����뷨��ŵ��������Ϭ�������ż�����Ӱ�񻯣�ʹ����ͷ��Ŀѣ��Ч��׿Խ��',
'images/con_img04.jpg','�����������ڰ���ʿ��','9.0','2017-05-19 14:16');

















