create database developers;
use developers;
create table developers.devs(id int,name varchar(50),email varchar(50),age tinyint);
truncate table devs;



insert
into 
devs(id,name,email,age)  values (1,"ashin","ashin@gmail.com",18),
(2,"jomet","jomet@gmail.com",15),
(3,"varsha","varsha@gmail.com",17),
(4,"vijitha","vijitha@gmail.com",23),
(5,"bibin","bibin@gmail.com",22),
(6,"fathima","fathima@gmail.com",29);
-- > < <= >= != % *
-- clause where
-- and or not  in 
select * from devs;
 drop table devs;
update devs set age = 22 where name = "fathima";
delete from devs where name = "fathima";