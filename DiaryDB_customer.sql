create table customer
(
    id         int auto_increment
        primary key,
    titel      varchar(50)   not null,
    text       varchar(1000) not null,
    autor      varchar(50)   not null,
    email      varchar(50)   not null,
    phone      varchar(20)   not null,
    datum      date          not null,
    registered datetime      not null
)
    charset = utf8;

