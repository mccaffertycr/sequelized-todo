create database todo_db;
use todo_db;

create table todos(
    id int not null auto_increment,
    todo_desc varchar(50) not null,
    completed boolean,
    primary key (id)
);