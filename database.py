import sqlite3

DATABASE_SCHEMA = 'database.sql'
DATABASE_FILE = 'database.db'


def load_schema():
    print("Loading Database Schema.")
    query = ''
    with open(DATABASE_SCHEMA, 'r') as f:
        query = query.join(f.readlines())

    open(DATABASE_FILE, 'w+').close()

    conn = sqlite3.connect(DATABASE_FILE)
    c = conn.cursor()

    c.executescript(query)

    conn.commit()
    conn.close()
    print("Schema loaded.")


def create_pizza(name):
    sql = "INSERT INTO pizza(name) VALUES(?)"

    conn = sqlite3.connect(DATABASE_FILE)
    c = conn.cursor()

    c.execute(sql, [name])

    conn.commit()
    conn.close()

    return c.lastrowid


def add_topping(pizza_id, topping_id):
    sql = "INSERT INTO pizza_topping(pizza_id, topping_id) VALUES(?, ?)"

    conn = sqlite3.connect(DATABASE_FILE)
    c = conn.cursor()

    c.execute(sql, [pizza_id, topping_id])

    conn.commit()
    conn.close()


def create_topping(name):
    sql = "INSERT INTO topping(name) VALUES(?)"

    conn = sqlite3.connect(DATABASE_FILE)
    c = conn.cursor()

    c.execute(sql, [name])

    conn.commit()
    conn.close()

    return c.lastrowid


if __name__ == '__main__':
    load_schema()
    cheese = create_topping('Ost')
    tomato_sauce = create_topping('Tomatsås')

    margherita = create_pizza('Margherita')
    add_topping(margherita, cheese)
    add_topping(margherita, tomato_sauce)

