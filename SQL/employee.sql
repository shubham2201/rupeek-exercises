-- 0. Retrieve all rows and all columns of employee table
show tables;
select * from department;
select * from dependent;
select * from dept_locations;
select * from employee;
select * from project;
select * from works_on;

-- 0. Retrieve First name and last name of ALL employees
select fname, lname 
from employee;

-- 1. Retrieve details of all male employees who draw a salary which is at least 30000
select * from employee
where salary>=30000 AND Sex like('M');

-- 2. Retrieve the details of all dependents of essn 333445555
select * from dependent
where essn = 333445555;

-- 3. Retrieve details of projects that are based out Houston or Stafford
select * from project 
where plocation in ('Houston', 'Stafford'); 

-- 4. Retrieve details of projects that are based out Houston or belongs to department 4
select * from project 
where plocation = 'Houston' AND Dnum=4; 

-- 5. Display the name of the department and the year in which the manager was appointed (Hint: Use the YEAR() function YEAR(mgr_start_date)
select dname , YEAR(mgr_start_date) as mgr_start from department;

-- 6. Display the SSN of all employees who live in Houston
--    (Hint: use LIKE() function as in address LIKE '%Houston%'
select ssn from employee where address like '%Houston%';

-- 6. Display employees whose name begins with J
select * from employee where fname like 'J%';

-- 7. Display details of all (male employee who earn more than 30000) or female employees who earn less than 30000)
select * from employee where
(salary>=30000 AND sex='M') OR (salary<=30000 AND sex='F');

-- 8. Display the essn of employees who have worked betwen 25 and 50 hours
--      a) Use AND clause
--      b) use BETWEEN clause  as in Hours between 25 and 30
select essn from works_on where hours between 25 AND 50;

-- 9. Display the names of projects that are based out of houston or stafford
--      a) Use OR clause
--      b) Use IN clause as in Plocation in ('Houston', 'Stafford')
select pname from project 
where plocation NOT in ('Houston', 'Stafford');

-- 10. Display the names of the project that are neither based out of houston nor out of stafford
--      a) Use AND/OR clause
--      b) use NOT IN clause as in Plocation NOT IN ('Houston','Stafford')
select pname from project 
where plocation in ('Houston', 'Stafford');

-- 11. Display the ssn and fully concatenated name of all employees
-- 	Use CONCAT function as in CONCAT(fname, ' ', minit, ' ', lname)
select ssn, concat(fname, ' ', lname) as fullName from employee;


-- 12. Display the employee details who does not have supervisor
-- 	Use IS NULL as in super_ssn IS NULL
select * from employee where isnull(super_ssn);



-- 13. Display the ssn of employees sorted by their salary in ascending mode
-- 	Use ORDER by SALARY

select ssn from employee order by salary;


-- 14. Sort the works_on table based on Pno and Hours
select * from works_on
order by pno, hours;


-- 15. Display the average project hours 
select avg(hours) from works_on;


-- 16. Display the number of employees who do not have a manager
select count(*) as not_have_manager from employee where isnull(super_ssn);


-- 17. What is the average salary of employees who do not have a manager

select avg(salary) as not_have_manager from employee where isnull(super_ssn);


-- 18. What is the highest salary of female employees
select max(salary) as max_salary_female 
from employee 
where salary in (select salary from employee where sex='F');


-- 19. What is the least salary of male employees
select min(salary) as min_salary_male 
from employee 
where salary in (select salary from employee where sex='M');



-- 20. Display the number of employees in each department
select dno, count(*) as emp_count 
from employee
group by Dno
order by Dno;



-- 21. Display the average salary of employees (department-wise and gender-wise)
-- 	GROUP BY Dno, Sex

select average(salary),

-- 22. Display the number of male employees in each department
select count(*) from employee where sex='m';


-- 23. Display the average, minimum, maximum hours spent in each project

select pno, avg(hours) as avg, max(hours) as max, min(hours) as min
from works_on
group by pno;

-- 24. Display the year-wise count of employees based on their year of birth

select year(bdate), count(*)
from employee
group by year(bdate);

-- 25. Dipslay the number of projects each employee is working on
select essn, count(*) from works_on
group by essn
order by essn;


-- 26. Display the Dno of those departments that has at least 3 employees
select dno, count(*) as emp_count 
from employee
group by Dno
having emp_count>=3;


-- 27. Among the people who draw at least 30000 salary, what is the department-wise average?

select dno, avg(salary)


-- 27b. Instead of dno, display dname



-- 28. Display the fname of employees working in the Research department



-- 29. Display the fname and salary of employees whose salary is more than the average salary of all the employees



-- 30. Which project(s) have the least number of employees?



-- 31. Display the fname of those employees who work for at least 20 hours



-- 32. What is the average salary of those employees who have at least one
--     dependent

-- JOIN Examples



-- 33. Display the ssn, lname and the name of the department of all the employees



-- 34. Display the ssn, lname, name of project of all the employees



-- 35a. Display the ssn, their department, the project they work on and
--     the name of the department which runs that project
-- 	Hint: Needs a 5 table join
-- 	Output heading: ssn, emp-dept-name, pname, proj-dept-no



-- 35b. Display the deptname, the project the department runs
-- 	Output heading: dept-name, pname



-- SOME COMPLICATED SQL Queries for Self-Study

-- 36. What is the name of the department that has least number of 
--     employees?


-- 37. What is the name of the department whose employees have the highest
--     average salary?



-- 38. Display the fname of the employee along with the fname of the manager



-- 39. Which employees work on projects belonging to departments other
--     than departments they belong to
-- 	Output: ssn, pname, emp-dept-name, proj-dept-name




-- ==============================================

-- LEFT OUTER JOIN

-- Inner join between employee and dependent
select e.ssn, e.fname, d.dependent_name
from employee e inner join dependent d on e.ssn = d.essn;

-- Left Outer join between employee and dependent
select e.ssn, e.fname, d.dependent_name
from employee e left join dependent d on e.ssn = d.essn;

-- Right out joint between dependent and employee
select e.ssn, e.fname, d.dependent_name
from deparment d right join employee e on e.ssn = d.essn;