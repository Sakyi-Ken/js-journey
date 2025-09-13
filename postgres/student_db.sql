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