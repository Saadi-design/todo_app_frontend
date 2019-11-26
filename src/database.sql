CREATE DATABASE ToDo_List;

USE ToDo_List;

CREATE TABLE user (userId BIGINT(20) NOT NULL AUTO_INCREMENT, name VARCHAR(50), surname VARCHAR(50), PRIMARY KEY(userId));

SHOW TABLES;

+---------------------+
| Tables_in_ToDo_List |
+---------------------+
| user                |
+---------------------+
INSERT INTO user (userId,name,surname) VALUE ("1","Saadiya","Moid");

INSERT INTO user (userId,name,surname) VALUE ("2","Abdul","Moid");

CREATE TABLE task (id VARCHAR(50), taskDescription VARCHAR(100), completed VARCHAR(20), creationDate DATE, userId BIGINT(20), PRIMARY KEY (id));

ALTER TABLE task ADD FOREIGN KEY (userId) REFERENCES user(userId);

INSERT INTO task (id, taskDescription, completed, creationDate, userId) VALUE ("001","order inhalers","false","2019-11-19","2");

INSERT INTO task (id, taskDescription, completed, creationDate, userId) VALUE ("002","complete shopping for trip","true","2019-11-15","1");

INSERT INTO task (id, taskDescription, completed, creationDate, userId) VALUE ("003","book flight","false","2019-11-18","1");

 INSERT INTO task (id, taskDescription, completed, creationDate, userId) VALUE ("004","complete CV","true","2019-11-05","1");

INSERT INTO task (id, taskDescription, completed, creationDate, userId) VALUE ("005","pay credit card","false","2019-11-21","2");

 INSERT INTO task (id, taskDescription, completed, creationDate, userId) VALUE ("006","change energy suppliers","true","2019-10-30","1");


 SELECT * FROM task;
+-----+----------------------------+-----------+--------------+--------+
| id  | taskDescription            | completed | creationDate | userId |
+-----+----------------------------+-----------+--------------+--------+
| 001 | order inhalers             | false     | 2019-11-19   |      2 |
| 002 | complete shopping for trip | true      | 2019-11-15   |      1 |
| 003 | book flight                | false     | 2019-11-18   |      1 |
| 004 | complete CV                | true      | 2019-11-05   |      1 |
| 005 | pay credit card            | false     | 2019-11-21   |      2 |
| 006 | change energy suppliers    | true      | 2019-10-30   |      1 |
+-----+----------------------------+-----------+--------------+--------+

