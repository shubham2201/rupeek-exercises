-- 1. Switch to world DB
use world;

-- 2. List all tables 
show tables;

-- 3. View the schema of all tables
describe city;
describe country;
describe countrylanguage;

-- 4. Select all rows from the tables
select * from country;
select * from countrylanguage;
select * from city;


-- 5. Select the codes of all countries from North America
select Code 
from country 
where continent like ('North America');

-- 6. SUBQUERY: Select language details for English language for countries in North America. Additionally English must be an official language there.

select * from countrylanguage
where isOfficial = 'T' AND CountryCode IN (select code from country where continent like ('North America'));

-- 7. COUNT: Select count of cities
select count(*) as total_city from city;

-- 8. GROUP BY, ORDER BY, COUNT: Which country has highest number of cities?
select countrycode, count(*) as total_city 
from city 
group by countrycode
order by total_city DESC limit 1;

-- 9. WHERE, BETWEEN: Which language is its country’s official language and spoken by 80 to 90 percent of people?
select language
from countrylanguage
where percentage between 80 AND 90 AND isOfficial='T';

-- WHERE, COUNT: how many cities have been listed in Maharashtra district of India


-- WHERE, MAX, SUBQUERY: Which country has the maximum population (if population is taken as the population from the country table)
-- Using subquery: Find the maximum population of a country, then find the country with that population. Combine the two steps using a sub-query.


-- ORDER BY, LIMIT: Which country has the maximum population (if population is taken as the population from the country table)


-- COUNT, GROUP BY, ORDER BY: Which language is spoken in the maximum number of countries?


-- WHERE (including filtering language), COUNT, GROUP BY, ORDER BY: Among the following, which language is the official language of the most number of countries?
-- Languages to consider: German, Russian, Chinese
-- NOTE: Efficient solution

-- WHERE (excluding filtering language), COUNT, GROUP BY, HAVING (filtering by language IN), ORDER BY: Among the following, which language is the official language of the most number of countries?
-- Languages to consider: German, Russian, Chinese
-- NOTE: Relatively inefficient solution


-- WHERE, AND (optionally INNER JOIN) How many countries in North America are there where English is the official language?


-- SUBQUERY, WHERE, AND (optionally INNER JOIN), COUNT, GROUP BY: Who are the heads of state in countries in North America are there where English is the official language. How many such countries are under respective heads of state?


-- ORDER BY, LIMIT: Which city has the maximum population?


-- SUBQUERY, MAX: Which city has the maximum population?
select name, max(population)
from city
order by population limit 1;


-- WHERE, NULL: How many row entries are there with any value in the country table being missing?
 

-- COUNT, WHERE, LIKE: How many countries are there whose name starts with I and ends with A?
select count(*) 
from country
where name like 'I%A';

-- SUM, GROUP BY, ORDER BY, LIMIT: Which continent has least surface area?
select Continent, sum(SurfaceArea) as sa from country
group by Continent
order by sa limit 1;

-- WHERE, ORDER BY: What are the top 5 languages spoken in India?
select language from countrylanguage
where countrycode in (select code from country where name='India')
order by Percentage DESC limit 5;

-- COUNT, GROUP BY, ORDER BY: How many languages are spoken (as per data available) in each country? Present your results in descending order of number of languages spoken.


-- WHERE, COUNT, GROUP BY: What is the count of countries for each unique combination of Government form and head of state?
