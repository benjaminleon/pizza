
create table pizza(
    id integer primary key,
    name text not null
);

create table topping(
    id integer primary key,
    name text not null
);

create table pizza_topping(
    pizza_id integer not null,
    topping_id integer not null,
    foreign key(pizza_id) references pizza(id),
    foreign key(topping_id) references topping(id)
);
