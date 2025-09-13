--CREATE DATABASE student_database;

CREATE TABLE STUDENT_RECORD (
  ID SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  programme VARCHAR(100) NOT NULL,
  fees NUMERIC(10, 2)
);

INSERT INTO STUDENT_RECORD (ID, first_name, last_name, programme, fees) VALUES
(1124553, 'David', 'Otoo', 'Computer Science', 1500.00),
(1124554, 'Lydia', 'Eshun', 'Information Technology', 1200.00),
(1124555, 'Naana', 'Yawson', 'Software Engineering', 1800.00),
(1124556, 'Bobby', 'Brown', 'Cybersecurity', 1600.00);

SELECT * FROM STUDENT_RECORD;

SELECT first_name, last_name, programme FROM STUDENT_RECORD;

SELECT * FROM STUDENT_RECORD ORDER BY fees DESC;

SELECT * FROM STUDENT_RECORD WHERE fees BETWEEN 1000 AND 1500

SELECT SUM(fees) AS total_fees FROM STUDENT_RECORD WHERE programme = 'Software Engineering';