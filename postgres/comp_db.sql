CREATE TABLE Branch (
  branch_id SERIAL PRIMARY KEY,
  branch_name VARCHAR(100) NOT NULL,
  mgr_id INT,
  mgr_start_date DATE,
  FOREIGN KEY (mgr_id) REFERENCES Employees(emp_id) ON DELETE SET NULL
);

CREATE TABLE Employee (
  emp_id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  birth_date DATE NOT NULL,
  sex CHAR(1) CHECK(sex IN ('M', 'F')),
  salary NUMERIC(12, 2) CHECK (salary > 0),
  super_id INT,
  FOREIGN KEY (super_id) REFERENCES Employees(emp_id) ON DELETE SET NULL,
  branch_id INT REFERENCES Branch(branch_id) ON DELETE CASCADE,
);

CREATE TABLE Client (
  client_id INT PRIMARY KEY,
  client_name VARCHAR(100) NOT NULL,
  branch_id INT,
  FOREIGN KEY (branch_id) REFERENCES Branch(branch_id) ON DELETE CASCADE
);

CREATE TABLE Works_With (
  emp_id INT,
  client_id INT,
  total_sales NUMERIC(14, 2) CHECK (total_sales >= 0),
  FOREIGN KEY (emp_id) REFERENCES Employee(emp_id) ON DELETE CASCADE,
  FOREIGN KEY (client_id) REFERENCES Client(client_id) ON DELETE CASCADE
);

CREATE TABLE Supplier (
  branch_id INT, 
  supplier_name VARCHAR(150),
  supply_type VARCHAR(100),
  PRIMARY KEY (branch_id, supplier_name),
  FOREIGN KEY (branch_id) REFERENCES Branch(branch_id) ON DELETE CASCADE
);

--  TABLE Branch 
-- ADD FOREIGN KEY (mgr_id) REFERENCES Employee(emp_id) ON DELETE SET NULL;

-- ALTER TABLE Branch
-- DROP CONSTRAINT IF EXISTS branch_mgr_id_fkey;

-- ======================
-- Insert Branches
-- ======================
INSERT INTO Branch (branch_id, branch_name, mgr_id, mgr_start_date)
VALUES
  (1, 'Corporate', 100, '2006-02-09'),
  (2, 'Scranton', 102, '1992-04-06'),
  (3, 'Stamford', 106, '1998-02-13');

-- ======================
-- Insert Employees
-- ======================
INSERT INTO Employee (emp_id, first_name, last_name, birth_date, sex, salary, super_id, branch_id)
VALUES
  (100, 'David', 'Wallace', '1967-11-17', 'M', 250000, NULL, 1),
  (101, 'Jan', 'Levinson', '1961-05-11', 'F', 110000, 100, 1),
  (102, 'Michael', 'Scott', '1964-03-15', 'M', 75000, 100, 2),
  (103, 'Angela', 'Martin', '1971-06-25', 'F', 63000, 102, 2),
  (104, 'Kelly', 'Kapoor', '1980-02-05', 'F', 55000, 102, 2),
  (105, 'Stanley', 'Hudson', '1958-02-19', 'M', 69000, 102, 2),
  (106, 'Josh', 'Porter', '1969-09-05', 'M', 78000, 100, 3),
  (107, 'Andy', 'Bernard', '1973-07-22', 'M', 65000, 106, 3),
  (108, 'Jim', 'Halpert', '1978-10-01', 'M', 71000, 106, 3);

-- ======================
-- Update branch managers (link mgr_id to employees)
-- ======================
UPDATE Branch SET mgr_id = 100 WHERE branch_id = 1;
UPDATE Branch SET mgr_id = 102 WHERE branch_id = 2;
UPDATE Branch SET mgr_id = 106 WHERE branch_id = 3;

-- ======================
-- Insert Clients
-- ======================
INSERT INTO Client (client_id, client_name, branch_id)
VALUES
  (400, 'Dunmore Highschool', 2),
  (401, 'Lackawana County', 2),
  (402, 'FedEx', 3),
  (403, 'John Daly Law, LLC', 3),
  (404, 'Scranton Whitepages', 2),
  (405, 'Times Newspaper', 3),
  (406, 'FedEx', 2);

-- ======================
-- Insert Works_With
-- ======================
INSERT INTO Works_With (emp_id, client_id, total_sales)
VALUES
  (105, 400, 55000),
  (102, 401, 267000),
  (108, 402, 22500),
  (107, 403, 5000),
  (108, 403, 12000),
  (105, 404, 33000),
  (107, 405, 26000),
  (102, 406, 15000),
  (105, 406, 130000);

-- ======================
-- Insert Suppliers
-- ======================
INSERT INTO Supplier (branch_id, supplier_name, supply_type)
VALUES
  (2, 'Hammer Mill', 'Paper'),
  (2, 'Uni-ball', 'Writing Utensils'),
  (3, 'Patriot Paper', 'Paper'),
  (2, 'J.T. Forms & Labels', 'Custom Forms'),
  (3, 'Uni-ball', 'Writing Utensils'),
  (3, 'Hammer Mill', 'Paper'),
  (3, 'Stamford Labels', 'Custom Forms');

SELECT b.branch_name, SUM(ww.total_sales) AS branch_total_sales 
FROM Works_With ww
JOIN Employee e ON ww.emp_id = e.emp_id
JOIN Branch b ON e.branch_id = b.branch_id
GROUP BY b.branch_name
ORDER BY branch_total_sales DESC

CREATE VIEW HighEarners AS 
SELECT * FROM Employee
WHERE salary > (
SELECT AVG(salary) 
FROM Employee
);

SELECT * FROM HighEarners;

CREATE VIEW BranchManagers AS 
SELECT 
b.branch_name,
CONCAT(e.first_name, ' ', e.last_name) AS manager_name,
b.mgr_start_date
FROM Branch b
JOIN Employee e ON b.mgr_id = e.emp_id;

CREATE OR REPLACE VIEW BranchManagers AS
SELECT
b.branch_name,
CONCAT(e.first_name, ' ', e.last_name) AS manager_name,
b.mgr_start_date
FROM Branch b
LEFT JOIN Employee e ON b.mgr_id = e.emp_id;

BEGIN;

INSERT INTO Client (client_id, client_name, branch_id)
VALUES (407, 'Green Energy Solutions', 3);

INSERT INTO Works_With (emp_id, client_id, total_sales)
VALUES (108, 407, 45000);

COMMIT;