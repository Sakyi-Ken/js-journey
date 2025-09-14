-- CREATE DATABASE school_management_system;

CREATE TABLE Students (
student_id SERIAL PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
birth_date DATE,
gender CHAR(1) CHECK (gender IN ('M', 'F', 'O'))
);

CREATE TABLE Courses (
course_id SERIAL PRIMARY KEY,
course_name VARCHAR(100) NOT NULL,
credit_hours INT CHECK (credit_hours > 0),
instructor_id INT REFERENCES Instructors(instructor_id) ON DELETE CASCADE
);

CREATE TABLE Instructors (
instructor_id SERIAL PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
hire_date DATE NOT NULL,
department VARCHAR(100)
);

CREATE TABLE Enrollments (
enrollment_id SERIAL PRIMARY KEY,
student_id INT REFERENCES Students(student_id) ON DELETE CASCADE,
course_id INT REFERENCES Courses(course_id) ON DELETE CASCADE
);

CREATE TABLE Grade (
grade_id SERIAL PRIMARY KEY,
enrollment_id INT REFERENCES Enrollments(enrollment_id) ON DELETE CASCADE,
grade CHAR(1) CHECK (grade IN ('A', 'B', 'C', 'D', 'E', 'F'))
);

INSERT INTO Students (first_name, last_name, birth_date, gender)
VALUES 
('Kwame', 'Adarkwa', '2004-01-02', 'M'),
('Eunice', 'Poku', '2005-10-22', 'F'),
('Akosua', 'Serwaa', '2004-05-05', 'F'),
('Chris', 'Danquah', '2003-08-11', 'M');

INSERT INTO Instructors (first_name, last_name, hire_date, department)
VALUES 
('Aziz', 'Abdullai', '2015-08-01', 'Computer Science'),
('Mary', 'Sarfowaa', '2012-03-15', 'Mathematics'),
('Mark', 'Atta-Mensah', '2020-11-06', 'Computer Science');

INSERT INTO Courses (course_name, credit_hours, instructor_id)
VALUES 
('Database Systems', 3, 1),
('Linear Algebra', 3, 2),
('Business Analysis', 1, 3);

INSERT INTO Enrollments (student_id, course_id)
VALUES 
(1, 2),
(2, 1),
(3, 3);

INSERT INTO Grade (enrollment_id, grade)
VALUES 
(1, 'B'),
(2, 'B'),
(3, 'C');

SELECT * FROM Students;
SELECT * FROM Instructors;
SELECT c.course_name, i.first_name AS instructor_first_name, i.last_name AS instructor_last_name
FROM  Courses c
JOIN Instructors i ON c.instructor_id = i.instructor_id;

SELECT e.enrollment_id, s.first_name AS student_first_name, s.last_name AS student_last_name c.course_name
FROM Enrollments e
JOIN Students s ON e.student_id = s.student_id
JOIN Courses c ON e.course_id = c.course_id;

SELECT c.course_name, COUNT(e.student_id) AS student_count
FROM Courses c
LEFT JOIN Enrollments e ON c.course_id = e.course_id
GROUP BY c.course_name;

SELECT s.first_name, s.last_name, c.course_name, g.grade
FROM Grade g
JOIN Enrollments e ON g.enrollment_id = e.enrollment_id
JOIN Students s ON e.student_id = s.student_id
JOIN Courses c ON e.course_id = c.course_id;